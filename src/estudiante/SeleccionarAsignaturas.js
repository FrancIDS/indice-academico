import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment } from "semantic-ui-react";

function SeleccionarAsignaturas() {
    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"SeleccionarAsignaturas"} />
            <Container>
                <Header as="h1">Seleccionar asignaturas</Header>
                <Segment color="blue"></Segment>
            </Container>
        </div>
    );
}

export default SeleccionarAsignaturas;
