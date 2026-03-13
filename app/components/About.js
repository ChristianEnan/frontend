"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "5+", label: "Open Source Contributions" },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest uppercase text-primary-light">
            About Me
          </span>
          <h2 className="section-heading gradient-text">Who I Am</h2>
          <p className="section-subheading mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image / Visual Side */}
          <div className="reveal-left flex items-center justify-center">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <div className="relative flex h-80 w-80 items-center justify-center bg-surface sm:h-96 sm:w-96">
                  {/* Abstract code visual */}
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="relative z-10 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-4xl font-bold text-white shadow-lg shadow-primary/30">
                      EC
                    </div>
                    <p className="text-lg font-semibold text-foreground">
                      Enan Christian
                    </p>
                    <p className="text-sm text-muted">Python Developer</p>
                  </div>
                  {/* Floating code snippets */}
                  <div className="absolute left-4 top-4 rounded-lg bg-surface-light/80 px-3 py-1.5 font-mono text-xs text-primary-light backdrop-blur-sm">
                    def build():
                  </div>
                  <div className="absolute bottom-8 right-4 rounded-lg bg-surface-light/80 px-3 py-1.5 font-mono text-xs text-secondary backdrop-blur-sm">
                    return success ✓
                  </div>
                  <div className="absolute left-8 bottom-24 rounded-lg bg-surface-light/80 px-3 py-1.5 font-mono text-xs text-accent backdrop-blur-sm">
                    import dreams
                  </div>
                </div>
              </div>
              {/* Accent dots */}
              <div className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-primary animate-pulse-glow" />
              <div className="absolute -bottom-3 -left-3 h-4 w-4 rounded-full bg-secondary" />
            </div>
          </div>

          {/* Text Side */}
          <div className="reveal-right flex flex-col justify-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              Building the Future with{" "}
              <span className="gradient-text">Python</span>
            </h3>
            <p className="mb-4 leading-relaxed text-muted">
              I&apos;m a passionate Python Developer with expertise in building
              scalable applications, REST APIs, and automation tools. With a
              strong foundation in software engineering principles, I love
              turning complex problems into elegant solutions.
            </p>
            <p className="mb-8 leading-relaxed text-muted">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open source projects, or sharing my
              knowledge through blog posts and community contributions. I
              believe in writing clean, maintainable code that stands the test of
              time.
            </p>

            {/* Quick Info */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {[
                { icon: "📍", label: "Location", value: "Your City" },
                { icon: "📧", label: "Email", value: "enan@example.com" },
                { icon: "🎓", label: "Degree", value: "Computer Science" },
                { icon: "💼", label: "Freelance", value: "Available" },
              ].map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <span className="text-lg">{info.icon}</span>
                  <div>
                    <p className="text-xs font-medium text-muted">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="/resume.pdf" target="_blank" className="btn-primary w-fit">
              <span>Download Resume</span>
              <svg
                className="relative z-10 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="mb-1 text-3xl font-extrabold gradient-text">
                {stat.value}
              </p>
              <p className="text-sm font-medium text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
