import React, { useCallback, useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import UsuarioEditar from "./UsuarioEditar";

const UsuariosTable = ({ usuarios }) => {
    const [preguntas, setPreguntas] = useState([]);

    const [isModalOpenEditar, setIsModalOpenEditar] = useState(false);
    const openEditarUsuario = (usuario) => setIsModalOpenEditar(true);
    const closeEditarUsuario = () => {
        setIsModalOpenEditar(false);
        localStorage.removeItem("usuario");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("correo");
        localStorage.removeItem("contrasena");
        localStorage.removeItem("rol");
        localStorage.removeItem("carrera");
    };

    const handleEliminar = (usuario) => {
        console.log("Eliminar usuario:", usuario);
    };

    return (
        <>
            <Table celled color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        {/* <Table.HeaderCell>Contraseña</Table.HeaderCell> */}
                        <Table.HeaderCell>Correo</Table.HeaderCell>
                        <Table.HeaderCell>Rol</Table.HeaderCell>
                        <Table.HeaderCell>Carrera</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {usuarios.map((usuario, index) => (
                        <Table.Row key={index}>
                            <Table.Cell>{usuario.Nombre}</Table.Cell>
                            <Table.Cell>{usuario.Apellido}</Table.Cell>
                            {/* <Table.Cell>{usuario.contrasena}</Table.Cell> */}
                            <Table.Cell>{usuario.Correo}</Table.Cell>
                            <Table.Cell>{usuario.Rol}</Table.Cell>
                            <Table.Cell>{usuario.Carrera}</Table.Cell>
                            <Table.Cell>
                                <Button
                                    primary
                                    onClick={() => {
                                        openEditarUsuario();
                                        localStorage.setItem("usuario", usuario.Usuario);
                                        console.log(localStorage.getItem("usuario"));
                                        localStorage.setItem("nombre", usuario.Nombre);
                                        console.log(localStorage.getItem("nombre"));
                                        localStorage.setItem("apellido", usuario.Apellido);
                                        console.log(localStorage.getItem("apellido"));
                                        localStorage.setItem("correo", usuario.Correo);
                                        console.log(localStorage.getItem("correo"));
                                        localStorage.setItem("contrasena", usuario.Contrasena);
                                        console.log(localStorage.getItem("contrasena"));
                                        localStorage.setItem("rol", usuario.Rol);
                                        console.log(localStorage.getItem("rol"));
                                        localStorage.setItem("carrera", usuario.Carrera);
                                        console.log(localStorage.getItem("carrera"));
                                    }}
                                    content="Editar"
                                    size="compact"

                                />
                                <Button
                                    primary
                                    onClick={() => handleEliminar(usuario)}
                                    content="Eliminar"
                                    size="compact"
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <UsuarioEditar
                isOpen={isModalOpenEditar}
                closeModal={closeEditarUsuario}
            />
        </>
    );
};

function TablaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/Informacion/Usuarios/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setUsuarios(data);
                console.log(usuarios);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // data fetching here
    }, []);
    return (
        <div style={{ padding: "10px" }}>
            <UsuariosTable usuarios={usuarios} />
        </div>
    );
}

export default TablaUsuarios;
