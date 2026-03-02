import type { IBrand, IDevice, ITypes } from "@/types/types";
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  private _types: ITypes[] = [];
  private _brands: IBrand[] = [];
  private _devices: IDevice[] = [];
  private _allDevices: IDevice[] = [];
  private _page: number = 1;
  private _limit: number = 6;
  private _totalCount: number = 0;

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
  setAllDevices(devices: IDevice[]) {
    this._allDevices = devices;
  }
  setSelectedType(type: ITypes | null): void {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand: IBrand | null): void {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setSelectedDevice(device: IDevice): void {
    this._selectedDevice = device;
  }
  setPage(page: number): void {
    this._page = page;
  }
  setLimit(limit: number): void {
    this._limit = limit;
  }
  setTotalCount(count: number): void {
    this._totalCount = count;
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
  get allDevices() {
    return this._allDevices;
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
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
  get totalCount() {
    return this._totalCount;
  }
}

export const deviceStore = new DeviceStore();
