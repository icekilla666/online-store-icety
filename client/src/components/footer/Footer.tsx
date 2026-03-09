const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary">
      <div className="container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-wrapper/80 px-5 py-2 text-xs uppercase tracking-[0.35em]">
              <span className="h-2.5 w-2.5 rounded-full bg-custom" />
              Icety
            </div>
            <p className="max-w-sm text-sm text-secondary/70">
              Curated electronics with a sharp point of view — design, sound,
              and performance aligned with your lifestyle.
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-secondary/60">
              <span className="rounded-full border border-border px-3 py-2">
                New drops weekly
              </span>
              <span className="rounded-full border border-border px-3 py-2">
                Official warranty
              </span>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              Explore
            </p>
            {["Catalog", "New arrivals", "Gift cards", "Trade-in"].map(
              (item) => (
                <p key={item} className="text-secondary/80">
                  {item}
                </p>
              ),
            )}
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              Support
            </p>
            {["Delivery", "Warranty", "Returns", "FAQ"].map((item) => (
              <p key={item} className="text-secondary/80">
                {item}
              </p>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              Contact
            </p>
            <p className="text-secondary/80">hello@icety.store</p>
            <p className="text-secondary/80">+1 (415) 555-0132</p>
            <p className="text-secondary/80">Mon–Sat · 10:00–20:00</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.25em] text-secondary/60">
          <span>© 2026 Icety Electronics</span>
          <span>Privacy · Terms · Accessibility</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
