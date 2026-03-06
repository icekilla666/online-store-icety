import type { FavouriteProductsProps } from "@/types/types";
import { DEVICE_ROUTE } from "@/utils/constants";

const FavouriteProducts = ({
  devices,
  deleteHandlerWishlist,
}: FavouriteProductsProps) => {
  return (
    <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-def)]">
            Favorite Products
          </h2>
          <p className="text-[var(--color-secondary)] mt-2">
            Your saved products for quick access
          </p>
        </div>
        <span className="bg-[var(--color-primary)] text-[var(--color-custom)] px-4 py-2 rounded-lg font-medium">
          {devices.length} items
        </span>
      </div>

      <div className="wishlist">
        {devices.map((product) => (
          <article
            onClick={() =>
              window.open(
                DEVICE_ROUTE + "/" + product.id,
                "_blank",
                "noopener,noreferrer",
              )
            }
            key={product.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-wrapper border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-custom)] hover:shadow-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-xl bg-[var(--color-primary)] flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={import.meta.env.VITE_API_URL + product.img}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[var(--color-def)] group-hover:text-[var(--color-custom)] transition-colors line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex flex-col-reverse items-start gap-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full">
                    ★ {product.rating}
                  </span>
                  <p className="text-sm text-[var(--color-secondary)] line-clamp-1">
                    {product.shortDesc}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-row sm:flex-col items-center justify-between sm:items-end gap-3 sm:gap-1">
              <span className="text-xl font-bold">
                ${product.price.toLocaleString()}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteHandlerWishlist(product.id);
                }}
                className="text-sm text-[var(--color-secondary)] hover:text-red-500 hover:scale-110 transition-all duration-200 font-medium"
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FavouriteProducts;
