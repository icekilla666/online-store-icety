import AppRouter from "./components/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "./utils/context";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { fetchBasket } from "./http/deviceAPI";
import Header from "./components/header/Header";

const App = observer(() => {
  const { user, basket } = useStore(); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      basket.clearBasket();
      setTimeout(() => setIsLoading(false), 1000);
      return;
    }

    Promise.all([
      check(),
      fetchBasket().catch(() => null) 
    ])
      .then(() => {
        user.setUser(true);
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
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
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