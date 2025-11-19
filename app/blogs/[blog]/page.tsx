"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { BlogContent } from "@/components/BlogContent";
import { blogPosts } from "@/components/Blogs/BlogTextData";
import { use } from "react";

export default function BlogPage({
  params,
}: {
  params: Promise<{ blog: string }>;
}) {
  const { blog } = use(params);

  const post = blogPosts[blog];

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <main className="max-w-3xl mx-auto px-4 py-12">
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft size={20} />
            Back to Blogs
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Blog Post Not Found</h1>
            <p className="text-muted-foreground">
              The blog post you're looking for doesn't exist.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          Back to Blogs
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground">
              {post.readTime}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
            <span>{post.author}</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* Content */}
        <BlogContent content={post.content} />
      </main>
    </div>
  );
}
