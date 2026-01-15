import { Button } from "@headlessui/react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <>
      <Button
        className="bg-custom text-secondary rounded-md p-2 w-full"
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default MyButton;
