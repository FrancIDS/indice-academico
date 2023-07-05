import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header } from "semantic-ui-react";

function SeleccionarAsignaturas() {
    return (
        <div>
            <Navbar selectedButton={"SeleccionarAsignaturas"} />
            <Container>
                <Header as="h1">Seleccionar asignaturas</Header>
            </Container>
        </div>
    );
}

export default SeleccionarAsignaturas;
