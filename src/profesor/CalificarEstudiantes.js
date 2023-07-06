import React from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Header, Segment, Table } from "semantic-ui-react";

function CalificarEstudiantes() {
    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"CalificarEstudiantes"} />
            <Container>
                <Header as="h1">Calificar estudiantes</Header>

                <Segment color="blue" style={{ padding: "20px" }}>
                    <Header as="h3">M01 - ALGEBRA I</Header>
                    <Table color="blue">
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Sección</Table.HeaderCell>
                                <Table.HeaderCell>Estudiante</Table.HeaderCell>
                                <Table.HeaderCell>
                                    Calificación
                                </Table.HeaderCell>
                                <Table.HeaderCell>Acción</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>Sebastián Mercado</Table.Cell>
                                <Table.Cell>A</Table.Cell>
                                <Table.Cell>
                                    <Button primary compact>
                                        Modificar
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>2</Table.Cell>
                                <Table.Cell>Grace Díaz</Table.Cell>
                                <Table.Cell>B+</Table.Cell>
                                <Table.Cell>
                                    <Button primary compact>
                                        Modificar
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Segment>
            </Container>
        </div>
    );
}

export default CalificarEstudiantes;
