import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";

const UsuariosTable = ({ usuarios }) => {
    const handleEditar = (usuario) => {
        // Aquí puedes implementar la lógica para editar la usuario
        console.log("Editar usuario:", usuario);
    };

    const handleEliminar = (usuario) => {
        // Aquí puedes implementar la lógica para editar la usuario
        console.log("Eliminar usuario:", usuario);
    };

    return (
        <Table celled color="blue">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Apellido</Table.HeaderCell>
                    {/* <Table.HeaderCell>Contraseña</Table.HeaderCell> */}
                    <Table.HeaderCell>Correo</Table.HeaderCell>
                    <Table.HeaderCell>Rol</Table.HeaderCell>
                    <Table.HeaderCell>Carrera</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>{" "}
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
                                onClick={() => handleEditar(usuario)}
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
    );
};

function TablaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Informacion/Usuarios/Mostrar')
            .then((response) => response.json())
            .then((data) => {
                setUsuarios(data);
                console.log(usuarios);
            })
            .catch((err) => {
                console.log(err.message)
            })
        // data fetching here
    }, []);
    return (
        <div style={{ padding: "10px" }}>
            <UsuariosTable usuarios={usuarios} />
        </div>
    );
}

export default TablaUsuarios;
