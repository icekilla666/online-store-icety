import type { IDevice } from "@/store/DeviceStore";

export interface DeviceCardProps extends IDevice {
  onClick: () => void;
}

export interface QuantityCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  className?: string;
}