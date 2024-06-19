import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import api from "../api/index";
import { decodeToken, useJwt } from "react-jwt";

const AuthContext = createContext();

const AuthProvider = ({ apiClient, children }) => {
  const [token, setToken_] = useState(() => {
    const cookie = document.cookie.split(";").filter(key => key.startsWith("token"))
    return cookie[0]?.split("=")[1]
  });
  const { isExpired, reEvaluateToken } = useJwt(token);
  const accessTokenRef = useRef(document.cookie.split(";").filter(key => key.startsWith("token"))[1]);

  const logOut = () => {
    setToken_(null);
    return <Navigate to="/" replace={true} />;
  };

  const logIn = (token) => {
    reEvaluateToken(token);
    setToken_(token);
    accessTokenRef.current = token;
    document.cookie = `token=${token}`
    return <Navigate to="/home" />
  }

  useEffect(() => {
    // const requestInterceptor = apiClient.interceptors.request.use(
    //   (config) => {
    //     // Attach current access token ref value to outgoing request headers
    //     console.log('setting', accessTokenRef.current, config.headers)
    //     config.headers["Authorization"] = `Bearer ${accessTokenRef.current}`;
    //     return config;
    //   },
    // );


    console.log('token', token)
    console.log('tokenRef', accessTokenRef.current)
    if (token) {
      document.cookie = `token=${token}`
    } else {
      delete api.defaults.headers.common["Authorization"];
      document.cookie = `token=`;
    }

    return () => {
      console.log('cleaning up')
      // apiClient.interceptors.request.eject(requestInterceptor);
    };
  }, [token]);

  const contextValue = {
    token,
    isExpired,
    user: decodeToken(token),
    logIn,
    logOut
  }

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
