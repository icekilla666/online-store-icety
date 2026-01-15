import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface DropdownSelectProps {
  value: string;
  onChange: (value: string) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: "no", label: "no" },
    { value: "price-asc", label: "Price: Low to High" },
    { value: "price-desc", label: "Price: High to Low" },
    { value: "date-newest", label: "Newest First" },
    { value: "date-oldest", label: "Oldest First" },
  ];

  const selectedLabel = options.find((opt) => opt.value === value)?.label;
  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer flex items-center gap-[2px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>
          Sort: <span className="text-custom">{selectedLabel}</span>
        </h2>
        <ChevronDownIcon
          width={24}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          color="var(--color-custom)"
        />
      </div>

      <div
        className={`w-max pr-8 absolute top-full left-0 right-0 bg-wrapper overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 translate-y-0 mt-2"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="py-1">
          {options.map((option) => (
            <div
              className={`py-2 px-3 cursor-pointer transition-all duration-200 ease-in-out hover:pl-4
                ${
                  value === option.value
                    ? "border-l-4 border-custom"
                    : "border-l-4 border-transparent"
                }
              `}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownSelect;
