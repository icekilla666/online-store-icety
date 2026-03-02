import { useState } from "react";
import NavBar from "./NavBar";
import MobileMenu from "./MobileMenu";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-wrapper">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-screen-2xl items-center justify-between p-6 lg:px-8 w-full"
      >
        <NavBar />

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>
      <MobileMenu
        openMenu={mobileMenuOpen}
        setOpenMenu={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
