import React, { useState } from "react";
import { Form, Button, Modal, Grid } from "semantic-ui-react";

function UsuarioCrear({ isOpen, closeModal }) {
    const handleSubmit = (e) => {};

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [respuesta1, setRespuesta1] = useState("");
    const [respuesta2, setRespuesta2] = useState("");
    const [respuesta3, setRespuesta3] = useState("");

    /* const [rol, setRol] = useState("");
    const [carrera, setCarrera] = useState("");
    const handleRolChange = (e) => setRol(e.target.value);
    const handleCarreraChange = (e) => setCarrera(e.target.value); */

    const handleUsuarioChange = (e) => setUsuario(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNombreChange = (e) => setNombre(e.target.value);
    const handleApellidoChange = (e) => setApellido(e.target.value);
    const handleCorreoChange = (e) => setCorreo(e.target.value);
    const handleRespuesta1Change = (e) => setRespuesta1(e.target.value);
    const handleRespuesta2Change = (e) => setRespuesta2(e.target.value);
    const handleRespuesta3Change = (e) => setRespuesta3(e.target.value);

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

    const optionsPreguntas = [
        { text: "¿Cuál es el nombre de abuelo?", value: "1" },
        { text: "¿Cuál es el nombre de tu primer sobrino?", value: "2" },
        { text: "¿Cuál es tu ciudad de nacimiento?", value: "3" },
    ];

    return (
        <Modal size="large" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Crear usuario</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Form.Group widths="equal">
                                    <Form.Input
                                        width={5}
                                        label="Usuario"
                                        placeholder="Usuario"
                                        value={usuario}
                                        onChange={handleUsuarioChange}
                                    />
                                    <Form.Input
                                        width={5}
                                        label="Contraseña"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={handlePasswordChange}
                                        type="password"
                                    />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Input
                                        width={5}
                                        label="Nombre"
                                        placeholder="Nombre"
                                        value={nombre}
                                        onChange={handleNombreChange}
                                    />
                                    <Form.Input
                                        width={5}
                                        label="Apellido"
                                        placeholder="Apellido"
                                        value={apellido}
                                        onChange={handleApellidoChange}
                                    />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Input
                                        label="Correo"
                                        placeholder="Correo"
                                        value={correo}
                                        onChange={handleCorreoChange}
                                        type="email"
                                    />
                                </Form.Group>
                                <Form.Group widths="equal">
                                    <Form.Select
                                        width={5}
                                        label="Rol"
                                        placeholder="Rol"
                                        options={optionsRol}
                                    />
                                    <Form.Select
                                        width={5}
                                        label="Carrera"
                                        placeholder="Carrera"
                                        options={optionsCarrera}
                                    />
                                </Form.Group>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Select
                                    fluid
                                    label="Pregunta de seguridad 1"
                                    placeholder="Pregunta de seguridad 1"
                                    options={optionsPreguntas}
                                />
                                <Form.Input
                                    fluid
                                    label="Respuesta"
                                    placeholder="Respuesta"
                                    value={respuesta1}
                                    onChange={handleRespuesta1Change}
                                />
                                <Form.Select
                                    fluid
                                    label="Pregunta de seguridad 2"
                                    placeholder="Pregunta de seguridad 2"
                                    options={optionsPreguntas}
                                />
                                <Form.Input
                                    fluid
                                    label="Respuesta"
                                    placeholder="Respuesta"
                                    value={respuesta2}
                                    onChange={handleRespuesta2Change}
                                />
                                <Form.Select
                                    fluid
                                    label="Pregunta de seguridad 3"
                                    placeholder="Pregunta de seguridad 3"
                                    options={optionsPreguntas}
                                />
                                <Form.Input
                                    fluid
                                    label="Respuesta"
                                    placeholder="Respuesta"
                                    value={respuesta3}
                                    onChange={handleRespuesta3Change}
                                />
                            </Grid.Column>
                        </Grid>

                        {/* <Divider hidden /> */}
                    </Form>
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button primary fluid type="submit">
                    Crear usuario
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default UsuarioCrear;
