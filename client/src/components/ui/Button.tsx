import { Button } from "@headlessui/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string
}

const MyButton = ({ children, className, ...props }: MyButtonProps) => {
  return (
    <>
      <Button
        className={`bg-custom text-secondary rounded-md p-2 w-full ${className}`}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default MyButton;
