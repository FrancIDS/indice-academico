import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import {
    Container,
    Grid,
    Form,
    Button,
    Header,
    Divider,
    Image,
} from "semantic-ui-react";

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const handleUsuarioChange = (e) => setUsuario(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Aquí puedes realizar alguna acción con los datos ingresados, como enviar una solicitud al servidor
        if (usuario === "" || password === "") {
            if (usuario !== "") {
                alert("Por favor, completar el campo contraseña");
                return;
            }
            if (password !== "") {
                alert("Por favor, completar el campo usuario");
                return;
            }
            alert("Por favor, completar las credenciales");
            return;
        }
        console.log("Usuario:", usuario);
        console.log("Contraseña:", password);
        if (login(usuario, password)) {
            navigate("/Menu");
        }
        //return <Navigate to="/menu" />;
    };

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            navigate("/Menu");
        }
    });

    return (
        <div style={{ background: "#10588f", height: "100vh" }}>
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
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {/* <Icon name="graduation" size="huge" /> */}
                            <Image src="icon.png" size="tiny"></Image>
                        </div>
                        <Header as="h1" style={{ textAlign: "center" }}>
                            Índice Académico
                        </Header>
                        <Divider hidden />
                        <Form onSubmit={handleSubmit}>
                            <Form.Input
                                label="Usuario"
                                placeholder="Usuario"
                                value={usuario}
                                onChange={handleUsuarioChange}
                            />
                            <Form.Input
                                label="Contraseña"
                                placeholder="Contraseña"
                                value={password}
                                onChange={handlePasswordChange}
                                type="password"
                            />
                            <Button primary fluid type="submit">
                                Iniciar sesión
                            </Button>
                            <div
                                style={{
                                    textAlign: "right",
                                    margin: "5px",
                                }}
                            >
                                <Link to="/ForgottenPassword">
                                    ¿Has olvidado tu contraseña?
                                </Link>
                            </div>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
};

export default LoginForm;
