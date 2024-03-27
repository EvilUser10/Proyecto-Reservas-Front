import React, { createContext, useState, useContext } from "react";
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();
//hook
export const useAuth = () => {
	const context =  useContext(AuthContext);
	if(!context) throw new Error("useAuth must be used with an AuthProvider");
	return context;
}

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	//const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLogin = (token) => {
		const decodedUser = jwtDecode(token);
		sessionStorage.setItem("userId", decodedUser.sub);
		sessionStorage.setItem("userRole", decodedUser.roles)
		sessionStorage.setItem("token", token)
		//setIsAuthenticated(true); seria bueno usarlo aqui para luego exportarlo al resto de los componentes
		setUser(decodedUser);
	}

	const handleLogout = () => {
		sessionStorage.removeItem("userId");
		sessionStorage.removeItem("userRole");
		sessionStorage.removeItem("token");
		setUser(null);
		//setIsAuthenticated(false); //tIsAuthenticated(false);
	}

	return (
		<AuthContext.Provider value={{ user, handleLogin, handleLogout, /*isAuthenticated*/ }}>
			{children}
		</AuthContext.Provider>
	)
}



