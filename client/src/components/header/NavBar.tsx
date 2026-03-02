import { HOME_ROUTE, products, SHOP_ROUTE } from "../../utils/constants";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import BasketIcon from "./BasketIcon";
import UserIcon from "./UserIcon";

const NavBar = () => {
  return (
    <>
      <div className="flex lg:flex-1">
        <NavLink to={HOME_ROUTE} className="-m-1.5 p-1.5 bg-button rounded-sm">
          <img alt="" src="/logo.svg" className="h-8 w-auto" />
        </NavLink>
      </div>

      <PopoverGroup className="hidden lg:flex lg:gap-x-12">
        <NavLink
          to={SHOP_ROUTE}
          className={({ isActive }) =>
            isActive
              ? "text-sm/6 font-semibold text-custom"
              : "text-sm/6 font-semibold"
          }
        >
          Catalog
        </NavLink>

        <Popover className="relative">
          <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold ">
            Product
            <ChevronDownIcon
              aria-hidden="true"
              className="size-5 flex-none text-gray-500"
            />
          </PopoverButton>

          <PopoverPanel
            transition
            className="absolute left-1/2 z-10 mt-3 w-screen max-w-screen-lg -translate-x-1/2 overflow-hidden rounded-3xl bg-wrapper outline outline-1 -outline-offset-1 outline-border transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in h"
          >
            <div className="p-4 grid grid-cols-3">
              {products.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-primary"
                >
                  <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-primary group-hover:bg-wrapper">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-gray-400 group-hover:bg-primary"
                    />
                  </div>
                  <div className="flex-auto">
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        isActive
                          ? "text-sm/6 font-semibold text-custom"
                          : "text-sm/6 font-semibold"
                      }
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </NavLink>
                    <p className="mt-1 text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </PopoverPanel>
        </Popover>

        <NavLink to="#" className="text-sm/6 font-semibold ">
          Marketplace
        </NavLink>
        <NavLink to="#" className="text-sm/6 font-semibold ">
          Company
        </NavLink>
      </PopoverGroup>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-8">
        <BasketIcon />
        <UserIcon />
      </div>
    </>
  );
};

export default NavBar;
