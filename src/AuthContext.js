import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [session, setSession] = useState();

    useEffect(() => {

        // const storedAuth = localStorage.getItem("isLoggedIn");

        // if (storedAuth) {
        //     setIsLoggedIn(JSON.parse(storedAuth));
        // }
    }, []);

    const login = (usuario, password) => {
        fetch('http://localhost:5000/Usuarios/IniciarSesion', {
            method: 'POST',
            body: JSON.stringify({
                usuario: usuario,
                contrasena: password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setSession(data[0]);
                console.log(data[0]);
                console.log(session);
                if (data.length > 0) {
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
                }else{
                    alert("Combinacion de credenciales incorrecta!");
                }
            })
            .catch((err) => {
                console.log(err.message);
            });

        // if (usuario === "3" && password === "123") {
        //     const rol = "Estudiante";
        //     console.log("Entre :D");
        //     setIsLoggedIn(true);
        //     localStorage.setItem("isLoggedIn", JSON.stringify(true));
        //     localStorage.setItem("userUsuario", usuario);
        //     localStorage.setItem("userPassword", password);
        //     localStorage.setItem("userRol", rol);
        // }
        // if (usuario === "2" && password === "123") {
        //     const rol = "Profesor";
        //     console.log("Entre :D");
        //     setIsLoggedIn(true);
        //     localStorage.setItem("isLoggedIn", JSON.stringify(true));
        //     localStorage.setItem("userUsuario", usuario);
        //     localStorage.setItem("userPassword", password);
        //     localStorage.setItem("userRol", rol);
        // }
        // if (usuario === "1" && password === "123") {
        //     const rol = "Administrador";
        //     console.log("Entre :D");
        //     setIsLoggedIn(true);
        //     localStorage.setItem("isLoggedIn", JSON.stringify(true));
        //     localStorage.setItem("userUsuario", usuario);
        //     localStorage.setItem("userPassword", password);
        //     localStorage.setItem("userRol", rol);
        // }
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
