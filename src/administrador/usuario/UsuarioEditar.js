import React, { useEffect, useState } from "react";
import { Form, Modal, Grid, Button } from "semantic-ui-react";

function UsuarioEditar({ isOpen, closeModal }) {

    const handleSubmit = (e) => {
        if (selectedRol === 'Administrador') { //Administrador
            fetch("http://localhost:5000/Profesores/Actualizar", {
                method: 'PATCH',
                body: JSON.stringify({
                    nombre: nombre,
                    usuario: usuario,
                    apellido: apellido,
                    correo: correo,
                    contrasena: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    window.location.reload();
                    closeModal();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else if (selectedRol === 'Profesor') {//Profesor
            fetch("http://localhost:5000/Profesores/Actualizar", {
                method: 'PATCH',
                body: JSON.stringify({
                    nombre: nombre,
                    usuario: usuario,
                    apellido: apellido,
                    correo: correo,
                    contrasena: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    window.location.reload();
                    closeModal();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else { //Estudiante
            fetch("http://localhost:5000/Estudiantes/Actualizar", {
                method: 'PATCH',
                body: JSON.stringify({
                    nombre: nombre,
                    usuario: usuario,
                    apellido: apellido,
                    correo: correo,
                    contrasena: password,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    window.location.reload();
                    closeModal();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");
    const [selectedRol, setSelectedRol] = useState("");
    const [selectedCarrera, setSelectedCarrera] = useState("");
    const [respuesta1, setRespuesta1] = useState("");
    const [respuesta2, setRespuesta2] = useState("");
    const [respuesta3, setRespuesta3] = useState("");
    const [preguntas, setPreguntas] = useState([]);
    const [selectedPregunta1, setSelectedPregunta1] = useState("");
    const [selectedPregunta2, setSelectedPregunta2] = useState("");
    const [selectedPregunta3, setSelectedPregunta3] = useState("");

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

    useEffect(() => {
        
        setUsuario(localStorage.getItem("usuario"));
        setNombre(localStorage.getItem("nombre"));
        setApellido(localStorage.getItem("apellido"));
        setCorreo(localStorage.getItem("correo"));
        setPassword(localStorage.getItem("contrasena"));
        setSelectedRol(localStorage.getItem("rol"));
        setSelectedCarrera(localStorage.getItem("carrera"));
        setSelectedPregunta1(null);
        setSelectedPregunta2(null);
        setSelectedPregunta3(null);


        fetch("http://localhost:5000/Informacion/Preguntas/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setPreguntas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [localStorage.getItem("nombre"), localStorage.getItem("apellido"), localStorage.getItem("correo"), 
    localStorage.getItem("contrasena"), localStorage.getItem("rol"), localStorage.getItem("carrera"),localStorage.getItem("pregunta")])

    const optionsPreguntas = [];
    preguntas.map((x) => {
        optionsPreguntas.push({ text: x.Pregunta, value: x.ID });
    })
    return (
        <Modal size="small" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Editar usuario</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        {/* <Grid columns={2}>
                            <Grid.Column> */}
                                <Form.Group widths="equal">
                                    <Form.Input
                                        disabled
                                        width={5}
                                        label="Usuario"
                                        placeholder="Usuario"
                                        value={usuario}
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
                                        placeholder={selectedRol}
                                        value={selectedRol}
                                    />
                                    <Form.Select
                                        width={5}
                                        label="Carrera"
                                        placeholder={selectedCarrera}
                                        value={selectedCarrera}
                                    />
                                </Form.Group>
                            {/* </Grid.Column>
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
                        </Grid> */}

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
