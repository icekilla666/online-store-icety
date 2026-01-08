// context/index.ts
import React, { createContext } from "react";
import type UserStore from "../store/UserStorage";
import type DeviceStore from "../store/DeviceStore";

interface ContextType {
  user: UserStore;
  device: DeviceStore;
}

export const Context = createContext<ContextType | null>(null);

export const useStore = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};
