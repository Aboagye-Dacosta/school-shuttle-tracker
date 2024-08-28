import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const routes = [
  "buses",
  "drivers",
  "users",
  "managers",
  "notifications",
  "feedback",
  "account",
];

const useAuthContext = () => {
  const [isAuthenticated, setAuthenticated] = useState(true);
  const [user, setUser] = useState({});
  const [role, setUserRole] = useState("");

  return {
    user,
    isAuthenticated,
    role,
    setAuthenticated,
    setUserRole,
    setUser,
    routes,
  };
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("context is use outside of provider");
  return context;
};

export const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuthContext()}>
      {children}
    </AuthContext.Provider>
  );
};

export function AuthenticationProvider({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) return children;
}
