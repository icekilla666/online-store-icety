import type { IBrand, IDevice, ITypes } from "@/types/types";
import { BoldIcon, CurrencyDollarIcon, DevicePhoneMobileIcon, TagIcon } from "@heroicons/react/24/outline";

const Stats = ({
  devices,
  types,
  brands,
}: {
  devices: IDevice[];
  types: ITypes[];
  brands: IBrand[];
}) => {
  const sum = devices.reduce((total, device) => total + device.price, 0)
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
              Total Devices
            </h3>
            <p className="text-3xl font-bold text-[var(--color-def)]">
              {devices.length}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
            <DevicePhoneMobileIcon width={30} height={30} />
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
              Total Types
            </h3>
            <p className="text-3xl font-bold text-[var(--color-def)]">
              {types.length}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
           <TagIcon width={30} height={30} />
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
              Total Brands
            </h3>
            <p className="text-3xl font-bold text-[var(--color-def)]">
              {brands.length}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
            <BoldIcon width={30} height={30} />
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-wrapper)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-sm font-medium text-[var(--color-secondary)] mb-2">
              Total Value
            </h3>
            <p className="text-3xl font-bold text-[var(--color-def)]">
              {sum.toFixed(2)}
            </p>
          </div>
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
            <CurrencyDollarIcon width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
