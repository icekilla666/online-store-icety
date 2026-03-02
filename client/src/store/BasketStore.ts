import { makeAutoObservable, runInAction } from "mobx";
import { fetchBasket } from "@/http/deviceAPI";

export default class BasketStore {
  private _items: any[] = [];
  private _count: number = 0;
  private _isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadBasket() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.clearBasket();
      return;
    }

    this._isLoading = true;
    try {
      const data = await fetchBasket();
      runInAction(() => {
        this._items = data.basket_devices || [];
        this._count = this._items.reduce(
          (sum, item) => sum + (item.quantity || 1),
          0,
        );
      });
    } catch (error) {
      console.error("Error loading basket:", error);
      this.clearBasket();
    } finally {
      runInAction(() => {
        this._isLoading = false;
      });
    }
  }

  async refreshBasket() {
    await this.loadBasket();
  }

  clearBasket() {
    this._items = [];
    this._count = 0;
  }

  setItems(items: any[]) {
    this._items = items;
    this._count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  get items() {
    return this._items;
  }

  get count() {
    return this._count;
  }

  get isLoading() {
    return this._isLoading;
  }
}

export const basketStore = new BasketStore();
