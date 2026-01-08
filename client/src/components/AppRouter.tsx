import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/constants";
import { useStore } from "../utils/context";

const AppRouter = () => {
  const { user, device } = useStore();

  console.log(user);
  console.log(device);
  return (
    <Routes>
      {user.isAuth ? (
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
