import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/constants";

const AppRouter = () => {
  const isAuth = false;
  return (
    <Routes>
      {isAuth ? (
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))
      ) : (
        <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
      )}

      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
