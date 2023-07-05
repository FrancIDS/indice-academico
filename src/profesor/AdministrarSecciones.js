import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header } from "semantic-ui-react";

function AdministrarSecciones() {
    return (
        <div>
            <Navbar selectedButton={"AdministrarSecciones"} />
            <Container>
                <Header as="h1">Administrar secciones</Header>
            </Container>
        </div>
    );
}

export default AdministrarSecciones;
