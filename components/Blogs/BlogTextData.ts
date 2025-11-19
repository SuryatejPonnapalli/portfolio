export const blogPosts: Record<string, any> = {
  "go-llm-concurrency": {
    id: "go-llm-concurrency",
    title:
      "Building a High-Performance LLM Concurrency & Semantic Cache System in Go",
    description:
      "A deep dive into how I built a scalable Go microservice that deduplicates concurrent LLM requests, adds semantic caching, and uses Redis-backed job queues for cost-efficient, low-latency inference.",
    author: "Suryatej Ponnapalli",
    date: "2025-11-19",
    readTime: "10 min read",
    category: "Go, LLMs",
    content: [
      {
        type: "subtitle",
        text: "Introduction",
      },
      {
        type: "text",
        text: "Large Language Models can become expensive and slow when handling multiple similar or identical requests. To solve this, I built a Go-based system that collapses duplicate concurrent LLM calls, adds semantic caching using embeddings, and uses a Redis-backed job queue for distributed processing. This blog explains the system architecture, reasoning behind design choices, and performance improvements.",
      },
      {
        type: "subtitle",
        text: "Source Code",
      },
      {
        type: "link",
        text: "GitHub Repository: https://github.com/SuryatejPonnapalli/go-distributed-queue",
        href: "https://github.com/SuryatejPonnapalli/go-distributed-queue",
      },
      {
        type: "subtitle",
        text: "The Problem",
      },
      {
        type: "text",
        text: "When multiple users send the same or similar prompt, naive systems trigger multiple LLM calls. This increases cost, latency, and load on the model. I wanted a system where one LLM call serves all identical or semantically similar prompts, even under heavy concurrency.",
      },

      {
        type: "subtitle",
        text: "High-Level Architecture",
      },
      {
        type: "text",
        text: "The system is composed of a Go API server, a Redis cache for exact and semantic storage, a Python FastAPI service for embeddings and LLM inference, and a Redis-backed job queue. Go’s `singleflight` ensures that only one LLM request executes even when multiple identical requests arrive at the same moment.",
      },
      {
        type: "subtitle",
        text: "Exact Prompt Cache (Redis)",
      },
      {
        type: "text",
        text: "Before computing embeddings or invoking the LLM, the system performs a constant-time lookup to check whether the exact prompt was previously solved. If found, the cached response is returned instantly with minimal latency.",
      },
      {
        type: "code",
        language: "go",
        code: `  respKey := "resp:" + prompt
    respVal, err := common.Redis.Get(common.Ctx, respKey).Result()
    if err == nil {
        c.JSON(200, gin.H{
        "status":   "cached_exact",
        "response": respVal,
        })
        return
    }`,
      },
      {
        type: "subtitle",
        text: "Semantic Cache using Embeddings",
      },
      {
        type: "text",
        text: "If an exact match is not found, the system generates embeddings using MiniLM. These embeddings are compared using cosine similarity to identify responses for semantically similar prompts. If the similarity crosses a defined threshold, the cached result is reused instead of calling the LLM again.",
      },
      {
        type: "code",
        language: "go",
        code: ` key, score, _:= ctl.svc.FindSimilarPrompt(vec, 0.7)

    if key != ""{
        basePrompt := strings.TrimPrefix(key, "embed:")
        resp, _ := common.Redis.Get(common.Ctx, "resp:"+basePrompt).Result()
        c.JSON(http.StatusOK, gin.H{
            "status":     "semantic_reuse",
            "response":   resp,
            "similarity": score,
        })
        return
    }`,
      },

      {
        type: "subtitle",
        text: "Concurrency Deduplication Using Singleflight",
      },
      {
        type: "text",
        text: "Go’s `singleflight` library ensures that if ten requests with the same prompt arrive simultaneously, only one goroutine calls the LLM. The remaining goroutines wait and receive the same result, preventing redundant expensive operations.",
      },
      {
        type: "code",
        language: "go",
        code: `func (s *LLMService) FetchOrQueue(prompt string)(string, error){
    result, err, _ := s.group.Do(prompt, func() (interface{}, error) {
        val, hit, _ := s.CheckEmbeddingCache(prompt)
        if hit{
            return val, nil
        }

        jobID, err := queue.PushEmbedJob(prompt)
        if err != nil {
            return nil, err
        }

        return jobID, nil

    })
    return result.(string), err
}`,
      },

      {
        type: "subtitle",
        text: "Redis Job Queue for LLM Workloads",
      },
      {
        type: "text",
        text: "For cache misses, requests are added to a Redis-backed queue. A pool of worker services fetch tasks, invoke the Python LLM service, and update the cache with the result. This design supports horizontal scaling and allows distributed consumers to process tasks.",
      },
      {
        type: "code",
        language: "go",
        code: `func (s *LLMService) GetPromptResponse(prompt string) (string, error){
    key := "resp:" + prompt

    cached, err := common.Redis.Get(common.Ctx, key).Result()
    if err == nil{
        return cached, nil
    }

    resp, err := llmclient.GetResponse(prompt)
    if err != nil{
        return "", err
    }

    err = common.Redis.Set(common.Ctx, key, resp, 0).Err()
    if err != nil{
        return "", err
    }

    return resp, nil
}`,
      },

      {
        type: "subtitle",
        text: "End-to-End Request Flow",
      },
      {
        type: "text",
        text: "1. User sends a prompt\n2. Exact cache lookup in Redis\n3. If no match → generate embedding\n4. Semantic cache lookup based on similarity\n5. If still no match → check singleflight group\n6. If not in-flight → queue job for LLM processing\n7. Python service processes job and returns response\n8. Response stored in Redis & returned to client\n9. Waiting clients receive the same result instantly",
      },

      {
        type: "subtitle",
        text: "Performance Improvements",
      },
      {
        type: "text",
        text: "By combining caching, concurrency collapsing, and semantic reuse, the system dramatically reduces duplicate LLM calls. This leads to improved throughput, lower inference latency, and significant cost savings in production environments.",
      },

      {
        type: "subtitle",
        text: "Key Skills Demonstrated",
      },
      {
        type: "text",
        text: "• Go concurrency design (goroutines + singleflight)\n• Distributed caching with Redis\n• Embedding-based semantic search\n• Microservices using Go + Python FastAPI\n• Designing scalable LLM inference pipelines\n• Queue-based task orchestration",
      },
      {
        type: "image",
        src: "/blogImages/go-concurrency.png",
        alt: "React performance metrics",
        caption: "Architecture model",
      },
      {
        type: "subtitle",
        text: "Conclusion",
      },
      {
        type: "text",
        text: "This project demonstrates how thoughtful architecture can drastically reduce LLM overhead. By combining Go’s concurrency model with modern LLM techniques, the system offers a robust, efficient, and scalable solution for real-world applications.",
      },
    ],
  },
};
