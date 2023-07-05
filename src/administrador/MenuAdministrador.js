import React from "react";
import { Container, Header, Segment, Grid, Table } from "semantic-ui-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MenuAdministrador() {
    const asignaturas = {
        labels: ["Area: M", "Area: S", "Area: L", "Area: F"],
        datasets: [
            {
                label: "Cantidad de asignaturas",
                data: [3, 2, 6, 5],
                backgroundColor: [
                    "rgba(26, 143, 232, 0.2)",
                    "rgba(22, 120, 194, 0.2)",
                    "rgba(28, 142, 255, 0.2)",
                    "rgba(28, 126, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(26, 143, 232, 1)",
                    "rgba(22, 120, 194, 1)",
                    "rgba(28, 142, 255, 1)",
                    "rgba(28, 126, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const usuarios = {
        labels: ["Rol: Administrador", "Rol: Profesor", "Rol: Estudiante"],
        datasets: [
            {
                label: "Cantidad de usuarios",
                data: [3, 6, 23],
                backgroundColor: [
                    "rgba(26, 143, 232, 0.2)",
                    "rgba(22, 120, 194, 0.2)",
                    "rgba(28, 142, 255, 0.2)",
                    "rgba(28, 126, 255, 0.2)",
                ],
                borderColor: [
                    "rgba(26, 143, 232, 1)",
                    "rgba(22, 120, 194, 1)",
                    "rgba(28, 142, 255, 1)",
                    "rgba(28, 126, 255, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    const userRol = localStorage.getItem("userRol");
    return (
        <Container>
            <Header as="h1">Bienvenido, @FrancIDS</Header>
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
                        <Table.Cell>Francisco</Table.Cell>
                        <Table.Cell>Mesa</Table.Cell>
                        <Table.Cell>Francisco.MC.IDS@Gmail.com</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Segment color="blue" padded>
                <Grid columns={2} centered>
                    <Grid.Column textAlign="center" style={{ width: "50vh" }}>
                        <Header as="h2">Cantidad de asignaturas: </Header>
                        <Pie data={asignaturas} />
                    </Grid.Column>
                    <Grid.Column textAlign="center" style={{ width: "50vh" }}>
                        <Header as="h2">Cantidad de usuarios: </Header>
                        <Pie data={usuarios} />
                    </Grid.Column>
                </Grid>
            </Segment>
            <footer style={{ height: "50px" }}></footer>
        </Container>
    );
}

export default MenuAdministrador;
