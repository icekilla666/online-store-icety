import { useEffect } from "react";
import Pagitanion from "../ui/Pagination";
import { useStore } from "@/utils/context";

const BottomParams = () => {
  const { device } = useStore();

  useEffect(() => {
    if (!device.limit) {
      device.setLimit(1); 
    }
  }, []);

  return (
    <div className="p-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="text-sm text-[var(--color-secondary)]">
        Showing{" "}
        <span className="font-medium text-[var(--color-def)]">
          1-{device.limit}
        </span>{" "}
        of{" "}
        <span className="font-medium text-[var(--color-def)]">
          {device.allDevices.length}
        </span>{" "}
        devices
      </div>
      <Pagitanion />
      <div className="flex items-center space-x-2">
        <span className="text-sm text-[var(--color-secondary)]">Show:</span>
        <select
          onChange={(e) => {
            device.setLimit(Number(e.target.value));
          }}
          className="bg-[var(--color-primary)] border border-[var(--color-border)] rounded-lg px-3 py-2 text-[var(--color-def)] focus:outline-none focus:border-[var(--color-custom)]"
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={18}>18</option>
          <option value={24}>24</option>
        </select>
        <span className="text-sm text-[var(--color-secondary)]">per page</span>
      </div>
    </div>
  );
};

export default BottomParams;
