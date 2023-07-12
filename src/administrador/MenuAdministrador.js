import React, { useEffect, useState } from "react";
import { Container, Header, Segment, Grid, Table } from "semantic-ui-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MenuAdministrador() {
    const [areas, setAreas] = useState([]);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/Informacion/Areas/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setAreas(data);
                console.log(areas);
            })
            .catch((err) => {
                console.log(err.message);
            });

        fetch("http://localhost:5000/Informacion/Usuario/Contar")
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                console.log(users);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let areaLabels = areas.map((area) => area.Area);
    let areaData = areas.map((area) => area.Asignaturas);

    let userLabels = users.map((user) => user.Rol);
    let userData = users.map((user) => user.Usuarios);

    const asignaturas = {
        labels: areaLabels,
        datasets: [
            {
                label: "Cantidad de asignaturas",
                data: areaData,
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
        labels: userLabels,
        datasets: [
            {
                label: "Cantidad de usuarios",
                data: userData,
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

    return (
        <Container>
            <Header as="h1">
                Bienvenido, @{localStorage.getItem("userUsuario")}
            </Header>
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
                        <Table.Cell>
                            {localStorage.getItem("userRol")}
                        </Table.Cell>
                        <Table.Cell>
                            {localStorage.getItem("userNombre")}
                        </Table.Cell>
                        <Table.Cell>
                            {localStorage.getItem("userApellido")}
                        </Table.Cell>
                        <Table.Cell>
                            {localStorage.getItem("userCorreo")}
                        </Table.Cell>
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
