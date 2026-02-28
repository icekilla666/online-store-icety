import AppRouter from "./components/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "./utils/context";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";
import Header from "./components/header/Header";

const App = observer(() => {
  const { user } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => setIsLoading(false), 1000);
      // setIsLoading(false);
      return;
    }

    check()
      .then(() => {
        user.setUser(true);
        user.setIsAuth(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return;
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
