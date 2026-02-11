const Basket = () => {
  return (
    <section className="container">
      <div className="py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex flex-col gap-8">
            <div className="rounded-[28px] border border-[var(--color-border)] bg-wrapper p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-custom)]">
                    Shopping cart
                  </p>
                  <h1 className="mt-2 text-[40px] leading-tight text-[var(--color-def)]">
                    Ready to ship. Built for the Icey ecosystem.
                  </h1>
                  <p className="mt-2 text-base text-[var(--color-secondary)]">
                    3 items · Free delivery from $499 · 30-day returns
                  </p>
                </div>
                <button className="mt-4 sm:mt-0 px-5 py-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-primary)] text-sm font-medium text-[var(--color-def)] hover:border-[var(--color-custom)] transition-colors">
                  Clear cart
                </button>
              </div>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[26px] border border-[var(--color-border)] bg-wrapper p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4 sm:w-1/2">
                    <div className="h-24 w-24 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
                      <img src="/1.png" alt="Icey Nova Pro" className="h-20 w-20 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
                        Icey Nova Pro
                      </h3>
                      <p className="text-sm text-[var(--color-secondary)]">
                        512GB · Alpine Blue
                      </p>
                      <p className="mt-2 text-xs text-[var(--color-secondary)]">
                        In stock · 2-year warranty
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-6">
                    <div className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-3 py-2">
                      <button className="h-8 w-8 rounded-full bg-wrapper text-[var(--color-def)]">-</button>
                      <span className="min-w-[24px] text-center text-sm font-semibold">1</span>
                      <button className="h-8 w-8 rounded-full bg-wrapper text-[var(--color-def)]">+</button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                        Price
                      </p>
                      <p className="text-[20px] font-semibold text-[var(--color-def)]">$1,299</p>
                    </div>
                    <button className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-custom)] transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </article>

              <article className="rounded-[26px] border border-[var(--color-border)] bg-wrapper p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4 sm:w-1/2">
                    <div className="h-24 w-24 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
                      <img src="/2.png" alt="Icey Air Max" className="h-20 w-20 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
                        Icey Air Max
                      </h3>
                      <p className="text-sm text-[var(--color-secondary)]">
                        256GB · Silver
                      </p>
                      <p className="mt-2 text-xs text-[var(--color-secondary)]">
                        Few left · Free engraving
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-6">
                    <div className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-3 py-2">
                      <button className="h-8 w-8 rounded-full bg-wrapper text-[var(--color-def)]">-</button>
                      <span className="min-w-[24px] text-center text-sm font-semibold">2</span>
                      <button className="h-8 w-8 rounded-full bg-wrapper text-[var(--color-def)]">+</button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                        Price
                      </p>
                      <p className="text-[20px] font-semibold text-[var(--color-def)]">$799</p>
                    </div>
                    <button className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-custom)] transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </article>

              <article className="rounded-[26px] border border-[var(--color-border)] bg-wrapper p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-4 sm:w-1/2">
                    <div className="h-24 w-24 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
                      <img src="/3.png" alt="Icey Studio Pods" className="h-20 w-20 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
                        Icey Studio Pods
                      </h3>
                      <p className="text-sm text-[var(--color-secondary)]">
                        Spatial Audio · Matte Black
                      </p>
                      <p className="mt-2 text-xs text-[var(--color-secondary)]">
                        Bestseller · 24h battery
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-1 items-center justify-between gap-6">
                    <div className="flex items-center gap-2 rounded-full bg-[var(--color-primary)] px-3 py-2">
                      <button className="h-8 w-8 rounded-full bg-wrapper text-[var(--color-def)]">-</button>
                      <span className="min-w-[24px] text-center text-sm font-semibold">1</span>
                      <button className="h-8 w-8 rounded-full bg-wrapper text-[var(--color-def)]">+</button>
                    </div>
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                        Price
                      </p>
                      <p className="text-[20px] font-semibold text-[var(--color-def)]">$249</p>
                    </div>
                    <button className="text-sm text-[var(--color-secondary)] hover:text-[var(--color-custom)] transition-colors">
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            </div>

            <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-primary)] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
                    Add essentials
                  </h3>
                  <p className="text-sm text-[var(--color-secondary)]">
                    Accessories handpicked for your devices.
                  </p>
                </div>
                <button className="px-5 py-2.5 rounded-lg border border-[var(--color-custom)] text-[var(--color-custom)] font-medium hover:bg-[var(--color-custom)] hover:text-white transition-colors">
                  Browse
                </button>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    Case
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-def)]">
                    Frost Shell
                  </p>
                  <p className="text-xs text-[var(--color-secondary)]">Shockproof matte</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    Power
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-def)]">
                    Icey Mag Dock
                  </p>
                  <p className="text-xs text-[var(--color-secondary)]">65W fast charge</p>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                    Service
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[var(--color-def)]">
                    Icey Care+
                  </p>
                  <p className="text-xs text-[var(--color-secondary)]">2 years coverage</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[30px] border border-[var(--color-border)] bg-wrapper p-7 h-fit">
            <h2 className="text-[26px] font-semibold text-[var(--color-def)]">Order summary</h2>
            <p className="mt-1 text-sm text-[var(--color-secondary)]">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">Subtotal</span>
                <span className="text-[var(--color-def)] font-medium">$3,146</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">Estimated tax</span>
                <span className="text-[var(--color-def)] font-medium">$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">Delivery</span>
                <span className="text-[var(--color-def)] font-medium\">Free</span>
              </div>
              <div className="h-px bg-[var(--color-border)] my-1" />
              <div className="flex items-center justify-between text-base">
                <span className="text-[var(--color-def)] font-semibold">Total</span>
                <span className="text-[var(--color-def)] font-semibold">$3,146</span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                Promo code
              </p>
              <div className="mt-3 flex items-center gap-2">
                <input
                  className="w-full rounded-lg border border-[var(--color-border)] bg-wrapper px-3 py-2 text-sm text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
                  placeholder="ICEY-2026"
                />
                <button className="px-4 py-2 rounded-lg border border-[var(--color-custom)] text-[var(--color-custom)] font-medium hover:bg-[var(--color-custom)] hover:text-white transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <button className="mt-6 w-full rounded-xl bg-[var(--color-custom)] py-3.5 text-white font-semibold hover:opacity-90 transition-opacity">
              Checkout
            </button>

            <div className="mt-5 grid gap-3 text-xs text-[var(--color-secondary)]">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-primary)] p-3">
                Free returns within 30 days.
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-primary)] p-3">
                Secure payment with Icey Protect.
              </div>
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-primary)] p-3">
                Express delivery available.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Basket;  