import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment } from "semantic-ui-react";

function AdministrarSecciones() {
    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"AdministrarSecciones"} />
            <Container>
                <Header as="h1">Administrar secciones</Header>

                <Segment color="blue" style={{ padding: "20px" }}>

                </Segment>
            </Container>
        </div>
    );
}

export default AdministrarSecciones;
