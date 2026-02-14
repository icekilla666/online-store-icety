import { useState } from "react";
import Alert from "../ui/alert";

const SideBar = ({ total }: { total: number }) => {
  const [promocode, setPromocode] = useState(false);
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState<boolean | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const rebate = total / 2;

  const promo = () => {
    if (value === "ICEY-2026") {
      setPromocode(true);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <>
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
              ${Intl.NumberFormat("en-EN").format(total)}
            </span>
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
          {promocode && (
            <div className="flex items-center justify-between text-green-500">
              <span>Discount (50%)</span>
              <span>-${Intl.NumberFormat("en-EN").format(total / 2)}</span>
            </div>
          )}

          <div className="flex items-center justify-between text-base">
            <span className="text-[var(--color-def)] font-semibold">Total</span>
            <span className="text-[var(--color-def)] font-semibold">
              ${Intl.NumberFormat("en-EN").format(promocode ? rebate : total)}
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)]">
            Promo code
          </p>
          <div className="mt-3 flex items-center gap-2">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`w-full h-full ${hasError ? "border-red-700" : hasError === false ? "border-green-500" : "border-[var(--color-border)]"} rounded-lg border bg-wrapper px-3 py-2 text-sm text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]`}
              placeholder="ICEY-2026"
            />
            <button
              onClick={promo}
              className="px-4 py-2 rounded-lg border border-[var(--color-custom)] text-[var(--color-custom)] font-medium hover:bg-[var(--color-custom)] hover:text-white transition-colors"
            >
              Apply
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowAlert(true)}
          className="mt-6 w-full rounded-xl bg-[var(--color-custom)] py-3.5 text-white font-semibold hover:opacity-90 transition-opacity"
        >
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

      {showAlert && <Alert title="Error" text="qweqweqweqw" mode="error"/>}
    </>
  );
};

export default SideBar;
