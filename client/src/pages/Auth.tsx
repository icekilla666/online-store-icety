import { Button } from "@headlessui/react";
import { useStore } from "../utils/context";

const Auth = () => {
  const { user } = useStore();
  return (
    <div className="p-7">
      <h1>Auth Page</h1>

      <Button
        className="bg-button text-secondary rounded-md p-2"
        onClick={() => user.setIsAuth(true)}
      >
        Авторизация
      </Button>
    </div>
  );
};

export default Auth;
