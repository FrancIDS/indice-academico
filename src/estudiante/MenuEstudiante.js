import React from "react";
import { Container, Grid, Header, Segment, Table } from "semantic-ui-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MenuEstudiante() {
    const indice = 3.6;
    const indiceAcademico = {
        labels: "",
        datasets: [
            {
                label: "Índice Académico",
                data: [indice, 4 - indice],
                backgroundColor: [
                    "#cce9ff",
                    "#FFFFFF",
                ],
                borderColor: [
                    "#1678c2",
                    "#1678c2",
                ],
                borderWidth: 1,
            },
        ],
    };

    const userRol = localStorage.getItem("userRol");

    return (
        <Container>
            <Header as="h1">Bienvenido, @Joselito</Header>
            <Table celled color="blue">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Rol</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>Correo</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{userRol}</Table.Cell>
                        <Table.Cell>José</Table.Cell>
                        <Table.Cell>Durán</Table.Cell>
                        <Table.Cell>joselito02@gmail.com</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Segment color="blue" padded>
                <Grid columns={1} centered>
                    <Grid.Column textAlign="center" style={{ width: "50vh" }}>
                        <Header as="h2">
                            Índice Académico:{" "}
                            <mark
                                style={{
                                    backgroundColor: "#cce9ff",
                                }}
                            >
                                {indice}
                            </mark>
                        </Header>
                        <Pie data={indiceAcademico} />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
}

export default MenuEstudiante;
