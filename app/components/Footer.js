export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <a href="#home" className="text-xl font-bold">
              <span className="gradient-text">EC</span>
              <span className="text-foreground">.</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Python Developer crafting robust, scalable applications and elegant solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {["Home", "About", "Skills", "Projects", "Blog", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted transition-colors hover:text-primary-light">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex gap-3">
              {[
                { label: "GH", href: "https://github.com" },
                { label: "LI", href: "https://linkedin.com" },
                { label: "TW", href: "https://twitter.com" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-xs font-bold text-muted transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary-light">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} <span className="font-medium text-foreground">Enan Christian</span>. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Built with <span className="text-primary-light">Next.js</span> & <span className="text-secondary">FastAPI</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
