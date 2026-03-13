"use client";
import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "SQL", level: 85 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "⚡",
    skills: [
      { name: "Django", level: 90 },
      { name: "FastAPI", level: 88 },
      { name: "Flask", level: 85 },
      { name: "React / Next.js", level: 75 },
      { name: "Celery", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS / Cloud", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 85 },
      { name: "Team Leadership", level: 80 },
      { name: "Code Review", level: 90 },
      { name: "Agile / Scrum", level: 75 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest uppercase text-primary-light">
            My Skills
          </span>
          <h2 className="section-heading gradient-text">Tech Stack</h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with every day
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat, catIndex) => (
            <div
              key={cat.title}
              className="reveal glass-card overflow-hidden p-6 sm:p-8"
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-xl">
                  {cat.icon}
                </span>
                <h3 className="text-lg font-bold text-foreground">
                  {cat.title}
                </h3>
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold text-primary-light">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: visible ? `${skill.level}%` : "0%",
                          transitionDelay: `${catIndex * 200 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Marquee */}
        <div className="reveal mt-16 overflow-hidden">
          <div className="flex gap-4" style={{ animation: "marquee 30s linear infinite" }}>
            {[
              "Python",
              "Django",
              "FastAPI",
              "Flask",
              "React",
              "Next.js",
              "Docker",
              "PostgreSQL",
              "Redis",
              "AWS",
              "Git",
              "Linux",
              "REST API",
              "GraphQL",
              "CI/CD",
              "TDD",
            ].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="tag shrink-0 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              "Python",
              "Django",
              "FastAPI",
              "Flask",
              "React",
              "Next.js",
              "Docker",
              "PostgreSQL",
              "Redis",
              "AWS",
              "Git",
              "Linux",
              "REST API",
              "GraphQL",
              "CI/CD",
              "TDD",
            ].map((tech, i) => (
              <span
                key={`${tech}-dup-${i}`}
                className="tag shrink-0 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
