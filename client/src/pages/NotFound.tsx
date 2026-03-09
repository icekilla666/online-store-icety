import { NavLink } from "react-router-dom";
import { HOME_ROUTE } from "@/utils/constants";
import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import FuzzyText from "@/components/ui/FuzzyText";

const NotFound = () => {
  return (
    <section className="container min-h-[calc(100vh-80px)] flex items-center justify-center py-12">
      <div className="text-center max-w-2xl mx-auto px-4">
          <FuzzyText
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            color="#8b5cf6"
            className="mb-7 mr-[20px] inline-block"
          >
            404
          </FuzzyText>
        <h2 className="font-bold text-def mb-4">Page not found</h2>
        <p className="text-lg text-secondary mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NavLink
            to={HOME_ROUTE}
            className="group flex items-center gap-3 px-6 py-3 bg-custom text-white rounded-xl font-medium hover:opacity-90 transition-all"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Go to homepage</span>
          </NavLink>

          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-3 px-6 py-3 border border-border text-def rounded-xl font-medium hover:border-[var(--color-custom)] hover:text-[var(--color-custom)] transition-all"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Go back</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-[var(--color-secondary)] mb-4">
            You might be interested in:
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <NavLink to="/shop" className="text-sm text-custom hover:underline">
              Browse catalog
            </NavLink>
            <NavLink
              to="/dashboard"
              className="text-sm text-custom hover:underline"
            >
              Your dashboard
            </NavLink>
            <NavLink
              to="/basket"
              className="text-sm text-custom hover:underline"
            >
              Shopping cart
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
