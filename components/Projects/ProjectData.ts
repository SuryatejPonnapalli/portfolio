export const ridemamaProjectData = {
  title: "Ridemama",
  slug: "Car pooling WebApp",
  description:
    "A full-stack carpooling webapp with payment integration, user authentication, and map integration.",
  longDescription: `This is a carpooling web application built using Express.js, Next.js, MongoDB, and Node.js. We have integrated 
    OLA Maps for all map-related features. For payments, we used Razorpay. The application is hosted on DigitalOcean, 
    where both the Next.js and Express.js services are Dockerized and deployed as Droplets. We use a docker-compose.yml 
    file to orchestrate and run them together. For any images in the WebApp we made use of AWS S3 to store images and cloudfront to display images.`,
  technologies: [
    "Next.js",
    "Express.js",
    "Node.js",
    "MongoDB",
    "TypeScript",
    "Tailwind CSS",
    "Docker",
    "Docker Compose",
    "DigitalOcean",
    "Razorpay",
    "OLA Maps",
    "AWS S3",
    "CloudFront",
    "Twilio",
  ],
  features: [
    "User authentication and authorization",
    "Ride search and filtering",
    "Ride booking and request system",
    "Payment processing with Razorpay",
    "Ride history and tracking",
    "Driver dashboard for managing rides and requests",
    "Map integration with OLA Maps for route visualization",
    "Image storage and delivery using AWS S3 and CloudFront",
  ],
  setupInstructions: "None",
  githubUrl: "null",
  liveUrl: "https://ridemama.in",
  images: [
    {
      url: "/ridemama.jpeg",
      alt: "Ridemama logo",
      caption: "Official logo of our webapp.",
    },
    {
      url: "/projectImages/ridemama/home.png",
      alt: "Home page",
      caption: "Home page where you can search available rides.",
    },
    {
      url: "/projectImages/ridemama/host.png",
      alt: "Host page",
      caption: "Host page to confirm the route he uses.",
    },
    {
      url: "/projectImages/ridemama/settings.png",
      alt: "Settings page",
      caption:
        "Settings page where payment is handled and other personal details.",
    },
  ],
};

export const digitalDinerProjectData = {
  title: "Digital Diner",
  slug: "Food Ordering Platform",
  description:
    "A full-stack food ordering web app with hybrid database architecture, mobile-first UI, and Prisma ORM integration.",
  longDescription: `Digital Diner is a modern food ordering platform built with a mobile-focused frontend and a powerful backend 
      featuring PostgreSQL and MongoDB. The application uses a hybrid database approach: PostgreSQL for structured relational data 
      like users and orders, and MongoDB for flexible, dynamic menu structures. The backend is powered by Node.js, Express.js, and Prisma ORM 
      for PostgreSQL, while the frontend is built with modern JavaScript and designed to offer a smooth, app-like experience on mobile devices. 
      The project also includes a lightweight cart system managed via React Context API to avoid unnecessary backend calls.`,
  technologies: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "React",
    "Context API",
    "Tailwind CSS",
    "Vercel",
  ],
  features: [
    "User authentication system",
    "Hybrid database architecture using PostgreSQL and MongoDB",
    "Menu management with flexible schema using MongoDB",
    "Order system with strong consistency using PostgreSQL",
    "Admin dashboard for managing menu and orders",
    "Mobile-first user interface",
    "Global cart system using React Context API",
  ],
  setupInstructions: `
  1. Clone the repo.\n
     git clone https://github.com/SuryatejPonnapalli/digital-diner.git\n
  2. Setup the backend:\n
     cd backend\n
     npm i\n
     cp .env.sample .env\n
     (Fill in PostgreSQL DATABASE_URL)\n
     npx prisma generate\n
     npm run dev\n
  3. Setup the frontend:\n
     cd ../frontend\n
     npm i\n
     npm run dev`,
  githubUrl: "https://github.com/SuryatejPonnapalli/digital-diner", // Add your GitHub URL here if available
  liveUrl: "null",
  images: [
    {
      url: "/online-diner.png",
      alt: "Mobile homepage of Digital Diner",
      caption: "Homepage optimized for mobile with featured menu items",
    },
    {
      url: "/projectImages/digital-diner/menu.png",
      alt: "Menu browsing experience",
      caption: "Menu list with dynamic filtering and categories",
    },
    {
      url: "/projectImages/digital-diner/cart.png",
      alt: "Cart system",
      caption: "Cart using React Context API with live updates",
    },
    {
      url: "/projectImages/digital-diner/history.png",
      alt: "History",
      caption: "To view history of orders.",
    },
  ],
};

export const videoStreamingDRMProjectData = {
  title: "Secure Video Streaming & DRM",
  slug: "secure-video-streaming-drm",
  description:
    "A full-stack video streaming platform featuring AES-128 encryption, DRM, user authentication, and device-based access control.",
  longDescription: `This is a secure video streaming service built with Next.js, FFmpeg, AWS S3, and MongoDB. It enables AES-128 encryption of video content, DRM key protection, and fingerprint-based device-level restrictions. Videos are segmented and encrypted using FFmpeg, and only the HLS playlist (.m3u8) is uploaded to AWS S3 with pre-signed URL access. Users must be authenticated and accessing from a registered device (using FingerprintJS) to fetch the decryption key, which is hashed and never stored in plaintext. No .ts segments are saved, preventing content leaks.`,
  technologies: [
    "Next.js",
    "Node.js",
    "FFmpeg",
    "AWS S3",
    "MongoDB",
    "FingerprintJS",
    "JWT",
    "bcrypt.js",
    "TypeScript",
  ],
  features: [
    "AES-128 video encryption using FFmpeg",
    "HLS segmentation and .m3u8 playlist generation",
    "DRM protection via secure API-controlled decryption keys",
    "Secure pre-signed S3 URLs for playlist access",
    "No storage of video segments for enhanced security",
    "JWT-based user authentication",
    "FingerprintJS integration for device-level session control",
    "User device management panel to revoke old logins",
  ],
  setupInstructions: `
  1. Clone the repo.\n
     git clone https://github.com/SuryatejPonnapalli/drm-system.git\n
  2. Setup the Next.js:\n
     npm i\n
     cp .env.sample .env(Fill .env with your details)\n
     npm run dev`,
  githubUrl: "https://github.com/SuryatejPonnapalli/drm-system",
  liveUrl: "null",
  images: [
    {
      url: "/drm-system.png",
      alt: "Secure video streaming homepage",
      caption: "Homepage with login and secure video content preview",
    },
    {
      url: "/projectImages/drm-system/login.png",
      alt: "Device authorization panel",
      caption: "A login system with Fingerprint.js and email.",
    },
    {
      url: "/projectImages/drm-system/video-player.png",
      alt: "video player",
      caption: "The player decrypting using HLS conversion.",
    },
    {
      url: "/projectImages/drm-system/create-video.png",
      alt: "DRM key access control",
      caption:
        "An admin page to add video which would be encrypted and coverted into .m3u8 playlist.",
    },
  ],
};

export const goLLMConcurrencyProjectData = {
  title: "Go LLM Concurrency & Semantic Caching System",
  slug: "go-llm-concurrency-semantic-cache",
  description:
    "A high-performance LLM backend built with Go, Redis, and Python that eliminates duplicate LLM calls using singleflight, semantic caching with embeddings, and a Redis-powered job queue.",
  longDescription: `This system is designed to optimize LLM inference by combining Go’s concurrency model with semantic caching and distributed job queues. The service intercepts user prompts, checks an exact Redis cache, computes embeddings for semantic similarity matching, and uses Go’s singleflight to deduplicate concurrent identical requests. On a cache miss, prompts are pushed into a Redis-backed queue where worker services fetch jobs, call the Python FastAPI LLM runtime, and store responses back in Redis. The result is a highly efficient, scalable LLM architecture that reduces compute cost, prevents redundant LLM calls, and improves throughput.`,

  technologies: [
    "Go (Gin)",
    "Redis",
    "Python FastAPI",
    "Ollama",
    "PostgreSQL",
    "singleflight",
    "REST APIs",
  ],

  features: [
    "Exact caching of LLM responses using Redis",
    "Semantic caching with vector embeddings and cosine similarity",
    "Concurrency deduplication using Go's singleflight",
    "Redis-backed job queue for asynchronous LLM processing",
    "Go worker service to execute queued LLM tasks",
    "Python FastAPI microservice for embeddings and model inference",
    "Ollama backend for local LLM execution",
    "High scalability with distributed job consumers",
    "Reduces duplicate LLM calls by batching identical requests",
  ],

  setupInstructions: `
  1. Clone the repository:
     git clone https://github.com/SuryatejPonnapalli/go-distributed-queue.git

  2. Follow the Readme.md instructions.
  `,

  githubUrl: "https://github.com/SuryatejPonnapalli/go-distributed-queue",
  liveUrl: "null", //

  images: [
    {
      url: "/blogImages/go-concurrency.png",
      alt: "LLM concurrency architecture",
      caption:
        "High-level architecture of Go API, Redis cache, and Python LLM service.",
    },
    {
      url: "/projectImages/go-concurrency/homepage.png",
      alt: "Secure video streaming homepage",
      caption: "Homepage with login and secure video content preview",
    },
  ],
};
