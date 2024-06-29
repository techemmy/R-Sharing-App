import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";

export default function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth hook should be within the <AuthProvider />')
  }
  return context;
};
