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
        fetch("http://localhost:5000/Informacion/Indice/Calcular", {
            method: "POST",
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCalculo(data[0]);
                console.log(data[0]);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // Asignaturas
        fetch("http://localhost:5000/Estudiantes/Asignaturas/Cursando", {
            method: "POST",
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
                periodo: "23-01",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setActuales(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
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

    let combinado = {};

    for (let i = 0; i < actuales.length; i++) {
        let objeto = actuales[i];
        let Codigo = objeto.Codigo;

        if (!combinado[Codigo]) {
            combinado[Codigo] = {
                Codigo: Codigo,
                Nombre: objeto.Nombre,
                Creditos: objeto.Creditos,
                Lunes: objeto.Lunes,
                Martes: objeto.Martes,
                Miercoles: objeto.Miercoles,
                Jueves: objeto.Jueves,
                Viernes: objeto.Viernes,
                Sabado: objeto.Sabado,
            };
        } else {
            if (objeto.Lunes) {
                combinado[Codigo].Lunes = objeto.Lunes;
            }
            if (objeto.Martes) {
                combinado[Codigo].Martes = objeto.Martes;
            }
            if (objeto.Miercoles) {
                combinado[Codigo].Miercoles = objeto.Miercoles;
            }
            if (objeto.Jueves) {
                combinado[Codigo].Jueves = objeto.Jueves;
            }
            if (objeto.Viernes) {
                combinado[Codigo].Viernes = objeto.Viernes;
            }
            if (objeto.Sabado) {
                combinado[Codigo].Sabado = objeto.Sabado;
            }
        }
    }
    let horariosCombinados = Object.values(combinado);
    console.log(horariosCombinados);

    const reformatHorario = (dia) => {
        let horas = dia.split(" - ");
        let inicio = horas[0].split(":")[0];
        let fin = horas[1].split(":")[0];
        return inicio + " - " + fin;
    };

    return (
        <Container>
            <Header as="h1">
                Bienvenido, @{localStorage.getItem("userUsuario")}
            </Header>

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
                        <Header as="h2" textAlign="center">
                            Datos generales
                        </Header>
                        <Table celled color="blue" verticalAlign="middle">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Rol</strong>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {localStorage.getItem("userRol")}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Nombre</strong>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {localStorage.getItem("userNombre")}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Apellido</strong>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {localStorage.getItem("userApellido")}
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <strong>Carrera</strong>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {localStorage.getItem("userCarrera")}
                                    </Table.Cell>
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
                                {horariosCombinados.map((asignatura, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {asignatura.Codigo}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.Nombre}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {asignatura.Creditos}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {(asignatura.Lunes) ? reformatHorario(asignatura.Lunes) : asignatura.Lunes}
                                        </Table.Cell>
                                        <Table.Cell>
                                        {(asignatura.Martes) ? reformatHorario(asignatura.Martes) : asignatura.Martes}
                                        </Table.Cell>
                                        <Table.Cell>
                                        {(asignatura.Miercoles) ? reformatHorario(asignatura.Miercoles) : asignatura.Miercoles}
                                        </Table.Cell>
                                        <Table.Cell>
                                        {(asignatura.Jueves) ? reformatHorario(asignatura.Jueves) : asignatura.Jueves}
                                        </Table.Cell>
                                        <Table.Cell>
                                        {(asignatura.Viernes) ? reformatHorario(asignatura.Viernes) : asignatura.Viernes}
                                        </Table.Cell>
                                        <Table.Cell>
                                        {(asignatura.Sabado) ? reformatHorario(asignatura.Sabado) : asignatura.Sabado}
                                        </Table.Cell>
                                        <Table.Cell>""</Table.Cell>
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
