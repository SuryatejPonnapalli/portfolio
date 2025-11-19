"use client";

import { Code } from "lucide-react";
import Image from "next/image";

interface ContentBlock {
  type: "text" | "subtitle" | "code" | "image" | "link";
  text?: string;
  code?: string;
  language?: string;
  href?: string;
  src?: string;
  alt?: string;
  caption?: string;
}

interface BlogContentProps {
  content: ContentBlock[];
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <article className="prose-sm text-foreground max-w-none space-y-6">
      {content.map((block, index) => (
        <div key={index}>
          {block.type === "subtitle" && (
            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">
              {block.text}
            </h2>
          )}

          {block.type === "text" && (
            <p className="text-base leading-relaxed text-foreground/90 line-clamp-none">
              {block.text}
            </p>
          )}

          {block.type === "link" && (
            <a
              href={block.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline decoration-blue-400 hover:text-blue-700 hover:decoration-blue-600 transition"
            >
              {block.text}
            </a>
          )}

          {block.type === "image" && block.src && (
            <figure className="my-8">
              <div className="relative w-full bg-secondary/50 rounded-lg overflow-hidden border border-border">
                <Image
                  src={block.src || "/placeholder.svg"}
                  alt={block.alt || "Blog image"}
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority={index < 2}
                />
              </div>
              {block.caption && (
                <figcaption className="text-sm text-muted-foreground text-center mt-3">
                  {block.caption}
                </figcaption>
              )}
            </figure>
          )}

          {block.type === "code" && (
            <div className="bg-secondary/50 border border-border rounded-lg overflow-hidden my-6">
              {/* Code Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-secondary/80 border-b border-border">
                <div className="flex items-center gap-2">
                  <Code size={16} className="text-muted-foreground" />
                  <span className="text-xs font-mono text-muted-foreground">
                    {block.language || "code"}
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <pre className="p-4 overflow-x-auto">
                <code
                  className={`font-mono text-sm text-foreground/80 font-${
                    block.language || "mono"
                  }`}
                >
                  {block.code}
                </code>
              </pre>
            </div>
          )}
        </div>
      ))}
    </article>
  );
}
