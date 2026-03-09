// context/AlertContext.tsx
import Alert from "@/components/ui/Alert";
import { createContext, useContext, useState, type ReactNode } from "react";

type AlertType = "success" | "error" | "info";

interface AlertContextType {
  showAlert: (mode: AlertType, title: string, text: string) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState({
    visible: false,
    mode: "info" as AlertType,
    title: "",
    text: "",
  });

  const showAlert = (mode: AlertType, title: string, text: string) => {
    setAlert({ visible: true, mode, title, text });
  };

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, visible: false }));
  };

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert.visible && (
        <Alert
          title={alert.title}
          text={alert.text}
          mode={alert.mode}
          onClose={hideAlert}
        />
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within AlertProvider");
  }
  return context;
};
