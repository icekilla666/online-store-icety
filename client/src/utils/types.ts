import type { IDevice } from "@/store/DeviceStore";

export interface DeviceCardProps extends IDevice {
  onClick: () => void;
}
