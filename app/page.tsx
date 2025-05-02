"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/public/profilePhoto.png";
import ridemama from "@/public/ridemama.png";
import onlineDiner from "@/public/online-diner.png";
import Image from "next/image";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDownRight } from "lucide-react";

export default function Home() {
  const { setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col px-10">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="w-full flex h-16 items-center justify-between">
          <div className="hidden md:block font-semibold">
            Suryatej Ponnapalli
          </div>
          <nav className="flex items-center gap-4">
            <a href="#projects" className="text-sm font-medium hover:underline">
              Projects
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:underline"
            >
              Experience
            </a>
            <a href="#contact" className="text-sm font-medium hover:underline">
              Contact
            </a>
            <button
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {resolvedTheme === "dark" ? <Sun /> : <Moon />}
            </button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 md:py-10 lg:py-12">
          <div className="mx-auto max-w-[980px] grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
                Hi, I&apos;m Suryatej Ponnapalli
              </h1>
              <p className="max-w-[750px] text-base text-muted-foreground sm:text-lg">
                A passionate full-stack developer with expertise in React,
                Next.js, and Node.js. I build accessible, responsive, and
                performant web applications.
              </p>
              <div className="flex items-center gap-4">
                <a href="/resume.pdf" target="_blank">
                  <button className="flex items-center border-[0.025rem] border-gray-500 rounded-md px-4 py-[0.3rem] transition-transform duration-200 hover:bg-gray-100 hover:text-gray-800 hover:scale-105">
                    Resume
                    <ArrowDownRight className="ml-2" />
                  </button>
                </a>
                <Button asChild variant="outline" size="icon">
                  <a
                    href="https://github.com/SuryatejPonnapalli"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a
                    href="https://www.linkedin.com/in/suryatej-ponnapalli/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="mailto:suryatej.ind@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-background shadow-xl">
                <Image
                  src={profilePhoto}
                  alt="profilePhoto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="w-full py-8 md:py-12 lg:py-16">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-6">
            <div className="w-full">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl mb-3">
                Projects
              </h2>
              <p className="max-w-[750px] text-lg text-muted-foreground">
                Here are some of my recent projects.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              <ProjectCard
                title="Ridemama"
                description="A full-stack carpooling webapp with payment integration, user authentication, and map integration."
                technologies={[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Express.js",
                  "Mongo",
                  "OLAMaps",
                  "Razerpay",
                  "Docker",
                  "AWS",
                ]}
                link="https://ridemama.in"
                imageSrc={ridemama}
              />
              <ProjectCard
                title="Digital Diner"
                description="An online diner system, which automates the system of ordering food in a restaurant."
                technologies={[
                  "React",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Prisma",
                  "Express.js",
                  "Cloudinary",
                  "JWT",
                ]}
                link="https://eatoes-digital-diner.vercel.app/"
                imageSrc={onlineDiner}
              />
              <ProjectCard
                title="DRM System"
                description="A DRM system which prevents recording or cloning of data from a website."
                technologies={[
                  "Next.js",
                  "Tailwind CSS",
                  "Express.js",
                  "Fingerprint.js",
                  "",
                ]}
                link="https://github.com/SuryatejPonnapalli/drm-system"
                imageSrc={onlineDiner}
              />
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="w-full py-6 md:py-10 lg:py-12 bg-muted/50"
        >
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Experience
            </h2>
            <div className="grid gap-8 w-full">
              <ExperienceCard
                company="Qritrim Inc."
                role="React Intern"
                period="May 2024 - June 2024"
                description="Built a responsive UI for a chatbot with history, including whatsapp like date system."
                technologies={["React", "Redash", "Less CSS"]}
              />
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              About Me
            </h2>
            <div>
              <p className="mb-4">
                I'm a passionate web developer with over 2+ years of experience
                building modern web applications. I specialize in creating
                responsive, accessible, and performant user interfaces.
              </p>
              <p className="mb-4">
                My journey in web development started when I in college, and
                I've been in love with creating digital experiences ever since.
                I enjoy solving complex problems and learning new technologies.
              </p>
              <p>
                When I'm not coding, you can find me travelling, gaming or
                watching anime.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="w-full bg-muted/50 py-12 md:py-24 lg:py-32"
        >
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-6">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
                Contact
              </h2>
              <p className="max-w-[750px] text-lg text-muted-foreground">
                Feel free to reach out to me for collaborations or just a
                friendly chat.
              </p>
            </div>

            <div className="mt-10 grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>
                <p className="mb-2">Email: suryatej.ind@gmail.com</p>
                <p className="mb-2">Location: Hyderabad, IN</p>
                <div className="flex gap-4 mt-4">
                  <Button asChild variant="outline">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your message"
                    />
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  technologies,
  imageSrc,
  link,
}: {
  title: string;
  description: string;
  imageSrc: any;
  technologies: string[];
  link: string;
}) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2">
      <CardContent className="p-0">
        <div className="aspect-video w-full relative bg-muted/50">
          <Image
            src={imageSrc}
            alt="project-photo"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="font-medium">
                {tech}
              </Badge>
            ))}
          </div>
          <Button asChild size="sm">
            <a href={link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </Button>
          <Button asChild size="sm" className="ml-4">
            <a href={link} target="_blank" rel="noreferrer">
              Live Link
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function ExperienceCard({
  company,
  role,
  period,
  description,
  technologies,
}: {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-semibold">{company}</h3>
            <p className="text-muted-foreground">{role}</p>
          </div>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
