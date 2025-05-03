import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { ProjectType } from "@/types/types";

export default function ProjectPage({ project }: { project: ProjectType }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="w-full flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Portfolio</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            {project.githubUrl !== "null" && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="px-2 sm:px-3"
              >
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </Button>
            )}
            {project.liveUrl !== "null" && (
              <Button asChild size="sm" className="px-2 sm:px-3">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Live Demo</span>
                </a>
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-muted/50">
          <div className="w-full py-8 md:py-12 px-4 md:px-6">
            <div className="mx-auto max-w-[980px] flex flex-col gap-4 md:gap-6">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight tracking-tighter mb-2 md:mb-4">
                  {project.title}
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-[700px]">
                  {project.description}
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                <Image
                  src={project.images[0].url || "/placeholder.svg"}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="w-full py-8 md:py-12 px-4 md:px-6">
          <div className="mx-auto max-w-[980px]">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6 md:mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="setup">Setup Guide</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <div className="space-y-4">
                    {project.longDescription
                      .split("\n\n")
                      .map((paragraph, i) => (
                        <p key={i} className="text-base leading-7">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>

                <Separator className="my-8" />

                <div>
                  <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                  <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2">
                    {project.images.map((image, index) => (
                      <div key={index} className="space-y-2">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border bg-muted">
                          <Image
                            src={image.url || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {image.caption}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <ChevronRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator className="my-8" />

                <div>
                  <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="rounded-lg border px-3 py-1.5 md:px-4 md:py-2 text-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="setup" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Setup Instructions
                  </h2>
                  <div className="prose max-w-none">
                    <pre className="rounded-lg bg-muted p-4 overflow-x-auto">
                      <code>{project.setupInstructions}</code>
                    </pre>
                  </div>
                </div>

                <Separator className="my-8" />

                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Resources</h2>
                  <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
                    {project.githubUrl !== "null" && (
                      <Button
                        asChild
                        variant="outline"
                        className="h-auto py-3 md:py-4 justify-start"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-start gap-3 md:gap-4"
                        >
                          <Github className="h-5 w-5 md:h-6 md:w-6" />
                          <div className="text-left">
                            <div className="font-medium text-sm md:text-base">
                              GitHub Repository
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground">
                              View source code
                            </div>
                          </div>
                        </a>
                      </Button>
                    )}
                    {project.liveUrl !== "null" && (
                      <Button
                        asChild
                        className="h-auto py-3 md:py-4 justify-start"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-start gap-3 md:gap-4"
                        >
                          <ExternalLink className="h-5 w-5 md:h-6 md:w-6" />
                          <div className="text-left">
                            <div className="font-medium text-sm md:text-base">
                              Live Demo
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground">
                              See it in action
                            </div>
                          </div>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  );
}
