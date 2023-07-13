import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Container,
    Grid,
    Button,
    Form,
    Divider,
    Icon,
} from "semantic-ui-react";

function ForgottenPassword() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            navigate("/Menu");
        }
    });

    const [usuario, setUsuario] = useState("");
    const handleUsuarioChange = (e) => setUsuario(e.target.value);

    const [respuesta1, setRespuesta1] = useState("");
    const [respuesta2, setRespuesta2] = useState("");
    const [respuesta3, setRespuesta3] = useState("");

    const handleRespuesta1Change = (e) => setRespuesta1(e.target.value);
    const handleRespuesta2Change = (e) => setRespuesta2(e.target.value);
    const handleRespuesta3Change = (e) => setRespuesta3(e.target.value);

    const [preguntas, setPreguntas] = useState(["¿?", "¿?", "¿?"]);

    // Validar usuario
    const handleSubmit = (e) => {
        if (usuario === "") {
            alert("Porfavor, escribe un usuario");
        } else {
            e.preventDefault();
            fetch("http://localhost:5000/Informacion/Preguntas/Usuario", {
                method: "POST",
                body: JSON.stringify({
                    usuario: usuario,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        console.log(data);
                        setPreguntas([
                            data[0].Pregunta,
                            data[1].Pregunta,
                            data[2].Pregunta,
                        ]);
                        alert("El usuario existe!");
                    } else {
                        alert("El usuario no existe!");
                    }
                });
        }
    };

    // Conseguir contraseña
    const handleSubmitPreguntas = (e) => {
        e.preventDefault();
        console.log(respuesta1);
        console.log(respuesta2);
        console.log(respuesta3);
        if (respuesta1 === "" || respuesta2 === "" || respuesta3 === "") {
            alert("Responde todas las preguntas de seguridad!");
        } else {
            fetch("http://localhost:5000/Informacion/Contrasena/Recuperar", {
                method: "POST",
                body: JSON.stringify({
                    usuario,
                    respuesta1,
                    respuesta2,
                    respuesta3,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.length > 0) {
                        console.log(data);
                        alert("Contraseña: " + data[0].Contrasena);
                    } else {
                        alert("Respuestas incorrectas!");
                        setRespuesta1("");
                        setRespuesta2("");
                        setRespuesta3("");
                    }
                });
        }
    };

    return (
        <div style={{ background: "#10588f" }}>
            <Container>
                <Grid
                    centered
                    verticalAlign="middle"
                    style={{ height: "100vh" }}
                >
                    <Grid.Column
                        style={{
                            background: "#FFF",
                            maxWidth: 500,
                            padding: "30px 60px",
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <div style={{ width: "100px" }}>
                            <Link to="/" style={{ margin: "auto" }}>
                                <Icon name="close"></Icon>
                            </Link>
                        </div>

                        <Divider hidden />

                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                label="Usuario"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={handleUsuarioChange}
                            />
                            <Divider hidden />
                            <Form.Button primary fluid type="submit">
                                Validar
                            </Form.Button>
                        </Form>

                        <Divider hidden />
                        <Divider />
                        <Divider hidden />

                        <Form onSubmit={handleSubmitPreguntas}>
                            <Form.Input
                                fluid
                                label={
                                    "Pregunta de seguridad 1: " + preguntas[0]
                                }
                                placeholder="Respuesta"
                                value={respuesta1}
                                onChange={handleRespuesta1Change}
                            />
                            <Form.Input
                                fluid
                                label={
                                    "Pregunta de seguridad 2: " + preguntas[1]
                                }
                                placeholder="Respuesta"
                                value={respuesta2}
                                onChange={handleRespuesta2Change}
                            />
                            <Form.Input
                                fluid
                                label={
                                    "Pregunta de seguridad 3: " + preguntas[2]
                                }
                                placeholder="Respuesta"
                                value={respuesta3}
                                onChange={handleRespuesta3Change}
                            />
                            <Divider hidden />
                            <Button primary fluid type="submit">
                                Conseguir contraseña
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default ForgottenPassword;
