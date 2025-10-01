import { useAuthContext } from "../hooks/useAuthContext";
import { HOME } from "../constants/routes";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <Navigate to={HOME} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
