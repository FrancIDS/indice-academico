import React, { useEffect, useState } from "react";
import { Form, Modal, Grid, Button } from "semantic-ui-react";

function UsuarioEditar({ isOpen, closeModal }) {
    const handleSubmit = (e) => {};

    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [roles, setRoles] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [preguntas, setPreguntas] = useState([]);
    const [selectedRol, setSelectedRol] = useState("");
    const [selectedCarrera, setSelectedCarrera] = useState("");
    const [respuesta1, setRespuesta1] = useState("");
    const [respuesta2, setRespuesta2] = useState("");
    const [respuesta3, setRespuesta3] = useState("");
    const [selectedPregunta1, setSelectedPregunta1] = useState("");
    const [selectedPregunta2, setSelectedPregunta2] = useState("");
    const [selectedPregunta3, setSelectedPregunta3] = useState("");

    const handleRolChange = (e, { value }) => setSelectedRol(value);
    const handleCarreraChange = (e, { value }) => setSelectedCarrera(value);
    const handleRespuesta1Change = (e, { value }) => setRespuesta1(value);
    const handleRespuesta2Change = (e, { value }) => setRespuesta2(value);
    const handleRespuesta3Change = (e, { value }) => setRespuesta3(value);
    const handleSelectedPregunta1Change = (e, { value }) => setSelectedPregunta1(value);
    const handleSelectedPregunta2Change = (e, { value }) => setSelectedPregunta2(value);
    const handleSelectedPregunta3Change = (e, { value }) => setSelectedPregunta3(value);
    const handlePasswordChange = (e, { value }) => setPassword(value);
    const handleNombreChange = (e, { value }) => setNombre(value);
    const handleApellidoChange = (e, { value }) => setApellido(value);
    const handleCorreoChange = (e, { value }) => setCorreo(value);

    const optionsRol = [];
    const optionsCarrera = [];
    const optionsPreguntas = [];

    return (
        <Modal size="large" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Editar usuario</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Form.Group widths="equal">
                                    <Form.Input
                                        disabled
                                        width={5}
                                        label="Usuario"
                                        placeholder="Usuario"
                                        value={"AAAAAA"}
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
                                        value={selectedRol}
                                        onChange={handleRolChange}
                                    />
                                    <Form.Select
                                        width={5}
                                        label="Carrera"
                                        placeholder="Carrera"
                                        options={optionsCarrera}
                                        value={selectedCarrera}
                                        onChange={handleCarreraChange}
                                    />
                                </Form.Group>
                            </Grid.Column>
                            <Grid.Column>
                                <Form.Select
                                    fluid
                                    label="Pregunta de seguridad 1"
                                    placeholder="Pregunta de seguridad 1"
                                    options={optionsPreguntas}
                                    value={selectedPregunta1}
                                    onChange={handleSelectedPregunta1Change}
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
                                    value={selectedPregunta2}
                                    onChange={handleSelectedPregunta2Change}
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
                                    value={selectedPregunta3}
                                    onChange={handleSelectedPregunta3Change}
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
                        <Button primary fluid type="submit">
                            Editar usuario
                        </Button>
                    </Form>
                </div>
            </Modal.Content>
            <Modal.Actions></Modal.Actions>
        </Modal>
    );
}

export default UsuarioEditar;
