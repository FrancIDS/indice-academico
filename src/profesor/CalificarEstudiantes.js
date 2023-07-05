import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header } from "semantic-ui-react";

function CalificarEstudiantes() {
    return (
        <div>
            <Navbar selectedButton={"CalificarEstudiantes"} />
            <Container>
                <Header as="h1">Calificar estudiantes</Header>
            </Container>
        </div>
    );
}

export default CalificarEstudiantes;
