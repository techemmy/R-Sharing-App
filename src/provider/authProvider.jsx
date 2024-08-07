import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/index";
import { decodeToken, useJwt } from "react-jwt";
import * as auth from "../api/auth";
import CookieHelper from "../utils/cookieHelper";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(() => CookieHelper.getCookie("token"));
  const { isExpired, reEvaluateToken } = useJwt(token);
  const user = decodeToken(token);

  useEffect(() => {
    if (token) {
      CookieHelper.setCookie("token", token, { expires: Date(user?.exp) });
    } else {
      delete api.defaults.headers.common["Authorization"];
      CookieHelper.deleteCookie("token");
    }
  }, [token]);

  function updateToken(token) {
    setToken(token);
    reEvaluateToken(token);
  }

  function logout() {
    updateToken(null);
    return <Navigate to="/" replace={true} />;
  }

  async function login(userData) {
    const { data, status } = await auth.logIn(userData);
    if (status !== 200 || !data.access_token) {
      throw new Error("Something went wrong");
    }
    updateToken(data.access_token);
    return;
  }

  const contextValue = {
    user,
    token,
    isExpired,
    login,
    logout,
    updateToken,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
