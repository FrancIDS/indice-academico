import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar si hay un estado de autenticación almacenado en el localStorage
        const storedAuth = localStorage.getItem("isLoggedIn");

        if (storedAuth) {
            setIsLoggedIn(JSON.parse(storedAuth));
        }
    }, []);

    const login = (usuario, password) => {
        if (usuario === "3" && password === "123") {
            const rol = "Estudiante";
            console.log("Entre :D");
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            localStorage.setItem("userUsuario", usuario);
            localStorage.setItem("userPassword", password);
            localStorage.setItem("userRol", rol);
        }
        if (usuario === "2" && password === "123") {
            const rol = "Profesor";
            console.log("Entre :D");
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            localStorage.setItem("userUsuario", usuario);
            localStorage.setItem("userPassword", password);
            localStorage.setItem("userRol", rol);
        }
        if (usuario === "1" && password === "123") {
            const rol = "Administrador";
            console.log("Entre :D");
            setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn", JSON.stringify(true));
            localStorage.setItem("userUsuario", usuario);
            localStorage.setItem("userPassword", password);
            localStorage.setItem("userRol", rol);
        }
    };

    const logout = () => {
        console.log("Sali :>");
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userUsuario");
        localStorage.removeItem("userPassword");
        localStorage.removeItem("userRol");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}
