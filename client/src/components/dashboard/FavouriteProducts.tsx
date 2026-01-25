import type { FavouriteProductsProps } from "@/types/types";
import { DEVICE_ROUTE } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

const FavouriteProducts = ({ devices, onClick }: FavouriteProductsProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
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
            onClick={() => navigate(DEVICE_ROUTE + "/" + product.id)}
            key={product.id}
            className="flex justify-between border border-[var(--color-border)] cursor-pointer rounded-xl px-4 py-6 hover:border-[var(--color-custom)] transition-colors group"
          >
            <div className="flex items-center">
              <div className="w-16 rounded-lg flex items-center justify-center text-2xl mr-4">
                <img src={product.img} alt={product.name} />
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-def)] group-hover:text-[var(--color-custom)] transition-colors">
                  {product.name}
                </h3>
                <span className="text-xs px-2 py-1 bg-[var(--color-primary)] text-[var(--color-secondary)] rounded-full mt-1">
                  {product.rating}
                </span>
                <p className="mt-2">{product.shortDesc}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center">
              <span className="text-xl font-bold text-[var(--color-def)]">
                {product.price}
              </span>
              <button className="text-sm text-[var(--color-custom)] hover:underline font-medium">
                Deleate
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FavouriteProducts;
