const Service = () => {
  return (
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
              We advise, compare, deliver, and help set up your device. Icety is
              more than a store — it is a team on your side.
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
  );
};

export default Service;
