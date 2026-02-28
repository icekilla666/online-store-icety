import { SHOP_ROUTE } from "@/utils/constants";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const EmptyBasket = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="relative">
        <div className="rounded-full mb-6 text-gray-500/50">
          <ShoppingCart className="w-24 h-24 stroke-1" />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-500/50 mb-3">
        Your cart is feeling lonely
      </h2>

      <p className="text-gray-500/50 max-w-md mb-8">
        Add some items to your cart and they'll appear here.{" "}
        <Link className="underline hover:text-custom transition" to={SHOP_ROUTE}>
          Add now!
        </Link>
      </p>
    </div>
  );
};

export default EmptyBasket;
