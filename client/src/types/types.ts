import type React from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface IUser {
  id?: number;
  email: string;
  name?: string;
  lastname?: string;
  number?: string;
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
  createdAt?: string;
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
  deviceId: string;
  selectedQuantity: number;
  onQuantityChange: (value: number) => void;
  addToBasketHandler: (id: string) => void;
  addToWishlistHandler: (id: string) => void;
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
  deleteHandlerWishlist: (id: number) => void;
}

export interface ProfileInfoProps extends IUser {
  devices: IDevice[];
  onClick: () => void;
  basketCount: number;
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
  renderRow: (item: T, openDeleteModal: (id: number) => void) => ReactNode;
  modalName?: string;
  modal: () => void;
  deleteFunc: (id: number) => void;
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
  img: string | null;
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

export interface BasketListProps {
  devices: IDevice[];
  quantities: Record<number, number>;
  onQuantityChange: (deviceId: number, newQuantity: number) => void;
  deleteItem: (deviceId: string) => void;
}

export interface AlertProps {
  title: string;
  text: string;
  mode: "success" | "error" | "info";
  onClose: (state: boolean) => void;
}

export interface FormData {
  name: string;
  lastname: string;
  number: string;
  email: string;
  password: string;
  r_password: string;
}

export interface FormErrors {
  name: string;
  lastname: string;
  number: string;
  email: string;
  password: string;
  r_password: string;
}

export interface TouchedFields {
  name: boolean;
  lastname: boolean;
  number: boolean;
  email: boolean;
  password: boolean;
  r_password: boolean;
}

export interface FormInputProps {
  id: string;
  name: keyof FormData;
  type: string;
  label: string;
  value: string;
  error?: string;
  touched: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (field: string) => void;
  required?: boolean;
  labelClassName?: string;
}
export interface FormProps {
  formData: FormData;
  errors: FormErrors;
  touched: TouchedFields;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (field: keyof TouchedFields) => void;
}

export interface RecommendProps {
  title: string;
  description: string;
  devices: IDevice[];
}

export interface EmptyProps {
  icon?: React.ReactNode | string;
  title: string;
  description: string;
  link?: string;
  linkHref?: string;
}
