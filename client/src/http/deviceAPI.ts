import type { IDevice } from "@/types/types";
import { $authHost, $host } from "./index";

// типы устройств
export const createType = async (name: string) => {
  const { data } = await $authHost.post("api/type", { name });
  return data;
};

export const deleteType = async (id: string) => {
  const { data } = await $authHost.delete("api/type", { data: { id } });
  return data;
};

export const editType = async (id: string, name: string) => {
  const { data } = await $authHost.patch("api/type", { id, name });
  return data;
};

export const fetchType = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

// бренды устройств
export const createBrand = async (name: string) => {
  const { data } = await $authHost.post("api/brand", { name });
  return data;
};

export const deleteBrand = async (id: string) => {
  const { data } = await $authHost.delete("api/brand", { data: { id } });
  return data;
};

export const editBrand = async (id: string, name: string) => {
  const { data } = await $authHost.patch("api/brand", { id, name });
  return data;
};

export const fetchBrand = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

// устройства
export const createDevice = async ({ device }: { device: IDevice }) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const deleteDevice = async (id: string) => {
  const { data } = await $authHost.delete("api/device", { data: { id } });
  return data;
};

export const editDevice = async (id: string, deviceData: Partial<IDevice>) => {
  const { data } = await $authHost.patch(`api/device/${id}`, deviceData);
  return data;
};

export const fetchDevice = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

// получение одного устройства
export const fetchOneDevice = async (id: string) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};

// корзина
export const fetchBasket = async () => {
  const { data } = await $authHost.get("api/basket");
  return data;
};

export const addBasket = async (deviceId: string) => {
  const { data } = await $authHost.post("api/basket", { deviceId });
  return data;
};

export const deleteBasket = async (deviceId: string) => {
  const { data } = await $authHost.delete("api/basket", { data: { deviceId } });
  return data;
};

export const clearBasket = async () => {
  const { data } = await $authHost.delete("api/basket");
  return data;
};
