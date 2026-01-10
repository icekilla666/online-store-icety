import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/constants";
import { useStore } from "../utils/context";
import NotFound from "../pages/NotFound";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useStore();
  if (!user.isAuth) {
    return <Navigate to={LOGIN_ROUTE} replace />;
  }

  return children;
};

const AppRouter = () => {
  const { user, device } = useStore();

  console.log(user);
  console.log(device);
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      <Route>
        {authRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
