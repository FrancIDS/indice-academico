import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment, Table } from "semantic-ui-react";

const TablaAsignaturas = ({ asignaturas }) => {
    return (
        <Table celled color="blue">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Código</Table.HeaderCell>
                    <Table.HeaderCell>Título</Table.HeaderCell>
                    <Table.HeaderCell>Créditos</Table.HeaderCell>
                    <Table.HeaderCell>Calificación</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {asignaturas.map((asignatura, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{asignatura.Codigo}</Table.Cell>
                        <Table.Cell>{asignatura.Nombre}</Table.Cell>
                        <Table.Cell>{asignatura.Creditos}</Table.Cell>
                        <Table.Cell>{asignatura.Calificacion}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

function HistorialAsignaturas() {
    const [historial, setHistorial] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/Estudiantes/Asignaturas/Cursadas', {
            method: 'POST',
            body: JSON.stringify({
                usuario: localStorage.getItem("userUsuario"),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setHistorial(data)
                console.log(historial);
            })
            .catch((err) => {
                console.log(err.message)
            })
        // data fetching here
    }, []);

    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"HistorialAsignaturas"} />
            <Container>
                <Header as="h1">Historial de asignaturas</Header>
                <Segment color="blue">
                    <TablaAsignaturas asignaturas={historial} />
                </Segment>
            </Container>
        </div>
    );
}

export default HistorialAsignaturas;
