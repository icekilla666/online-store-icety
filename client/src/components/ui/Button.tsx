import type { MyButtonProps } from "@/types/types";
import { Button } from "@headlessui/react";

const MyButton = ({ children, className, ...props }: MyButtonProps) => {
  return (
    <>
      <Button
        className={`bg-custom text-secondary rounded-md p-2 ${className}`}
        {...props}
      >
        {children}
      </Button>
    </>
  );
};

export default MyButton;
