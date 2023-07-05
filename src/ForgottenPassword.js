import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Grid, Button, Form, Divider } from "semantic-ui-react";

function ForgottenPassword() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            navigate("/Menu");
        }
    });

    const [usuario, setUsuario] = useState("");
    const handleUsuarioChange = (e) => setUsuario(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <Link to="/">
                            <Button fluid>Volver</Button>
                        </Link>
                        <Divider hidden />

                        {/* <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                label="Usuario"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={handleUsuarioChange}
                            ></Form.Input>
                            <Button primary fluid type="submit">
                                Iniciar sesión
                            </Button>
                        </Form> */}

                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                fluid
                                label="Usuario"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={handleUsuarioChange}
                            />
                        </Form>
                        <Divider hidden />
                        <Form.Button primary fluid type="submit">
                            Validar
                        </Form.Button>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default ForgottenPassword;
