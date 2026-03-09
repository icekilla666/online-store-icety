const Header = ({
  totalQuantities,
  clearBasket,
}: {
  totalQuantities: number;
  clearBasket: () => void;
}) => {
  return (
    <div className="rounded-[28px] border border-[var(--color-border)] bg-wrapper p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-custom)]">
            Basket
          </p>
          <h1 className="mt-2 text-[40px] leading-tight text-[var(--color-def)]">
            Review and checkout
          </h1>
          <p className="mt-2 text-base text-[var(--color-secondary)]">
            {totalQuantities} items · Free delivery over $499 · 30-day returns
          </p>
        </div>
        <button
          onClick={clearBasket}
          disabled={!totalQuantities}
          className={`mt-4 sm:mt-0 w-full sm:w-auto px-5 py-2 rounded-lg border text-sm font-medium transition-colors
          ${
            !totalQuantities
              ? "border-border bg-gray-300/30 text-gray-400 cursor-not-allowed opacity-50"
              : "border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-def)] hover:border-[var(--color-custom)]"
          }`}
        >
          Clear all
        </button>
      </div>
    </div>
  );
};

export default Header;
