import AppRouter from "./components/AppRouter";
import { BrowserRouter, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  
  const shouldShowNavBar = location.pathname !== '/admin';
  
  return (
    <>
      {shouldShowNavBar && <NavBar />}
      <AppRouter />
    </>
  );
};

export default App;