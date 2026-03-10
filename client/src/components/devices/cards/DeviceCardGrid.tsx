import type { DeviceCardProps } from "@/types/types";
import { useStore } from "@/utils/context";
import { StarIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const DeviceCardGrid = ({
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
      className="relative group flex cursor-pointer flex-col bg-wrapper rounded-3xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-custom)] hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--color-wrapper)]/90 backdrop-blur-sm shadow-md">
        <StarIcon className="w-4 h-4 text-yellow-500" />
        <span className="text-sm font-semibold text-[var(--color-def)]">
          {rating}
        </span>
      </div>

      <div className="relative h-64 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-wrapper)] p-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
        <img
          className="h-full object-contain"
          src={import.meta.env.VITE_API_URL + img}
          alt={name}
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2">
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium bg-primary`}
          >
            {brandName}
          </span>
          <span
            className={`text-xs px-3 py-1 rounded-full font-medium bg-primary`}
          >
            {typeName}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[var(--color-def)] line-clamp-1 group-hover:text-[var(--color-custom)] transition-colors">
            {name}
          </h3>
          <p className="text-sm text-[var(--color-secondary)] min-h-[45px] line-clamp-2 leading-relaxed">
            {shortDesc}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <div className="space-y-1 flex">
            <span className="text-2xl font-bold text-[var(--color-custom)]">
              ${new Intl.NumberFormat("en-EN").format(price)}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[var(--color-custom)] font-medium text-sm group-hover:gap-2 transition-all">
            <span>View details</span>
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default DeviceCardGrid;
