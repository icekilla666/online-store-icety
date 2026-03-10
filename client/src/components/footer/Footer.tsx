import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "@/utils/constants";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">
              Explore
            </p>
            {["Catalog", "New arrivals", "Gift cards", "Trade-in"].map(
              (item) => (
                <NavLink 
                  to={HOME_ROUTE} 
                  key={item} 
                  onClick={scrollToTop}
                  className="text-secondary block hover:text-custom transition-colors"
                >
                  {item}
                </NavLink>
              ),
            )}
          </div>
          
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">
              Support
            </p>
            {["Delivery", "Warranty", "Returns", "FAQ"].map((item) => (
              <NavLink 
                to={HOME_ROUTE} 
                key={item} 
                onClick={scrollToTop}
                className="text-secondary block hover:text-custom transition-colors"
              >
                {item}
              </NavLink>
            ))}
          </div>
          
          <div className="space-y-3 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              Contact
            </p>
            <a 
              href="mailto:hello@icety.store" 
              className="text-secondary/80 block hover:text-custom transition-colors"
            >
              hello@icety.store
            </a>
            <a 
              href="tel:+14155550132" 
              className="text-secondary/80 block hover:text-custom transition-colors"
            >
              +1 (415) 555-0132
            </a>
            <p className="text-secondary/80">Mon–Sat · 10:00–20:00</p>
          </div>
        </div>
        
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs uppercase tracking-[0.25em] text-secondary/60">
          <span>© 2026 Icety Electronics</span>
          <div className="flex gap-4">
            <NavLink 
              to={HOME_ROUTE} 
              onClick={scrollToTop}
              className="hover:text-custom transition-colors"
            >
              Privacy
            </NavLink>
            <span>·</span>
            <NavLink 
              to={HOME_ROUTE} 
              onClick={scrollToTop}
              className="hover:text-custom transition-colors"
            >
              Terms
            </NavLink>
            <span>·</span>
            <NavLink 
              to={HOME_ROUTE} 
              onClick={scrollToTop}
              className="hover:text-custom transition-colors"
            >
              Accessibility
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;