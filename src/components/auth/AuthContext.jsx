import React, { createContext, useState, useContext , useEffect} from "react";
import { jwtDecode } from "jwt-decode";
import { getUser } from "../../services/UserService";


const getTokenFromStorage = () => {
  return sessionStorage.getItem("token");
};

const getUserFromToken = (token) => {
  if (token) {
    const decodedUser = jwtDecode(token);
    return decodedUser;
  }
  return null;
};

export const AuthContext = createContext();
//hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used with an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromToken(getTokenFromStorage()));
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!getTokenFromStorage()
  );

  const handleLogin = (token) => {
    sessionStorage.setItem("token", token);
    const decodedUser = jwtDecode(token);
    setUser(decodedUser);
    sessionStorage.setItem("userId", decodedUser.sub);
    sessionStorage.setItem("userRole", decodedUser.roles);
    // sessionStorage.setItem("token", token)
    setIsAuthenticated(true); //seria bueno usarlo aqui para luego exportarlo al resto de los componentes
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    // sessionStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setUser(null);
    setIsAuthenticated(false); //tIsAuthenticated(false);
  };

  const handleDeleteAccountAuth = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    setUser(null);
    setIsAuthenticated(false); //tIsAuthenticated(false);
  };

  useEffect(() => {
    const verifyToken = async () => {
      const token = getTokenFromStorage();
      if (token) {
        try {
          const decodedUser = jwtDecode(token);
          const userData = await getUser(decodedUser.sub);
          if (userData) {
            setUser(decodedUser);
            setIsAuthenticated(true);
          } else {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("userRole");
            setUser(null);
            setIsAuthenticated(false);
          }
        } catch (error) {
          // Si hay un error al decodificar el token, elimina el token y cierra la sesión
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("userId");
          sessionStorage.removeItem("userRole");
          setUser(null);
          setIsAuthenticated(false);
        }
      } else {
        // Si no hay token, asegúrate de que el usuario esté desautenticado
        setUser(null);
        setIsAuthenticated(false);
      }
    };
    verifyToken();
  }, [isAuthenticated]);
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleDeleteAccountAuth,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
