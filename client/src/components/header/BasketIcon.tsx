import { BASKET_ROUTE } from "@/utils/constants";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const BasketIcon = () => {
  return (
    <NavLink to={BASKET_ROUTE} className="relative inline-block">
      <ShoppingCartIcon width={25} height={25} />
      <span className="absolute -top-2 -right-2 bg-[var(--color-custom)] text-white text-xs font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
        12
      </span>
    </NavLink>
  );
};

export default BasketIcon;
