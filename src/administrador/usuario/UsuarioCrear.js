import React, { useEffect, useState } from "react";
import { Form, Button, Modal, Grid } from "semantic-ui-react";

function UsuarioCrear({ isOpen, closeModal }) {
    const handleSubmit = (e) => {
        let error = false;
        if (
            nombre === "" ||
            usuario === "" ||
            apellido === "" ||
            correo === "" ||
            password === "" ||
            selectedRol === "" ||
            selectedPregunta1 === "" ||
            selectedPregunta2 === "" ||
            selectedPregunta3 === "" ||
            respuesta1 === "" ||
            respuesta2 == "" ||
            respuesta3 === ""
        ) {
            alert("No dejes campos vacios!");
            error = true;
        } else if (selectedRol === 3 && selectedCarrera === "") {
            alert("No dejes campos vacios!");
        } else if (
            selectedPregunta1 === selectedPregunta2 ||
            selectedPregunta1 === selectedPregunta3 ||
            selectedPregunta2 === selectedPregunta3
        ) {
            alert("Elige preguntas diferentes!");
        } else {
            if (selectedRol === 1) {
                //Administrador
                fetch("http://localhost:5000/Profesores/Insertar", {
                    method: "POST",
                    body: JSON.stringify({
                        nombre: nombre,
                        usuario: usuario,
                        apellido: apellido,
                        correo: correo,
                        contrasena: password,
                        rolID: selectedRol,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {})
                    .catch((err) => {
                        console.log(err.message);
                    });
            } else if (selectedRol === 2) {
                //Profesor
                fetch("http://localhost:5000/Profesores/Insertar", {
                    method: "POST",
                    body: JSON.stringify({
                        nombre: nombre,
                        usuario: usuario,
                        apellido: apellido,
                        correo: correo,
                        contrasena: password,
                        rolID: selectedRol,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {})
                    .catch((err) => {
                        console.log(err.message);
                    });
            } else {
                //Estudiante
                fetch("http://localhost:5000/Estudiantes/Insertar", {
                    method: "POST",
                    body: JSON.stringify({
                        nombre: nombre,
                        usuario: usuario,
                        apellido: apellido,
                        correo: correo,
                        contrasena: password,
                        rolID: selectedRol,
                        carreraID: selectedCarrera,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {})
                    .catch((err) => {
                        console.log(err.message);
                    });
            }

            setTimeout(1000);
            fetch("http://localhost:5000/Usuarios/Pregunta/Insertar", {
                method: "post",
                body: JSON.stringify({
                    preguntaID: selectedPregunta1,
                    usuario: usuario,
                    respuesta: respuesta1,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {})
                .catch((err) => {
                    console.log(err.message);
                });

            fetch("http://localhost:5000/Usuarios/Pregunta/Insertar", {
                method: "post",
                body: JSON.stringify({
                    preguntaID: selectedPregunta2,
                    usuario: usuario,
                    respuesta: respuesta2,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {})
                .catch((err) => {
                    console.log(err.message);
                });

            fetch("http://localhost:5000/Usuarios/Pregunta/Insertar", {
                method: "post",
                body: JSON.stringify({
                    preguntaID: selectedPregunta3,
                    usuario: usuario,
                    respuesta: respuesta3,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    window.location.reload();
                    closeModal();
                })
                .catch((err) => {
                    console.log(err.message);
                });

            setNombre("");
            setUsuario("");
            setApellido("");
            setCorreo("");
            setPassword("");
            setSelectedRol("");
            setSelectedCarrera("");
            setRespuesta1("");
            setRespuesta2("");
            setRespuesta3("");
            setSelectedPregunta1("");
            setSelectedPregunta2("");
            setSelectedPregunta3("");
        }
    };

    const [roles, setRoles] = useState([]);
    const [carreras, setCarreras] = useState([]);
    const [preguntas, setPreguntas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/Informacion/Roles/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setRoles(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        fetch("http://localhost:5000/Informacion/Carreras/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setCarreras(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        fetch("http://localhost:5000/Informacion/Preguntas/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setPreguntas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // data fetching here
        setNombre("");
        setUsuario("");
        setApellido("");
        setCorreo("");
        setPassword("");
        setSelectedRol("");
        setSelectedCarrera("");
        setRespuesta1("");
        setRespuesta2("");
        setRespuesta3("");
        setSelectedPregunta1("");
        setSelectedPregunta2("");
        setSelectedPregunta3("");
    }, [""]);

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [correo, setCorreo] = useState("");

    // ComboBox

    const handleRolChange = (e, { value }) => setSelectedRol(value);
    const handleCarreraChange = (e, { value }) => setSelectedCarrera(value);
    const handleRespuesta1Change = (e, { value }) => setRespuesta1(value);
    const handleRespuesta2Change = (e, { value }) => setRespuesta2(value);
    const handleRespuesta3Change = (e, { value }) => setRespuesta3(value);
    const handleSelectedPregunta1Change = (e, { value }) =>
        setSelectedPregunta1(value);
    const handleSelectedPregunta2Change = (e, { value }) =>
        setSelectedPregunta2(value);
    const handleSelectedPregunta3Change = (e, { value }) =>
        setSelectedPregunta3(value);

    const [selectedRol, setSelectedRol] = useState("");
    const [selectedCarrera, setSelectedCarrera] = useState("");
    const [respuesta1, setRespuesta1] = useState("");
    const [respuesta2, setRespuesta2] = useState("");
    const [respuesta3, setRespuesta3] = useState("");
    const [selectedPregunta1, setSelectedPregunta1] = useState("");
    const [selectedPregunta2, setSelectedPregunta2] = useState("");
    const [selectedPregunta3, setSelectedPregunta3] = useState("");

    const handleUsuarioChange = (e, { value }) => setUsuario(value);
    const handlePasswordChange = (e, { value }) => setPassword(value);
    const handleNombreChange = (e, { value }) => setNombre(value);
    const handleApellidoChange = (e, { value }) => setApellido(value);
    const handleCorreoChange = (e, { value }) => setCorreo(value);

    const optionsRol = [];
    const optionsCarrera = [];
    const optionsPreguntas = [];

    roles.map((x) => {
        optionsRol.push({ text: x.Rol, value: x.ID });
    });

    carreras.map((x) => {
        optionsCarrera.push({ text: x.Carrera, value: x.ID });
    });

    preguntas.map((x) => {
        optionsPreguntas.push({ text: x.Pregunta, value: x.ID });
    });

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
                                        value={selectedRol}
                                        onChange={handleRolChange}
                                    />
                                    <Form.Select
                                        disabled={selectedRol != 3}
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
                            Crear usuario
                        </Button>
                    </Form>
                </div>
            </Modal.Content>
            <Modal.Actions></Modal.Actions>
        </Modal>
    );
}

export default UsuarioCrear;
