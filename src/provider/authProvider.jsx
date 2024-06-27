import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/index";
import { decodeToken, useJwt } from "react-jwt";
import * as auth from '../api/auth'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const cookie = document.cookie.split(";").filter(key => key.startsWith("token"))
    return cookie[0]?.split("=")[1]
  });
  const { isExpired, reEvaluateToken } = useJwt(token);

  useEffect(() => {
    if (token) {
      document.cookie = `token=${token}`
    } else {
      delete api.defaults.headers.common["Authorization"];
      document.cookie = `token=`;
    }
  }, [token]);

  function updateToken(token) {
    setToken(token);
    reEvaluateToken(token);
  }

  function logout() {
    updateToken(null)
    return <Navigate to="/" replace={true} />;
  };

  async function login(userData) {
    const { data, status } = await auth.logIn(userData);
    if (status !== 200 || !data.access_token) {
      throw new Error('Something went wrong');
    }
    updateToken(data.access_token)
    return
  }

  const contextValue = {
    user: decodeToken(token),
    token,
    isExpired,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth hook should be within the <AuthProvider />')
  }
  return context;
};

export const ProtectedRoute = () => {
  const { user, token, isExpired } = useAuth();

  if (!user || isExpired) {
    return <Navigate to="/login" />;
  }

  api.defaults.headers.common["Authorization"] = "Bearer " + token;
  return <Outlet />;
};

export default AuthProvider;
