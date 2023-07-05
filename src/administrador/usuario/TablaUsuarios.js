import React from "react";
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
                        <Table.Cell>{usuario.nombre}</Table.Cell>
                        <Table.Cell>{usuario.apellido}</Table.Cell>
                        {/* <Table.Cell>{usuario.contrasena}</Table.Cell> */}
                        <Table.Cell>{usuario.correo}</Table.Cell>
                        <Table.Cell>{usuario.rol}</Table.Cell>
                        <Table.Cell>{usuario.carrera}</Table.Cell>
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
    let usuarios = [
        {
            nombre: "Francisco",
            apellido: "Mesa",
            contrasena: "TengoHambre",
            correo: "Francisco.MC.IDS@Gmail.com",
            rol: "Administrador",
            carrera: "",
        },
        {
            nombre: "Valentina",
            apellido: "Vargas",
            contrasena: "P4ssw0rd123",
            correo: "valentina.vargas@example.com",
            rol: "Estudiante",
            carrera: "Ingeniería",
        },
        {
            nombre: "Andrés",
            apellido: "Pérez",
            contrasena: "SecurePassword",
            correo: "andres.perez@example.com",
            rol: "Estudiante",
            carrera: "Medicina",
        },
        {
            nombre: "Ana",
            apellido: "López",
            contrasena: "Qwerty123",
            correo: "ana.lopez@example.com",
            rol: "Profesor",
            carrera: "",
        },
        {
            nombre: "Juan",
            apellido: "González",
            contrasena: "Pass123!",
            correo: "juan.gonzalez@example.com",
            rol: "Administrador",
            carrera: "",
        },
        {
            nombre: "María",
            apellido: "Fernández",
            contrasena: "Password123",
            correo: "maria.fernandez@example.com",
            rol: "Estudiante",
            carrera: "Economía",
        },
    ];

    return (
        <div style={{ padding: "10px" }}>
            <UsuariosTable usuarios={usuarios} />
        </div>
    );
}

export default TablaUsuarios;
