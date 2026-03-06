import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";
import { userStore } from "./store/UserStore.ts";
import { deviceStore } from "./store/DeviceStore.ts";
import { Context } from "./utils/context.ts";
import { basketStore } from "./store/BasketStore.ts";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Context.Provider
      value={{ user: userStore, device: deviceStore, basket: basketStore }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>,
);
