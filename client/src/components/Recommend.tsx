import type { RecommendProps } from "@/types/types";
import { DEVICE_ROUTE } from "@/utils/constants";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Recommend = ({ title, description, devices }: RecommendProps) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-3xl bg-gradient-to-br from-[var(--color-wrapper)] to-[var(--color-primary)] p-7 border border-[var(--color-border)]">
      <div className="relative mb-8">
        <h3 className="text-2xl font-bold text-[var(--color-def)] inline-block pr-4 bg-[var(--color-primary)] relative z-10">
          {title}
        </h3>
        <div className="absolute top-1/2 left-0 w-full h-px bg-[var(--color-border)] -translate-y-1/2"></div>
      </div>

      <p className="text-[var(--color-secondary)] mb-8 -mt-4">{description}</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {devices.map((device) => (
          <article
            key={device.id}
            className="group relative bg-wrapper rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-custom)] transition-all duration-300"
          >
            <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              -20%
            </div>

            <div className="h-40 bg-[var(--color-primary)] flex items-center justify-center p-5 group-hover:scale-105 transition-transform duration-500">
              <img
                src={import.meta.env.VITE_API_URL + device.img}
                alt={device.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-4">
              <h4 className="font-semibold text-[var(--color-def)] mb-1 line-clamp-1">
                {device.name}
              </h4>
              <p className="text-xs text-[var(--color-secondary)] mb-3 line-clamp-2">
                {device.shortDesc}
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < Math.floor(device.rating) ? "text-yellow-500" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-xs text-[var(--color-secondary)] ml-1">
                  ({device.rating})
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg font-bold text-[var(--color-custom)]">
                    ${device.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-[var(--color-secondary)] line-through ml-2">
                    ${(device.price * 1.2).toFixed(0)}
                  </span>
                </div>
                <button
                  onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
                  className="p-2 rounded-full bg-[var(--color-custom)]/10 text-[var(--color-custom)] hover:bg-[var(--color-custom)] hover:text-white transition-colors"
                >
                  <ShoppingCartIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
