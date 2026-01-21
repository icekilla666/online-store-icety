import { Routes, Route, Navigate } from "react-router-dom";
import { adminRoute, authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/constants";
import { useStore } from "../utils/context";
import NotFound from "../pages/NotFound";

const AuthRoute = ({ children }: any) => {
  const { user } = useStore();
  return user.isAuth ? children : <Navigate to={LOGIN_ROUTE} replace />;
};

const AdminRoute = ({ children }: any) => {
  const { user } = useStore();
  return user.isAdmin ? children : <Navigate to={LOGIN_ROUTE} replace />;
};


const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}

      {authRoutes.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={
            <AuthRoute>{element}</AuthRoute>
          }
        />
      ))}

      <Route
        path={adminRoute.path}
        element={
          <AdminRoute>
            {adminRoute.element}
          </AdminRoute>
        }
      />
      <Route></Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
