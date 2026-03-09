const Collection = () => {
  return (
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
              A curation of gadgets with design focus: minimalism, clean lines,
              and signature hues.
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
  );
};

export default Collection;
