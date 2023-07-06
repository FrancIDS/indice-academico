import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment } from "semantic-ui-react";

function CalificarEstudiantes() {
    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"CalificarEstudiantes"} />
            <Container>
                <Header as="h1">Calificar estudiantes</Header>

                <Segment color="blue" style={{ padding: "20px" }}>

                </Segment>
            </Container>
        </div>
    );
}

export default CalificarEstudiantes;
