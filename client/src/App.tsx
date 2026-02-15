import AppRouter from "./components/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import { observer } from "mobx-react-lite";
import { useStore } from "./utils/context";
import { useEffect, useState } from "react";
import { check } from "./http/userAPI";

const App = observer(() => {
  const { user } = useStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLoading(false);
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
    return (
      <div className="container flex-center-col h-[calc(100svh-80px)]">
        Loading...
      </div>
    );
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
      {shouldShowNavBar && <NavBar />}
      <AppRouter />
    </>
  );
};

export default App;
