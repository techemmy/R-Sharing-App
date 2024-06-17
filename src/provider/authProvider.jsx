import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/index";
import { useJwt } from "react-jwt";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(() => {
    const cookie = document.cookie.split(";").filter(key => key.startsWith("token"))
    return cookie[0]?.split("=")[1]
  });
  const { decodedToken: user, isExpired, reEvaluateToken } = useJwt(token);

  const logOut = () => {
    setToken_(null);
    return <Navigate to="/" replace={true} />;
  };

  const logIn = (token) => {
    reEvaluateToken(token);
    setToken_(token);
    return <Navigate to="/" />
  }

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = "Bearer " + token;
      document.cookie = `token=${token}`
    } else {
      delete api.defaults.headers.common["Authorization"];
      document.cookie = `token=`;
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      isExpired,
      user,
      logIn,
      logOut
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProtectedRoute = () => {
  const { token, isExpired } = useAuth();

  if (!token || isExpired) {
    return <Navigate to="/login" />;
  }

  api.defaults.headers.common["Authorization"] = "Bearer " + token;
  return <Outlet />;
};

export default AuthProvider;
