import type { IBrand, IDevice, ITypes } from "@/types/types";
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  private _types: ITypes[] = [];
  private _brands: IBrand[] = [];
  private _devices: IDevice[] = [];

  private _selectedType: ITypes | null = null;
  private _selectedBrand: IBrand | null = null;
  private _selectedDevice: IDevice | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTypes(types: ITypes[]): void {
    this._types = types;
  }
  setBrands(brands: IBrand[]): void {
    this._brands = brands;
  }
  setDevices(devices: IDevice[]): void {
    this._devices = devices;
  }
  setSeceltedType(type: ITypes): void {
    this._selectedType = type;
  }
  setSelectedBrand(brand: IBrand): void {
    this._selectedBrand = brand;
  }
  setSelectedDevice(device: IDevice): void {
    this._selectedDevice = device;
  }

  get types(): ITypes[] {
    return this._types;
  }
  get brands(): IBrand[] {
    return this._brands;
  }
  get devices(): IDevice[] {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get selectedDevice() {
    return this._selectedDevice;
  }
}

export const deviceStore = new DeviceStore();
