import { makeAutoObservable } from "mobx";

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
}

export default class DeviceStore {
  private _types: ITypes[] = [
    { id: 1, name: "Холодильники" },
    { id: 2, name: "Смартфоны" },
  ];
  private _brands: IBrand[] = [
    { id: 1, name: "Realme" },
    { id: 2, name: "Apple" },
  ];
  private _devices: IDevice[] = [
    {
      id: 1,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/public/test.jpg",
    },
    {
      id: 2,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/public/test.jpg",
    },
    {
      id: 3,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/public/test.jpg",
    },
    {
      id: 4,
      name: "Realme 10 Pro",
      shortDesc: "Desctiption of Realme 10 Pro",
      price: 20000,
      rating: 5,
      img: "/public/test.jpg",
    },
  ];

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

  get types(): ITypes[] {
    return this._types;
  }
  get brands(): IBrand[] {
    return this._brands;
  }
  get devices(): IDevice[] {
    return this._devices;
  }
}

export const deviceStore = new DeviceStore();