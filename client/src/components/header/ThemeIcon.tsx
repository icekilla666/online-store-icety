// components/ThemeIcon.tsx
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

const ThemeIcon = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={handleToggle}
      className={`transition-all duration-300 ${
        isAnimating ? "scale-110 rotate-12" : ""
      }`}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <MoonIcon width={25} height={25} />
      ) : (
        <SunIcon width={25} height={25} />
      )}
    </button>
  );
};

export default ThemeIcon;
