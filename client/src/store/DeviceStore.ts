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
      name: "iPhone 15 Pro Max",
      shortDesc:
        "Флагманский смартфон Apple с процессором A17 Pro, камерой 48 МП и титановым корпусом. Поддержка USB-C и динамического острова.",
      price: 129999,
      rating: 4.9,
      img: "/test.png",
      images: ["/1.png", "/2.png", "/3.png"],
      typeId: 10,
      brandId: 3,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      shortDesc:
        "Премиальный Android-смартфон с пером S-Pen, камерой 200 МП и экраном Dynamic AMOLED 2X. Искусственный интеллект Galaxy AI.",
      price: 109999,
      rating: 4.8,
      img: "/fen.png",
      images: [],
      typeId: 7,
      brandId: 2,
    },
    {
      id: 3,
      name: "Xiaomi 14 Pro",
      shortDesc:
        "Мощный смартфон с камерой Leica, процессором Snapdragon 8 Gen 3 и быстрой зарядкой 120 Вт. Керамический корпус.",
      price: 79999,
      rating: 4.7,
      img: "/hdsb.png",
      images: [],
      typeId: 6,
      brandId: 4,
    },
    {
      id: 4,
      name: "Google Pixel 8 Pro",
      shortDesc:
        "Смартфон с лучшей камерой по версии DxOMark, чипом Tensor G3 и семью годами обновлений. Магия Google AI.",
      price: 89999,
      rating: 4.6,
      img: "/test.png",
      images: [],
      typeId: 10,
      brandId: 5,
    },
    {
      id: 5,
      name: "OnePlus 12",
      shortDesc:
        "Флагман с процессором Snapdragon 8 Gen 3, зарядкой 100 Вт и экраном ProXDR. Кислородная ОС на базе Android 14.",
      price: 69999,
      rating: 4.5,
      img: "/test.png",
      images: [],
      typeId: 4,
      brandId: 4,
    },
    {
      id: 6,
      name: "Realme GT 5 Pro",
      shortDesc:
        "Геймерский смартфон с экраном 144 Гц, процессором Snapdragon 8 Gen 3 и системой охлаждения 3D VC.",
      price: 59999,
      rating: 4.4,
      img: "/test.png",
      images: [],
      typeId: 8,
      brandId: 7,
    },
    {
      id: 7,
      name: "Asus ROG Phone 8",
      shortDesc:
        "Игровой смартфон с экраном 165 Гц, воздушными триггерами и системой охлаждения AeroActive Cooler 8.",
      price: 99999,
      rating: 4.3,
      img: "/test.png",
      images: [],
      typeId: 3,
      brandId: 4,
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
