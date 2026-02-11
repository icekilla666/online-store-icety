import type { UnionArray } from "@/types/types";
import { useState } from "react";

const Pagitanion = ({ array }: { array: UnionArray[] }) => {
  const [pages, setPages] = useState(10);
  return (
    <div className="p-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-sm text-[var(--color-secondary)]">
        Showing{" "}
        <span className="font-medium text-[var(--color-def)]">1-{pages}</span>{" "}
        of{" "}
        <span className="font-medium text-[var(--color-def)]">
          {array.length}
        </span>{" "}
        devices
      </div>
      <div className="flex items-center space-x-2">
        <button className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          ←
        </button>
        <button className="w-10 h-10 bg-[var(--color-custom)] text-white rounded-lg font-medium">
          1
        </button>
        <button className="w-10 h-10 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors font-medium">
          2
        </button>
        <button className="w-10 h-10 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors font-medium">
          3
        </button>
        <span className="px-2 text-[var(--color-secondary)]">...</span>
        <button className="w-10 h-10 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors font-medium">
          10
        </button>
        <button className="p-2 border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-primary)] transition-colors">
          →
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-[var(--color-secondary)]">Show:</span>
        <select
          onChange={(e) => setPages(Number(e.target.value))}
          className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="text-sm text-[var(--color-secondary)]">per page</span>
      </div>
    </div>
  );
};

export default Pagitanion;
