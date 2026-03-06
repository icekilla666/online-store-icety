import React, { createContext } from "react";
import type UserStore from "../store/UserStore";
import type DeviceStore from "../store/DeviceStore";
import type BasketStore from "@/store/BasketStore";

interface ContextType {
  user: UserStore;
  device: DeviceStore;
  basket: BasketStore;
}

export const Context = createContext<ContextType | null>(null);

export const useStore = () => {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
};
