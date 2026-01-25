import type { IBrand, IDevice, ITypes } from "@/types/types";
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  private _types: ITypes[] = [
    { id: 1, name: "All" },
    { id: 2, name: "TV & Monitors" },
    { id: 3, name: "Laptops & PCs" },
    { id: 4, name: "Accessories" },
    { id: 5, name: "Headphones" },
    { id: 6, name: "Gaming Consoles" },
    { id: 7, name: "Tablets" },
    { id: 8, name: "Smart Watches" },
    { id: 9, name: "Cameras" },
    { id: 10, name: "Smartphone" },
  ];
  private _brands: IBrand[] = [
    { id: 1, name: "All" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Realme" },
    { id: 4, name: "Lenovo" },
    { id: 5, name: "OnePlus" },
    { id: 6, name: "Huawei" },
    { id: 7, name: "HONOR" },
    { id: 8, name: "Samsung" },
  ];
  private _devices: IDevice[] = [
    {
      id: 1,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/test.png",
    },
    {
      id: 2,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 4.83,
      img: "/fen.png",
    },
    {
      id: 3,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 4.2,
      img: "/hdsb.png",
    },
    {
      id: 4,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/test.png",
    },
    {
      id: 5,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/test.png",
    },
    {
      id: 6,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/test.png",
    },
    {
      id: 7,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/test.png",
    },
  ];

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
