import type { AlertProps } from "@/types/types";
import { AlertTriangleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Alert = ({ title, text, mode, onClose }: AlertProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const getColors = () => {
    switch (mode) {
      case "success":
        return "border-[#0f5c2e] bg-[#052e14]";
      case "error":
        return "border-[#7b3306] bg-[#461901]";
      case "info":
        return "border-[#073b7a] bg-[#021b38]";
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(false);
    }, 300);
  };

  useEffect(() => {
    const autoClose = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(autoClose);
  }, []);

  return (
    <div
      className={`
        fixed 
        bottom-4 
        right-4 
        left-4
        border
        ${getColors()}
        sm:left-auto
        sm:w-[400px]
        text-white
        p-4
        rounded-lg 
        shadow-lg 
        z-50
        mx-auto
        transition-all
        duration-300
        ease-in-out
        ${
          isClosing
            ? "opacity-0 translate-y-2 scale-95"
            : "opacity-100 translate-y-0 scale-100"
        }
      `}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 mb-2">
          {mode === "error" && <AlertTriangleIcon width={17} height={17} />}
          {mode === "success" && <CheckCircle2Icon width={17} height={17} />}
          {mode === "info" && <InfoIcon width={17} height={17} />}
          <h3>{title}</h3>
        </div>
        <button
          onClick={handleClose}
          className="text-white/80 hover:text-white text-xl leading-none transition-opacity"
        >
          ×
        </button>
      </div>
      <p className="text-[15px] text-[#a1a1a1]">{text}</p>
    </div>
  );
};

export default Alert;
