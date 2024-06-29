import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../provider/authProvider";
import api from "../../api";

export default function ProtectedRoute() {
  const { user, token, isExpired } = useAuth();

  if (!user || isExpired) {
    return <Navigate to="/login" />;
  }

  api.defaults.headers.common["Authorization"] = "Bearer " + token;
  return <Outlet />;
};

