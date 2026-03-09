const Curation = () => {
  return (
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
              Each release is a story: materials, color, and performance aligned
              with the feeling you want to live in.
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
  );
};

export default Curation;
