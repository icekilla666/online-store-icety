import type { IDevice } from "@/types/types";
import { $authHost, $host } from "./index";

// типы устройств
export const createType = async ({ type }: { type: string }) => {
  const { data } = await $authHost.post("api/type", { type });
  return data;
};

export const fetchType = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

// бренды устройств
export const createBrand = async ({ brand }: { brand: string }) => {
  const { data } = await $authHost.post("api/brand", { brand });
  return data;
};

export const fetchBrand = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

// устройства
export const createDevice = async ({device}: {device: IDevice}) => {
  const { data } = await $authHost.post("api/device", device);
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
}