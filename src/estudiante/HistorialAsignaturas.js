import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment, Table } from "semantic-ui-react";

const TablaAsignaturas = ({ asignaturas }) => {
    const calificacionLetra = (calificacion) => {
        if (calificacion >= 90) return "A";
        else if (calificacion >= 85) return "B+";
        else if (calificacion >= 80) return "B";
        else if (calificacion >= 75) return "C+";
        else if (calificacion >= 70) return "C";
        else if (calificacion >= 60) return "D";
        else return "F";
        return "";
    };

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
                        <Table.Cell>
                            {calificacionLetra(asignatura.Calificacion) +
                                " (" +
                                asignatura.Calificacion +
                                ")"}
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

function HistorialAsignaturas() {
    const [historial, setHistorial] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/Estudiantes/Asignaturas/Cursadas", {
            method: "POST",
            body: JSON.stringify({
                usuario: localStorage.getItem("userUsuario"),
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setHistorial(data);
                console.log(historial);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // data fetching here
    }, []);

    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"HistorialAsignaturas"} />
            <Container>
                <Header as="h1">Historial de asignaturas</Header>
                <Segment color="blue">
                    <div style={{ padding: "10px" }}>
                        <Header as="h2">Periodo: 23-1</Header>
                        <TablaAsignaturas asignaturas={historial} />
                    </div>
                </Segment>
            </Container>
            <footer style={{ height: "50px" }}></footer>
        </div>
    );
}

export default HistorialAsignaturas;
