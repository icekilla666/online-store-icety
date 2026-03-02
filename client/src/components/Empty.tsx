import type { EmptyProps } from "@/types/types";
import { Link } from "react-router-dom";

const Empty = ({ icon, title, description, link, linkHref }: EmptyProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center w-full">
      <div className="relative">
        <div className="rounded-full mb-6 text-gray-500/50">{icon}</div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-500/50 mb-3">{title}</h2>

      <p className="text-gray-500/50 max-w-md mb-8">
        {description}
        {linkHref && (
          <Link
            className="underline hover:text-custom transition"
            to={linkHref}
          >
            {link}
          </Link>
        )}
      </p>
    </div>
  );
};

export default Empty;
