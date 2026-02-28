import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { NavLink } from "react-router-dom";
import BasketIcon from "./BasketIcon";
import UserIcon from "./UserIcon";
import { products, SHOP_ROUTE } from "@/utils/constants";
import { Fragment } from "react";

const MobileMenu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: () => void;
}) => {
  return (
    <Dialog open={openMenu} onClose={setOpenMenu} className="lg:hidden">
      {/* Затемнение фона с анимацией */}
      <TransitionChild
        as={Fragment}
        enter="transition-opacity duration-300 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/50 z-50" />
      </TransitionChild>

      {/* Само меню с анимацией выезда справа */}
      <TransitionChild
        as={Fragment}
        enter="transform transition ease-in-out duration-300"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in-out duration-200"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-wrapper p-6 sm:max-w-sm sm:ring-1 sm:ring-border shadow-xl">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 bg-button rounded-sm">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/logo.svg" className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setOpenMenu()}
              className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-[var(--color-custom)] transition-colors"
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
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5 transition-colors"
                >
                  Catalog
                </NavLink>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold hover:bg-white/5 transition-colors">
                    Product
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-[open]:rotate-180 transition-transform duration-200"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 transition-all duration-200">
                    {[...products].map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold hover:bg-white/5 transition-colors"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5 transition-colors"
                >
                  Marketplace
                </NavLink>
                <NavLink
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold hover:bg-white/5 transition-colors"
                >
                  Company
                </NavLink>
              </div>
              <div className="py-6 flex gap-3">
                <BasketIcon />
                <UserIcon />
              </div>
            </div>
          </div>
        </DialogPanel>
      </TransitionChild>
    </Dialog>
  );
};

export default MobileMenu;
