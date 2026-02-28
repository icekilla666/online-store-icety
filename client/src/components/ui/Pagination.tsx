import { useStore } from "@/utils/context";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { observer } from "mobx-react-lite";

const Pagitanion = observer(({ className }: { className?: string }) => {
  const { device } = useStore();
  const pageCount = Math.ceil(device.totalCount / device.limit);
  const pages: number[] = [];
  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <button className="p-2 border border-transparent rounded-lg transition-colors hover:border-custom">
        <ArrowLeft width={13} />
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => device.setPage(page)}
          className={`w-10 h-10 border border-[var(--color-border)] rounded-lg transition-colors font-medium ${device.page === page ? "bg-border" : "bg-transparent hover:bg-border"}`}
        >
          {page}
        </button>
      ))}
      <button className="p-2 border border-transparent rounded-lg transition-colors hover:border-custom">
        <ArrowRight width={13} />
      </button>
    </div>
  );
});

export default Pagitanion;
