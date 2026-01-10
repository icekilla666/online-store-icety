import { useState } from "react";
import {
  BASKET_ROUTE,
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  products,
  SHOP_ROUTE,
} from "../utils/constants";

import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import { useStore } from "../utils/context";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useStore();
  return (
    <header className="bg-wrapper">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8 w-full"
      >
        <div className="flex lg:flex-1">
          <NavLink to={HOME_ROUTE} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="/public/logo.svg"
              className="h-8 w-auto"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to={SHOP_ROUTE} className="text-sm/6 font-semibold ">
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
                        className="size-6 text-gray-400 group-hover:"
                      />
                    </div>
                    <div className="flex-auto">
                      <NavLink to={item.href} className="block font-semibold ">
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
          <MagnifyingGlassIcon width={25} height={25} />
          <NavLink to={BASKET_ROUTE}>
            <ShoppingCartIcon width={25} height={25} />
          </NavLink>
          {!user.isAuth ? (
            <NavLink to={LOGIN_ROUTE} className="text-sm/6 font-semibold ">
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>
          ) : (
            <NavLink to={DASHBOARD_ROUTE} className="text-sm/6 font-semibold ">
              <UserCircleIcon width={25} height={25} />
            </NavLink>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-wrapper p-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="/public/logo.svg"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to={SHOP_ROUTE}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-white/5"
                >
                  Catalog
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold  hover:bg-white/5">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products].map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold  hover:bg-white/5"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-white/5"
                >
                  Marketplace
                </NavLink>
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  hover:bg-white/5"
                >
                  Company
                </NavLink>
              </div>
              <div className="py-6 flex gap-3">
                <MagnifyingGlassIcon width={25} height={25} />
                <NavLink to={BASKET_ROUTE}>
                  <ShoppingCartIcon width={25} height={25} />
                </NavLink>
                {!user.isAuth ? (
                  <NavLink
                    to={LOGIN_ROUTE}
                    className="text-sm/6 font-semibold "
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                ) : (
                  <NavLink
                    to={DASHBOARD_ROUTE}
                    className="text-sm/6 font-semibold "
                  >
                    <UserCircleIcon width={25} height={25} />
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
});

export default NavBar;
