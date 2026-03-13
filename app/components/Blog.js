"use client";
import { useEffect, useRef } from "react";

const posts = [
  {
    title: "Building Scalable APIs with FastAPI",
    excerpt: "Learn how to design and build production-ready APIs using FastAPI with best practices.",
    date: "March 10, 2026",
    readTime: "8 min read",
    category: "Backend",
    gradient: "from-purple-600 to-blue-500",
  },
  {
    title: "Python Async Programming Deep Dive",
    excerpt: "Understanding asyncio, async/await patterns, and how to write concurrent Python apps.",
    date: "February 25, 2026",
    readTime: "12 min read",
    category: "Python",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    title: "Docker Best Practices for Python Apps",
    excerpt: "A comprehensive guide to containerizing Python applications with Docker.",
    date: "February 10, 2026",
    readTime: "10 min read",
    category: "DevOps",
    gradient: "from-orange-500 to-pink-500",
  },
];

export default function Blog() {
  const sectionRef = useRef(null);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 gradient-bg" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest uppercase text-primary-light">Blog</span>
          <h2 className="section-heading gradient-text">Latest Articles</h2>
          <p className="section-subheading mx-auto">Insights and tutorials on software development</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <article key={post.title} className="reveal glass-card group cursor-pointer overflow-hidden" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className={`h-1.5 w-full bg-gradient-to-r ${post.gradient}`} />
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="tag text-xs">{post.category}</span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary-light">{post.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-light transition-all group-hover:gap-2">
                    Read More
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
