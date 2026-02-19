// beta

const Recommend = () => {
  return (
    <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-primary)] p-6">
      <div>
        <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
          Recommended add-ons
        </h3>
        <p className="text-sm text-[var(--color-secondary)]">
          Useful extras picked for what’s in your basket.
        </p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="h-20 w-20 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
              <img
                src="/1.png"
                alt="Frost Shell Case"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-[var(--color-def)]">
                Frost Shell Case
              </p>
              <p className="text-sm text-[var(--color-secondary)]">
                Shockproof matte finish
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="h-20 w-20 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
              <img
                src="/2.png"
                alt="Mag Dock Charger"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-[var(--color-def)]">
                Mag Dock Charger
              </p>
              <p className="text-sm text-[var(--color-secondary)]">
                65W fast charge
              </p>
            </div>
          </div>
        </article>
        <article className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="h-20 w-20 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
              <img
                src="/3.png"
                alt="Icey Care+"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-[var(--color-def)]">
                Icey Care+
              </p>
              <p className="text-sm text-[var(--color-secondary)]">
                Extended 2-year coverage
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Recommend;
