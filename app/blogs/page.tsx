"use client";

import BlogCard from "@/components/BlogCard";
import { ArrowUpRight, ChevronLeft } from "lucide-react";
import { blogs } from "@/components/Blogs/BlogData";
import Link from "next/link";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          Back to Home
        </Link>
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">
              Blogs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights on web development and modern web technologies. Join me
              as I explore best practices and share what I learn.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
