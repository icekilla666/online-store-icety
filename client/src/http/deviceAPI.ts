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

export const fetchDevice = async () => {
  const { data } = await $host.get("api/device");
  return data;
};

// получение одного устройства
export const fetchOneDevice = async (id: string | undefined) => {
  const { data } = await $host.get("api/device/" + id);
  return data;
};
