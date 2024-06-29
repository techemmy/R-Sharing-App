import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";

export default function UnAuthenticatedRoutes() {
  const { token, user } = useAuth();

  if (token || user) {
    return <Navigate to='/home' replace={true} />
  }

  return <Outlet />
}
