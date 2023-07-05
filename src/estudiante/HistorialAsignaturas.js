import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header } from "semantic-ui-react";

function HistorialAsignaturas() {
    return (
        <div>
            <Navbar selectedButton={"HistorialAsignaturas"} />
            <Container>
                <Header as="h1">Historial de asignaturas</Header>
            </Container>
        </div>
    );
}

export default HistorialAsignaturas;
