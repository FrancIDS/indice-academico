import React from "react";
import { Container, Header, Table, Segment, Grid } from "semantic-ui-react";

function MenuProfesor() {
    return (
        <Container style={{ height: "100vh" }}>
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
                <Grid columns={1} centered>
                    <Grid.Column textAlign="center" style={{ width: "50vh" }}>
                        <Header as="h2">
                            Cantidad de asignaturas asignadas:{" "}
                        </Header>
                    </Grid.Column>
                </Grid>
            </Segment>
            <footer style={{ height: "50px" }}></footer>
        </Container>
    );
}

export default MenuProfesor;
