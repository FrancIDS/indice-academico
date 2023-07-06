import React, { useEffect, useState } from "react";
import {
    Container,
    Divider,
    Grid,
    Header,
    Segment,
    Table,
} from "semantic-ui-react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MenuEstudiante() {
    const [calculo, setCalculo] = useState([]);
    const [actuales, setActuales] = useState([]);
    useEffect(() => {
        //Indice
        fetch('http://localhost:5000/Informacion/Indice/Calcular', {
            method: 'POST',
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCalculo(data[0])
                console.log(data[0]);
            })
            .catch((err) => {
                console.log(err.message)
            });
            // Asignaturas
        fetch('http://localhost:5000/Estudiantes/Asignaturas/Cursando', {
            method: 'POST',
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
                periodo: "23-01"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setActuales(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message)
            });
    }, []);
    const indice = calculo.Indice;

    const indiceAcademico = {
        labels: "",
        datasets: [
            {
                label: "Índice Académico",
                data: [indice, 4 - indice],
                backgroundColor: ["#cce9ff", "#FFFFFF"],
                borderColor: ["#2185d0", "#2185d0"],
                borderWidth: 1,
            },
        ],
    };

    let asignaturas = [
        {
            seccion: "IDS325-01",
            titulo: "Aseguramiento de la Calidad del Software",
            credito: "4",
            horario: {
                lunes: "",
                martes: "",
                miercoles: "",
                jueves: "",
                viernes: "",
                sabado: "",
            },
            profesor: "Francia Odalis",
        },
    ];

    const userRol = localStorage.getItem("userRol");

    return (
        <Container>
            <Header as="h1">Bienvenido, @{localStorage.getItem("userUsuario")}</Header>

            <Segment color="blue" padded>
                <Grid columns={2} centered verticalAlign="middle">
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
                    <Grid.Column style={{ margin: "20px" }}>
                        <Header as="h2" textAlign="center">Datos generales</Header>
                        <Table celled color="blue" verticalAlign="middle">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Rol</strong>
                                    </Table.Cell>
                                    <Table.Cell>{localStorage.getItem("userRol")}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Nombre</strong>
                                    </Table.Cell>
                                    <Table.Cell>{localStorage.getItem("userNombre")}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Apellido</strong>
                                    </Table.Cell>
                                    <Table.Cell>{localStorage.getItem("userApellido")}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Carrera</strong>
                                    </Table.Cell>
                                    <Table.Cell>{localStorage.getItem("userCarrera")}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Correo</strong>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {localStorage.getItem("userCorreo")}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid>

                <Divider style={{ margin: "30px" }} />

                <Header as="h2" textAlign="center">
                    Asignaturas seleccionadas
                </Header>

                <Grid>
                    <Grid.Column textAlign="center">
                        <Table celled color="blue">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Sección</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Asignatura
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Créditos
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Lunes</Table.HeaderCell>
                                    <Table.HeaderCell>Martes</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Miércoles
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Jueves</Table.HeaderCell>
                                    <Table.HeaderCell>Viernes</Table.HeaderCell>
                                    <Table.HeaderCell>Sábado</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Profesor
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {asignaturas.map((asignatura, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {asignatura.seccion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.titulo}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.credito}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.horario.lunes}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.horario.martes}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.horario.miercoles}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.horario.jueves}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.horario.viernes}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.horario.sabado}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.profesor}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid>
            </Segment>
            <footer style={{ height: "50px" }}></footer>
        </Container>
    );
}

export default MenuEstudiante;
