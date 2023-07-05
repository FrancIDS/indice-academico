import React from "react";
import { Divider, Form, Header, Button } from "semantic-ui-react";

function UsuarioCrear() {
    const handleSubmit = (e) => {};

    const optionsRol = [
        { text: "Administrador", value: "Administrador" },
        { text: "Profesor", value: "Profesor" },
        { text: "Estudiante", value: "Estudiante" },
    ];

    const optionsCarrera = [
        { text: "Ingeniería", value: "Ingeniería" },
        { text: "Economía", value: "Economía" },
        { text: "Medicina", value: "Medicina" },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <Header as="h2">Crear usuario</Header>
            <Divider hidden />

            <Form onSubmit={handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        width={"5"}
                        label="Nombre"
                        placeholder="Nombre"
                    />
                    <Form.Input
                        width={"5"}
                        label="Apellido"
                        placeholder="Apellido"
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Input
                        width={"5"}
                        label="Contraseña"
                        placeholder="Contraseña"
                        type="password"
                    />
                    <Form.Input
                        width={"5"}
                        label="Correo"
                        placeholder="Correo"
                        type="email"
                    />
                </Form.Group>
                <Form.Group widths="equal">
                    <Form.Select
                        width={"5"}
                        label="Rol"
                        placeholder="Rol"
                        options={optionsRol}
                    />
                    <Form.Select
                        width={"5"}
                        label="Carrera"
                        placeholder="Carrera"
                        options={optionsCarrera}
                    />
                </Form.Group>
                <Button primary fluid type="submit">
                    Crear usuario
                </Button>
            </Form>
        </div>
    );
}

export default UsuarioCrear;
