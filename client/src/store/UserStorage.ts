import { makeAutoObservable } from "mobx";

export interface IUser {
  id: number;
  email: string;
  name?: string;
  role?: "user" | "admin";
}

export default class UserStore {
  private _isAuth: boolean = false;
  private _isAdmin: boolean = false;
  private _user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean): void {
    this._isAuth = bool;
  }

  setIsAdmin(admin: boolean): void {
    this._isAdmin = admin;
  }

  setUser(user: IUser | null): void {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get isAdmin(): boolean {
    return this._isAdmin;
  }

  get user(): IUser | null {
    return this._user;
  }
}

export const userStore = new UserStore();
