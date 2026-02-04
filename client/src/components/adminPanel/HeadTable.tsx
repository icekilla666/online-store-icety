import type { HeadTableProps } from "@/types/types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const HeadTable = ({
  title,
  description,
  placeholder,
  textBtn,
  array,
}: HeadTableProps) => {
  const [search, setSearch] = useState("");
  console.log("qqq", array);
  
  const filterSearch = () => {};

  return (
    <div className="p-6 border-b border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div>
        <h2 className="text-xl font-bold text-[var(--color-def)]">{title}</h2>
        <p className="text-sm text-[var(--color-secondary)] mt-1">
          {description}
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <div className="relative flex items-center">
          <MagnifyingGlassIcon className="absolute left-3 w-5 h-5 text-[var(--color-secondary)]" />
          <input
            type="search"
            placeholder={placeholder}
            className="pl-10 pr-4 py-2 bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)] transition-colors w-full"
          />
        </div>
        <button className="px-4 py-2 bg-[var(--color-custom)] text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
          {textBtn}
        </button>
      </div>
    </div>
  );
};

export default HeadTable;
