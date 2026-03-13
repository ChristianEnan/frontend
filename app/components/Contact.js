"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });
    try {
      const res = await fetch("http://localhost:8000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent! I'll get back to you soon." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ type: "error", message: "Unable to connect to server. Please try later." });
    }
    setLoading(false);
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const contactInfo = [
    { icon: "📧", label: "Email", value: "enan@example.com", href: "mailto:enan@example.com" },
    { icon: "📍", label: "Location", value: "Your City, Country", href: "#" },
    { icon: "📱", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal mb-16 text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-widest uppercase text-primary-light">Contact</span>
          <h2 className="section-heading gradient-text">Get In Touch</h2>
          <p className="section-subheading mx-auto">Have a project in mind? Let&apos;s build something amazing together.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="reveal-left lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold text-foreground">Let&apos;s Connect</h3>
            <p className="mb-8 leading-relaxed text-muted">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a key={info.label} href={info.href} className="flex items-center gap-4 group">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl transition-all group-hover:bg-primary/20 group-hover:scale-110">{info.icon}</span>
                  <div>
                    <p className="text-xs font-medium text-muted">{info.label}</p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary-light transition-colors">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="mb-4 text-sm font-semibold text-muted">Follow Me</p>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn", "Twitter"].map((s) => (
                  <a key={s} href="#" className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/50 text-muted transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary-light">
                    <span className="text-sm font-bold">{s[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal-right lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="form-input" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="form-input" placeholder="your@email.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="form-input" placeholder="What's this about?" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-input resize-none" placeholder="Tell me about your project..." />
              </div>

              {status.message && (
                <div className={`mb-6 rounded-xl p-4 text-sm font-medium ${status.type === "success" ? "bg-success/10 text-success border border-success/20" : "bg-error/10 text-error border border-error/20"}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                <span>{loading ? "Sending..." : "Send Message"}</span>
                {!loading && (
                  <svg className="relative z-10 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
