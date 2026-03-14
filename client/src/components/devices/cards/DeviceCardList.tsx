import type { DeviceCardProps } from "@/types/types";
import { useStore } from "@/utils/context";
import { StarIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const DeviceCardList = ({
  img,
  name,
  shortDesc,
  rating,
  price,
  onClick,
  brandId,
  typeId,
}: DeviceCardProps) => {
  const { device } = useStore();
  const brandName =
    device.brands.find((b) => b.id === brandId)?.name || "Unknown Brand";
  const typeName =
    device.types.find((t) => t.id === typeId)?.name || "Unknown Type";
  return (
    <article
      onClick={onClick}
      className="group flex flex-col sm:flex-row gap-6 p-6 bg-wrapper rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-custom)] hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      <div className="sm:w-48 h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-wrapper)] rounded-2xl p-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
        <img
          className="h-full object-contain"
          src={import.meta.env.VITE_API_URL + img}
          alt={name}
        />

        <div className="absolute bottom-2 right-2 sm:hidden flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-wrapper)]/90 backdrop-blur-sm">
          <StarIcon className="w-3 h-3 text-yellow-500" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>

      {/* Контент */}
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <h3 className="text-xl font-bold text-[var(--color-def)] group-hover:text-[var(--color-custom)] transition-colors line-clamp-1">
              {name}
            </h3>
            <div className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-primary)]">
              <StarIcon className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
          </div>

          {/* Описание */}
          <p className="text-sm text-[var(--color-secondary)] line-clamp-2 leading-relaxed max-w-2xl">
            {shortDesc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className={`text-xs px-3 py-1 rounded-full bg-primary`}>
              {brandName}
            </span>
            <span className={`text-xs px-3 py-1 rounded-full bg-primary`}>
              {typeName}
            </span>
          </div>
        </div>

        <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4 sm:gap-2">
          <div className="text-right">
            <span className="text-xs text-[var(--color-secondary)]">Price</span>
            <span className="text-2xl font-bold text-[var(--color-custom)] block">
              ${new Intl.NumberFormat("en-EN").format(price)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[var(--color-custom)] font-medium text-sm group-hover:gap-2 transition-all">
            <span>Details</span>
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeviceCardList;
