import React from "react";
import Navbar from "./components/Navbar";

import MenuEstudiante from "./estudiante/MenuEstudiante";
import MenuProfesor from "./profesor/MenuProfesor";
import MenuAdministrador from "./administrador/MenuAdministrador";

function Menu() {
    const userRol = localStorage.getItem("userRol");

    return (
        <div style={{ background: "#e8f4fc", height: "100%" }}>
            <Navbar selectedButton={"Menu"} />
            {userRol === "Estudiante" && <MenuEstudiante />}
            {userRol === "Profesor" && <MenuProfesor />}
            {userRol === "Administrador" && <MenuAdministrador />}
        </div>
    );
}

export default Menu;
