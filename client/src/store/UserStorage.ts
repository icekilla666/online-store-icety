import { makeAutoObservable } from "mobx";

export interface IUser {
  id: number;
  email: string;
  name?: string;
  role?: "user" | "admin";
}

export default class UserStore {
  private _isAuth: boolean = false;
  private _user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean): void {
    this._isAuth = bool;
  }

  setUser(user: IUser | null): void {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): IUser | null {
    return this._user;
  }
}

export const userStore = new UserStore();
