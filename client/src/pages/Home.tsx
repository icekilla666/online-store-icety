import { useTitle } from "@/hooks/useTitle";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal smartphone on desk",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    alt: "Smart watch and accessories",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Living room tech setup",
  },
];

const categories = [
  {
    title: "Smartphones",
    desc: "Shoot, play, work — all at full speed.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Laptops & PCs",
    desc: "Slim, powerful setups for work and gaming.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Audio",
    desc: "Clean sound you want to keep on.",
    img: "https://images.unsplash.com/photo-1518449018150-2d8f8f3f6d3a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Smart Home",
    desc: "Light, climate, and sound tuned to your mood.",
    img: "https://images.unsplash.com/photo-1558002038-1055f2f6b778?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "TV & Monitors",
    desc: "Cinematic visuals with precise color.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Accessories",
    desc: "Small details that make devices better.",
    img: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?auto=format&fit=crop&w=900&q=80",
  },
];

const highlights = [
  {
    title: "Premium Selection",
    text: "Only trusted brands and flagship models.",
  },
  {
    title: "Fast Delivery",
    text: "Same-day in the city, 2–4 days nationwide.",
  },
  {
    title: "Warranty & Support",
    text: "Official warranty and 24/7 service.",
  },
  {
    title: "Trade-In",
    text: "Upgrade with value and fewer steps.",
  },
];

const Home = () => {
  useTitle("Home");
  return (
    <main className="bg-primary text-secondary">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-custom/20 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-custom/20 blur-[120px]" />
        </div>
        <div className="container relative z-10 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-wrapper/80 px-5 py-2 text-xs uppercase tracking-[0.35em]">
                <span className="h-2.5 w-2.5 rounded-full bg-custom" />
                Icety electronics
              </div>
              <h1 className="text-[42px] font-semibold leading-[1.02] text-def lg:text-[72px]">
                Electronics that sounds like style.
              </h1>
              <p className="max-w-xl text-base text-secondary/80 lg:text-lg">
                We curate tech collections like a fashion wardrobe: clean lines,
                bold accents, and a perfect fit for your rhythm.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-full bg-custom px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:scale-[1.03]">
                  Go to catalog
                </button>
                <button className="rounded-full border border-border bg-wrapper px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary transition hover:border-custom">
                  About the brand
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Collections", value: "18" },
                  { label: "Avg rating", value: "4.9" },
                  { label: "Customers", value: "12k" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-border bg-wrapper/80 px-5 py-4"
                  >
                    <div className="text-2xl font-semibold text-def">
                      {item.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-secondary/60">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-border bg-wrapper p-4 shadow-2xl">
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="mt-4 space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                    New drop
                  </p>
                  <h3 className="text-xl font-semibold text-def">
                    Icety Signature
                  </h3>
                  <p className="text-sm text-secondary/70">
                    Power and elegance in one body.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-border bg-wrapper p-4 shadow-2xl">
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-def">
                      Wearables
                    </h3>
                    <p className="text-sm text-secondary/70">
                      Smart watches you do not want to take off.
                    </p>
                  </div>
                  <span className="rounded-full bg-custom/10 px-3 py-1 text-xs font-semibold text-custom">
                    trend
                  </span>
                </div>
              </div>
              <div className="rounded-[28px] border border-border bg-wrapper p-4 shadow-2xl sm:col-span-2">
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                      Atmosphere
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-def">
                      Smart Home Week
                    </h3>
                    <p className="mt-2 text-sm text-secondary/70">
                      A collection that sets the right home mood.
                    </p>
                  </div>
                  <img
                    src={heroImages[2].src}
                    alt={heroImages[2].alt}
                    className="h-40 w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-wrapper/70 py-12">
        <div className="container">
          <div className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-primary/90 px-6 py-6"
              >
                <h3 className="text-lg font-semibold text-def">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14 lg:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
              Categories
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-def">
              Choose your tech
            </h2>
          </div>
          <span className="text-sm text-secondary/70">
            From smartphones to smart home — everything in one place.
          </span>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[28px] border border-border bg-wrapper transition hover:-translate-y-1 hover:border-custom"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-def">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-custom/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-custom">
                    Popular
                  </span>
                </div>
                <p className="text-sm text-secondary/70">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary/80 py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                Collection
              </p>
              <h2 className="text-3xl font-semibold text-def lg:text-4xl">
                Icety Mood — tech as part of your look.
              </h2>
              <p className="text-sm text-secondary/70">
                A curation of gadgets with design focus: minimalism, clean
                lines, and signature hues.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Matte finishes and thin bezels",
                  "Optimized performance",
                  "Camera-first systems",
                  "Balanced battery life",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-wrapper px-4 py-3 text-sm text-secondary/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
                alt="Icety smartphone"
                className="h-56 w-full rounded-[28px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Icety laptop"
                className="h-56 w-full rounded-[28px] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80"
                alt="Icety audio"
                className="h-56 w-full rounded-[28px] object-cover sm:col-span-2"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-20">
        <div className="rounded-[32px] border border-border bg-wrapper px-8 py-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                Service
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-def">
                Personal support from first click to setup.
              </h2>
              <p className="mt-4 text-sm text-secondary/70">
                We advise, compare, deliver, and help set up your device.
                Icety is more than a store — it is a team on your side.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Device matching for needs and budget",
                "Showroom demos and test drive",
                "Warranty and post-warranty service",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-primary px-5 py-4"
                >
                  <span className="h-2 w-2 rounded-full bg-custom" />
                  <span className="text-sm text-secondary/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-wrapper/70 py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                Curation
              </p>
              <h2 className="text-3xl font-semibold text-def lg:text-4xl">
                Designed drops with a clear point of view.
              </h2>
              <p className="text-sm text-secondary/70">
                Each release is a story: materials, color, and performance
                aligned with the feeling you want to live in.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Minimal aesthetics",
                  "Best-in-class displays",
                  "Audio tuned by engineers",
                  "Smart home ready",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-primary px-4 py-2 text-xs uppercase tracking-[0.2em] text-secondary/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-border bg-primary p-4">
                <img
                  src="https://images.unsplash.com/photo-1512499617640-c2f999fe8886?auto=format&fit=crop&w=900&q=80"
                  alt="Curated smartphone"
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                    Drop 07
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-def">
                    Midnight Glass
                  </h3>
                  <p className="text-sm text-secondary/70">
                    Soft gradients, sharp performance.
                  </p>
                </div>
              </div>
              <div className="rounded-[28px] border border-border bg-primary p-4">
                <img
                  src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
                  alt="Curated workspace setup"
                  className="h-48 w-full rounded-2xl object-cover"
                />
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                    Drop 08
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-def">
                    Studio Focus
                  </h3>
                  <p className="text-sm text-secondary/70">
                    A desk setup that breathes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-20">
        <div className="rounded-[32px] border border-border bg-wrapper px-8 py-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-secondary/60">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold text-def lg:text-4xl">
                Answers to the most common questions.
              </h2>
              <p className="text-sm text-secondary/70">
                Everything you need to know about delivery, warranty, and
                in-store experience.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "How fast is delivery?",
                  a: "Same-day delivery in the city and 2–4 days nationwide, depending on your location.",
                },
                {
                  q: "Do you offer official warranty?",
                  a: "Yes. All devices come with official manufacturer warranty and Icety support.",
                },
                {
                  q: "Can I test devices before buying?",
                  a: "Yes, visit our showroom to try the latest models and compare side by side.",
                },
                {
                  q: "Is trade-in available?",
                  a: "Absolutely. Bring your device and get a valuation toward a new purchase.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-border bg-primary px-6 py-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-def">
                    {item.q}
                    <span className="ml-4 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-secondary/70 transition group-open:border-custom group-open:text-custom">
                      Toggle
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-secondary/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-primary/90">
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
                )
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
    </main>
  );
};

export default Home;
