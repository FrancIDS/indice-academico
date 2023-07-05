import React from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Header, Segment } from "semantic-ui-react";
import TablaUsuarios from "./usuario/TablaUsuarios";

function AdministrarUsuarios() {
    return (
        <div style={{ background: "#f0f0f0", height: "100vh" }}>
            <Navbar selectedButton={"AdministrarUsuarios"} />
            <Container>
                <Header as="h1">Administrar usuarios</Header>
                <Segment color="blue" style={{ padding: "20px" }}>
                    <div style={{ padding: "0px 50px" }}>
                        <Button primary fluid>
                            Crear usuario
                        </Button>
                    </div>
                    <div style={{ padding: "10px" }}>
                        <TablaUsuarios />
                    </div>
                </Segment>
            </Container>
        </div>
    );
}

export default AdministrarUsuarios;
