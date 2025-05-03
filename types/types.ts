interface ImageDataType {
  url: string;
  alt: string;
  caption: string;
}

export interface ProjectType {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  setupInstructions: string;
  githubUrl: string;
  liveUrl: string;
  images: ImageDataType[];
}
