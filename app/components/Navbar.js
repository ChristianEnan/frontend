"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3 shadow-lg shadow-primary/10"
          : "py-5"
      }`}
    >
      <div
        className="mx-auto flex max-w-7xl items-center justify-between"
        style={{ paddingInline: "24px" }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group relative flex items-center gap-2 text-xl font-bold tracking-tight"
        >
          <span className="gradient-text">EC</span>
          <span className="text-foreground">.</span>
          <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-300 group-hover:w-12" />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative px-1 py-2 text-sm font-medium transition-all duration-300 ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary-light"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
              {activeSection === link.href.replace("#", "") && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-primary to-secondary" />
              )}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="btn-primary !px-6 !py-2.5 text-sm"
          >
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
              mobileOpen ? "scale-0 opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(15, 15, 30, 0.98), rgba(26, 26, 46, 0.95))",
          backdropFilter: "blur(25px)",
        }}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-xl font-semibold text-foreground transition-all duration-300 hover:text-primary-light"
            style={{
              transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              opacity: mobileOpen ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {link.label}
          </a>
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          className="btn-primary mt-6"
          onClick={() => setMobileOpen(false)}
          style={{
            transitionDelay: mobileOpen ? `${navLinks.length * 60}ms` : "0ms",
            transform: mobileOpen ? "scale(1)" : "scale(0.9)",
            opacity: mobileOpen ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <span>Download Resume</span>
        </a>
      </div>
    </nav>
  );
}
