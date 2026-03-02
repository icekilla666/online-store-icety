import type { RecommendProps } from "@/types/types";

const Recommend = ({ title, description, devices }: RecommendProps) => {
  return (
    <div className="rounded-[26px] border border-[var(--color-border)] bg-[var(--color-primary)] p-6">
      <div>
        <h3 className="text-[20px] font-semibold text-[var(--color-def)]">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-secondary)]">
          {description}
        </p>
      </div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {devices.map((device) => (
          <article
            key={device.id}
            className="rounded-2xl border border-[var(--color-border)] bg-wrapper p-5"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="h-20 w-20 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
                <img
                  src={import.meta.env.VITE_API_URL + device.img}
                  alt={device.name}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <div>
                <p className="text-base font-semibold text-[var(--color-def)]">
                  {device.name}
                </p>
                <p className="text-sm text-[var(--color-secondary)]">
                  {device.shortDesc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommend;
