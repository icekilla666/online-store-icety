import type { QuantityCounterProps } from "@/types/types";
import type React from "react";
import { useState, useEffect } from "react";

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  initialValue = 1,
  min = 1,
  max = 10,
  onChange,
  className = "",
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  useEffect(() => {
    setQuantity(initialValue);
  }, [initialValue]);

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      onChange?.(value);
    }
  };

  return (
    <div
      className={`flex max-w-32 items-center justify-between py-4 px-5 border border-[#E6E6E6] rounded-[30px] ${className}`}
    >
      <button
        onClick={handleDecrease}
        disabled={quantity <= min}
        className="text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:text-custom"
      >
        –
      </button>

      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className="text-center w-full bg-transparent py-1 focus:outline-none"
      />

      <button
        onClick={handleIncrease}
        disabled={quantity >= max}
        className="text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:text-custom"
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;