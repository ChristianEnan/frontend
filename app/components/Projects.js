"use client";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-Commerce API",
    description:
      "A full-featured RESTful API for an e-commerce platform built with FastAPI, featuring authentication, product management, order processing, and payment integration.",
    tags: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "#",
    gradient: "from-purple-500/20 to-blue-500/20",
    icon: "🛒",
  },
  {
    title: "Task Automation Suite",
    description:
      "An intelligent task automation framework that schedules, monitors, and executes complex workflows using Celery and Redis with real-time progress tracking.",
    tags: ["Python", "Django", "Celery", "Redis", "WebSockets"],
    github: "https://github.com",
    live: "#",
    gradient: "from-cyan-500/20 to-green-500/20",
    icon: "⚙️",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive data visualization dashboard with real-time analytics, custom reports, and export capabilities. Built with modern charting libraries.",
    tags: ["Python", "Flask", "React", "D3.js", "PostgreSQL"],
    github: "https://github.com",
    live: "#",
    gradient: "from-pink-500/20 to-orange-500/20",
    icon: "📊",
  },
  {
    title: "AI Chatbot Platform",
    description:
      "NLP-powered chatbot platform with customizable conversation flows, sentiment analysis, and multi-channel support for business automation.",
    tags: ["Python", "FastAPI", "OpenAI", "Docker", "MongoDB"],
    github: "https://github.com",
    live: "#",
    gradient: "from-violet-500/20 to-fuchsia-500/20",
    icon: "🤖",
  },
  {
    title: "DevOps Pipeline Manager",
    description:
      "CI/CD pipeline management tool with GitHub integration, automated testing, deployment tracking, and infrastructure monitoring.",
    tags: ["Python", "Django", "Docker", "AWS", "GitHub API"],
    github: "https://github.com",
    live: "#",
    gradient: "from-amber-500/20 to-red-500/20",
    icon: "🚀",
  },
  {
    title: "Content Management System",
    description:
      "Headless CMS with a powerful API, role-based access control, media management, and a beautiful admin dashboard for content creators.",
    tags: ["Python", "Django", "Next.js", "PostgreSQL", "S3"],
    github: "https://github.com",
    live: "#",
    gradient: "from-emerald-500/20 to-teal-500/20",
    icon: "📝",
  },
];

const filters = ["All", "Python", "FastAPI", "Django", "React", "Docker"];

export default function Projects() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="reveal mb-12 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest uppercase text-primary-light">
            Portfolio
          </span>
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Filters */}
        <div className="reveal mb-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-surface-light text-muted hover:bg-surface-lighter hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <div
              key={project.title}
              className="reveal glass-card group overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient Header */}
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-grid opacity-20" />
                <span className="relative text-6xl">{project.icon}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
                    aria-label="View on GitHub"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
                    aria-label="View Live"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
