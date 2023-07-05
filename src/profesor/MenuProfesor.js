import React from "react";
import { Container, Header, Table, Segment, Grid } from "semantic-ui-react";

function MenuProfesor() {
    const userRol = localStorage.getItem("userRol");

    return (
        <Container>
            <Header as="h1">Bienvenido, @Fernando</Header>
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
                        <Table.Cell>Fernando</Table.Cell>
                        <Table.Cell>Batista</Table.Cell>
                        <Table.Cell>fernandolo@gmail.com</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Segment color="blue" padded>
                <Grid columns={1} centered>
                    <Grid.Column textAlign="center" style={{ width: "50vh" }}>
                        <Header as="h2">Índice Académico</Header>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
}

export default MenuProfesor;
