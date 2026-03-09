import AppRouter from "./components/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "./utils/context";
import { useEffect, useState } from "react";
import { check, editUser } from "./http/userAPI";
import { fetchBasket } from "./http/deviceAPI";
import Header from "./components/header/Header";
import { AlertProvider } from "./utils/alertContext";

const App = observer(() => {
  const { user, basket } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      basket.clearBasket();
      setIsLoading(false);
      return;
    }

    Promise.all([check(), fetchBasket().catch(() => null)])
      .then(async (data: any) => {
        const userData = data[0];
        const fullUser = await editUser(userData.id);
        user.setUser(fullUser);
        user.setIsAuth(true);
      })
      .catch(() => {
        basket.clearBasket();
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <AlertProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AlertProvider>
  );
});

const AppContent = () => {
  const location = useLocation();
  const shouldShowNavBar = location.pathname !== "/admin";

  return (
    <>
      {shouldShowNavBar && <Header />}
      <AppRouter />
    </>
  );
};

export default App;
