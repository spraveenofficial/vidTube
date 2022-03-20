import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Contexts/auth-context";

export const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useAuth();
  return isAuthenticated && !loading ? <Outlet /> : <Navigate to="/login" />;
};

export const GuestRoutes = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
