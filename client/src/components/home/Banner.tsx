const Banner = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6]/5 via-transparent to-[var(--color-primary)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent opacity-50" />
      </div>
      <div className="container pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-wrapper/80 px-5 py-2 text-xs uppercase tracking-[0.35em]">
              <span className="h-2.5 w-2.5 rounded-full bg-custom" />
              Icety electronics
            </div>
            <h1 className="text-[42px] font-semibold leading-[1.02] text-def lg:text-[72px]">
              Electronics that sounds like style
            </h1>
            <p className="max-w-xl text-base text-secondary/80 lg:text-lg">
              We curate tech collections like a fashion wardrobe: clean lines,
              bold accents, and a perfect fit for your rhythm
            </p>
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
                src="src/assets/images/1.jpg"
                alt="1"
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
                  Power and elegance in one body
                </p>
              </div>
            </div>
            <div className="rounded-[28px] border border-border bg-wrapper p-4 shadow-2xl">
              <img
                src="src/assets/images/2.jpg"
                alt="2"
                className="h-48 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-def">Wearables</h3>
                  <p className="text-sm text-secondary/70">
                    Smart watches you do not want to take off
                  </p>
                </div>
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
                    A collection that sets the right home mood
                  </p>
                </div>
                <img
                  src="src/assets/images/3.jpg"
                  alt="3"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
