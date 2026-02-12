import Header from "@/components/basket/Header";
import BasketList from "@/components/basket/BasketList";
import { useStore } from "@/utils/context";

const Basket = () => {
  const { device } = useStore();
  return (
    <section className="container">
      <div className="py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="flex flex-col gap-8">
            <Header array={device.devices} />

            <BasketList devices={device.devices}/>

            <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-primary)] p-6">
              <div>
                <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
                  Recommended add-ons
                </h3>
                <p className="text-sm text-[var(--color-secondary)]">
                  Useful extras picked for what’s in your basket.
                </p>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-5">
                  <div className="flex items-center gap-3">
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
                  <div className="flex items-center gap-3">
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
                  <div className="flex items-center gap-3">
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
          </div>

          <aside className="sticky top-6 rounded-[30px] border border-[var(--color-border)] bg-wrapper p-7 h-fit">
            <h2 className="text-[26px] font-semibold text-[var(--color-def)]">
              Order summary
            </h2>
            <p className="mt-1 text-sm text-[var(--color-secondary)]">
              Shipping and taxes calculated at checkout.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">Subtotal</span>
                <span className="text-[var(--color-def)] font-medium">
                  $3,146
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">
                  Estimated tax
                </span>
                <span className="text-[var(--color-def)] font-medium">$0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--color-secondary)]">Delivery</span>
                <span className="text-[var(--color-def)] font-medium\">
                  Free
                </span>
              </div>
              <div className="h-px bg-[var(--color-border)] my-1" />
              <div className="flex items-center justify-between text-base">
                <span className="text-[var(--color-def)] font-semibold">
                  Total
                </span>
                <span className="text-[var(--color-def)] font-semibold">
                  $3,146
                </span>
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
