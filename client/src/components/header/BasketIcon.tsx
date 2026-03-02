import { BASKET_ROUTE } from "@/utils/constants";
import { useStore } from "@/utils/context";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const BasketIcon = observer(() => {
  const { basket, user } = useStore();
  useEffect(() => {
    if (user.isAuth) {
      basket.loadBasket();
    }
  }, [user.isAuth]);
  const count = basket.count || 0;
  return (
    <NavLink to={BASKET_ROUTE} className="relative inline-block">
      <ShoppingCartIcon width={25} height={25} />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--color-custom)] text-white text-xs font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
          {count > 99 ? "99+" : count}
        </span>
      )}
    </NavLink>
  );
});

export default BasketIcon;
