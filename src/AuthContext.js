import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [session, setSession] = useState();

    const login = (usuario, password) => {
        fetch("http://localhost:5000/Usuarios/IniciarSesion", {
            method: "POST",
            body: JSON.stringify({
                usuario: usuario,
                contrasena: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setSession(data[0]);
                console.log(data[0]);
                if (data.length === 0) alert("Credenciales incorrectas");
                else if (data.length > 0) {
                    console.log("Entre :D");
                    setIsLoggedIn(true);
                    localStorage.setItem("isLoggedIn", JSON.stringify(true));
                    localStorage.setItem("userUsuario", data[0].Usuario);
                    localStorage.setItem("userNombre", data[0].Nombre);
                    localStorage.setItem("userApellido", data[0].Apellido);
                    localStorage.setItem("userCorreo", data[0].Correo);
                    localStorage.setItem("userCarrera", data[0].Carrera);
                    localStorage.setItem("userPassword", data[0].Contrasena);
                    localStorage.setItem("userRol", data[0].Rol);
                    navigate("/Menu");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    const logout = () => {
        console.log("Sali :>");
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userUsuario");
        localStorage.removeItem("userPassword");
        localStorage.removeItem("userRol");
        localStorage.removeItem("userNombre");
        localStorage.removeItem("userApellido");
        localStorage.removeItem("userCorreo");
        localStorage.removeItem("userCarrera");
        setSession([]);
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
