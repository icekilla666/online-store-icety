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
              Icety Mood — tech as part of your look
            </h2>
            <p className="text-sm text-secondary/70">
              A curation of gadgets with design focus: minimalism, clean lines,
              and signature hues
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
              src="src/assets/images/6.jpg"
              alt="Icety smartphone"
              className="h-72 w-full rounded-xl object-cover"
            />
            <img
              src="src/assets/images/5.jpg"
              alt="Icety laptop"
              className="h-72 w-full rounded-xl object-cover"
            />
              <img
                src="https://i.pinimg.com/736x/17/23/52/17235277c150cfcd615b1a1abb5f7850.jpg"
                alt="Icety audio"
                className="w-full h-96 rounded-xl object-cover sm:col-span-2 md:object-[0_-100px]"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
