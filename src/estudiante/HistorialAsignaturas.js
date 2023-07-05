import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment, Table } from "semantic-ui-react";

const TablaAsignaturas = ({ asignaturas }) => {
    return (
        <Table celled color="blue">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Código</Table.HeaderCell>
                    <Table.HeaderCell>Título</Table.HeaderCell>
                    <Table.HeaderCell>Crédito</Table.HeaderCell>
                    <Table.HeaderCell>Calificación</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {asignaturas.map((asignatura, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{asignatura.Codigo}</Table.Cell>
                        <Table.Cell>{asignatura.Titulo}</Table.Cell>
                        <Table.Cell>{asignatura.Credito}</Table.Cell>
                        <Table.Cell>{asignatura.Calificacion}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

function HistorialAsignaturas() {
    let asignaturas = [
        {
            Codigo: "M01",
            Titulo: "Algebra",
            Credito: 5,
            Calificacion: "A",
        },
        {
            Codigo: "F01",
            Titulo: "Física",
            Credito: 3,
            Calificacion: "B",
        },
    ];

    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"HistorialAsignaturas"} />
            <Container>
                <Header as="h1">Historial de asignaturas</Header>
                <Segment color="blue">
                    <TablaAsignaturas asignaturas={asignaturas} />
                </Segment>
            </Container>
        </div>
    );
}

export default HistorialAsignaturas;
