"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    description: string;
    category: string[];
    date: string;
    readTime: string;
    slug: string;
  };
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="group h-full p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg">
        {/* Header with date and read time */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground">{blog.date}</span>
          <span className="text-sm text-muted-foreground">{blog.readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
          {blog.description}
        </p>

        {/* Categories/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.category.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
          <span className="text-sm font-medium">Read More</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
