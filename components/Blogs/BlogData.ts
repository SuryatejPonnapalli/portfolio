interface Blog {
  id: string;
  title: string;
  description: string;
  category: string[];
  date: string;
  readTime: string;
  slug: string;
}
export const blogs: Blog[] = [
  {
    id: "1",
    title: "Go LLM Concurrency & Semantic Caching Architecture",
    description:
      "A deep dive into how I built a high-performance Go microservice that reduces duplicate LLM calls using singleflight, semantic caching with embeddings, and a Redis-backed job queue. A practical system design project showcasing concurrency, distributed caching, and microservice orchestration.",
    category: ["Go", "LLMs", "Redis", "System Design"],
    date: "Nov 2025",
    readTime: "10 min read",
    slug: "go-llm-concurrency",
  },
];
