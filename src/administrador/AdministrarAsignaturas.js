import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Header, Segment } from "semantic-ui-react";
import TablaAsignaturas from "./asignatura/TablaAsignaturas";
import AsignaturaCrear from "./asignatura/AsignaturaCrear";

function AdministrarAsignaturas() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openCrearAsignatura = () => setIsModalOpen(true);
    const closeCrearAsignatura = () => setIsModalOpen(false);

    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"AdministrarAsignaturas"} />
            <Container>
                <Header as="h1">Administrar asignaturas</Header>

                <Segment color="blue" style={{ padding: "20px" }}>
                    <div style={{ padding: "0px 50px" }}>
                        <Button primary fluid onClick={openCrearAsignatura}>
                            Crear asignatura
                        </Button>
                    </div>

                    <div style={{ padding: "10px" }}>
                        <TablaAsignaturas />
                    </div>
                </Segment>
            </Container>

            <AsignaturaCrear
                isOpen={isModalOpen}
                closeModal={closeCrearAsignatura}
            />
        </div>
    );
}

export default AdministrarAsignaturas;
