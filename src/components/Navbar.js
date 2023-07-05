import React, { useContext } from "react";
import AuthContext from "../AuthContext";
import { Menu, Button, Divider, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Navbar(props) {
    const { selectedButton } = props;
    const userRol = localStorage.getItem("userRol");
    const { logout } = useContext(AuthContext);

    return (
        <div>
            <Menu>
                <Menu.Item>
                    <Image src="icon-s.png" size="mini"></Image>
                </Menu.Item>
                <Menu.Item as="a">
                    <Link to="/Menu">
                        <Button primary={selectedButton === "Menu"}>
                            Menu principal
                        </Button>
                    </Link>
                </Menu.Item>

                {userRol === "Estudiante" && (
                    <>
                        <Menu.Item as="a">
                            <Link to="/SeleccionarAsignaturas">
                                <Button
                                    primary={
                                        selectedButton ===
                                        "SeleccionarAsignaturas"
                                    }
                                >
                                    Seleccionar asignatura
                                </Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Link to="/HistorialAsignaturas">
                                <Button
                                    primary={
                                        selectedButton ===
                                        "HistorialAsignaturas"
                                    }
                                >
                                    Historial de asignaturas
                                </Button>
                            </Link>
                        </Menu.Item>
                    </>
                )}

                {userRol === "Profesor" && (
                    <>
                        <Menu.Item as="a">
                            <Link to="/AdministrarSecciones">
                                <Button
                                    primary={
                                        selectedButton ===
                                        "AdministrarSecciones"
                                    }
                                >
                                    Administrar secciones
                                </Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Link to="/CalificarEstudiantes">
                                <Button
                                    primary={
                                        selectedButton ===
                                        "CalificarEstudiantes"
                                    }
                                >
                                    Calificar estudiantes
                                </Button>
                            </Link>
                        </Menu.Item>
                    </>
                )}

                {userRol === "Administrador" && (
                    <>
                        <Menu.Item as="a">
                            <Link to="/AdministrarAsignaturas">
                                <Button
                                    primary={
                                        selectedButton ===
                                        "AdministrarAsignaturas"
                                    }
                                >
                                    Administrar asignaturas
                                </Button>
                            </Link>
                        </Menu.Item>
                        <Menu.Item as="a">
                            <Link to="/AdministrarUsuarios">
                                <Button
                                    primary={
                                        selectedButton === "AdministrarUsuarios"
                                    }
                                >
                                    Administrar usuarios
                                </Button>
                            </Link>
                        </Menu.Item>
                    </>
                )}

                <Menu.Item position="right">
                    <Link to="/">
                        <Button negative onClick={logout}>
                            Cerrar sesión
                        </Button>
                    </Link>
                </Menu.Item>
            </Menu>
            <Divider hidden />
        </div>
    );
}

export default Navbar;
