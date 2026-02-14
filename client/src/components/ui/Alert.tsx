import type { AlertProps } from "@/types/types";
import { AlertTriangleIcon } from "lucide-react";

const Alert = ({ title, text, mode }: AlertProps) => {
  return (
    <>
      {mode === "error" && (
        <div className="fixed bottom-4 right-4 border text-white px-6 py-4 rounded-lg shadow-lg">
          <div>
            <AlertTriangleIcon />
            <h3>{title}</h3>
          </div>
          <p className="font-medium">{text}</p>
        </div>
      )}

      {mode === "success" && (
        <div className="fixed bottom-4 right-4 border text-white px-6 py-4 rounded-lg shadow-lg">
          <div>
            <AlertTriangleIcon />
            <h3>{title}</h3>
          </div>
          <p className="font-medium">{text}</p>
        </div>
      )}

      {mode === "info" && (
        <div className="fixed bottom-4 right-4 border text-white px-6 py-4 rounded-lg shadow-lg">
          <div>
            <AlertTriangleIcon />
            <h3>{title}</h3>
          </div>
          <p className="font-medium">{text}</p>
        </div>
      )}
    </>
  );
};

export default Alert;
