import type React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IUser {
  id?: number;
  email: string;
  name?: string;
  lastname?: string;
  phone?: string;
  role?: "user" | "admin";
}
export interface ITypes {
  id: number;
  name: string;
}
export interface IBrand {
  id: number;
  name: string;
}
export interface IDevice {
  id: number;
  name: string;
  shortDesc: string;
  price: number;
  rating: number;
  img: string;
  images: string[];
  typeId?: number;
  brandId?: number;
}

export interface HeadProps {
  title: string;
  description?: string;
  className?: string;
}
export interface DeviceCardProps extends IDevice {
  onClick: () => void;
}

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export interface BuyNowProps {
  name: string;
  shortDesc: string;
  price: number;
  rating: number;
}
export interface DeviceInfoArray {
  id: number;
  title: string;
  description: string;
}
export interface SpecificationsProps {
  deviceInfo: DeviceInfoArray[];
}

export interface QuantityCounterProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  className?: string;
}

export interface TabArrayProps {
  value: string;
  name: string;
  img?: React.ReactNode | string;
}

export interface TabProps {
  tabs: TabArrayProps[];
  isActive?: string;
  className?: string;
  onChange: (value: string) => void;
}
export interface SideBarInfoProps extends IUser, TabProps {}
export interface SettingsProps extends IUser {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onLogout: () => void;
}
export interface FavouriteProductsProps {
  devices: IDevice[];
  onClick?: () => void;
}

export interface ProfileInfoProps extends IUser, FavouriteProductsProps {
  onClick: () => void;
}

export type UnionArray = IDevice | IBrand | ITypes;
export interface HeadTableProps {
  title: string;
  description: string;
  placeholder: string;
  textBtn: string;
  array: UnionArray[];
  onSearch?: (filteredArray: UnionArray[]) => void;
  onClick: () => void;
}

export interface TableTemplateProps<T extends UnionArray> {
  // Данные
  data: T[];
  // Конфигурация
  title: string;
  description: string;
  placeholder: string;
  textBtn: string;
  // Рендер
  renderHeader: () => ReactNode;
  renderRow: (
    item: T,
    openEditModal: (id: number) => void,
    openDeleteModal: (id: number) => void,
  ) => ReactNode;
  modalName?: string;
  modal: () => void;
}

export interface Characteristic {
  id: number;
  title: string;
  description: string;
}

export interface DeviceFormData {
  name: string;
  shortDesc: string;
  price: number;
  brandId: number;
  typeId: number;
  rating: number;
  img?: string;
  images?: string[];
  characteristics: Characteristic[];
}

export interface ModalDeviceProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: DeviceFormData) => void;
  initialData?: DeviceFormData;
  brands: Array<{ id: number; name: string }>;
  types: Array<{ id: number; name: string }>;
  title?: string;
}

export interface ModalTypeProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string }) => void;
  initialData?: { name: string };
  title?: string;
}

export interface ModalBrandProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string }) => void;
  initialData?: { name: string };
  title?: string;
}
