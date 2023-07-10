import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
    Container,
    Header,
    Segment,
    Table,
    Button,
    Grid,
} from "semantic-ui-react";

function AdministrarSecciones() {
    const [secciones, setSecciones] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/Profesores/Secciones", {
            method: "POST",
            body: JSON.stringify({
                profesor: localStorage.getItem("userUsuario"),
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setSecciones(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const combinedSections = {};
    secciones.forEach((section) => {
        const { seccionID, Seccion, Codigo, Nombre, Creditos, Estudiantes } =
            section;

        if (!combinedSections.hasOwnProperty(seccionID)) {
            combinedSections[seccionID] = {
                seccionID,
                Seccion,
                Codigo,
                Nombre,
                Creditos,
                Estudiantes,
                Lunes: [],
                Martes: [],
                Miercoles: [],
                Jueves: [],
                Viernes: [],
                Sabado: [],
            };
        }

        const combinedSection = combinedSections[seccionID];
        combinedSection.Lunes.push(section.Lunes);
        combinedSection.Martes.push(section.Martes);
        combinedSection.Miercoles.push(section.Miercoles);
        combinedSection.Jueves.push(section.Jueves);
        combinedSection.Viernes.push(section.Viernes);
        combinedSection.Sabado.push(section.Sabado);
    });

    const combinedSectionsArray = Object.values(combinedSections);
    console.log(combinedSectionsArray);

    const combinedSubjects = {};
    combinedSectionsArray.forEach((section) => {
        const { seccionID, Codigo, Nombre, Creditos } = section;

        if (!combinedSubjects.hasOwnProperty(Codigo)) {
            combinedSubjects[Codigo] = {
                Codigo,
                Nombre,
                Creditos,
                Secciones: [],
            };
        }

        const combinedSubject = combinedSubjects[Codigo];
        const existingSection = combinedSubject.Secciones.find(
            (s) => s.seccionID === seccionID
        );

        if (existingSection) {
            existingSection.Lunes.push(...section.Lunes);
            existingSection.Martes.push(...section.Martes);
            existingSection.Miercoles.push(...section.Miercoles);
            existingSection.Jueves.push(...section.Jueves);
            existingSection.Viernes.push(...section.Viernes);
            existingSection.Sabado.push(...section.Sabado);
        } else {
            combinedSubject.Secciones.push({
                seccionID,
                Seccion: section.Seccion,
                Estudiantes: section.Estudiantes,
                Lunes: section.Lunes,
                Martes: section.Martes,
                Miercoles: section.Miercoles,
                Jueves: section.Jueves,
                Viernes: section.Viernes,
                Sabado: section.Sabado,
            });
        }
    });

    const combinedSubjectsArray = Object.values(combinedSubjects);
    console.log(combinedSubjectsArray);

    const reformatHorario = (dia) => {
        console.log(dia);
        if (dia[0] == dia[1]) return "";
        let day = dia.filter((item) => item !== null)[0];
        let horas = day.split(" - ");
        let inicio = horas[0].split(":")[0];
        let fin = horas[1].split(":")[0];
        return inicio + " - " + fin;
    };

    return (
        <div style={{ background: "#e8f4fc", height: "100%" }}>
            <Navbar selectedButton={"AdministrarSecciones"} />
            <Container>
                <Header as="h1">Administrar secciones</Header>

                {combinedSubjectsArray.map((asignatura, index) => (
                    <Segment color="blue" style={{ padding: "20px" }}>
                        <Grid columns={2}>
                            <Grid.Column>
                                <Header as="h3">
                                    {asignatura.Codigo} - {asignatura.Nombre}
                                </Header>
                            </Grid.Column>
                            <Grid.Column textAlign="right">
                                <Button primary compact>
                                    Crear sección
                                </Button>
                            </Grid.Column>
                        </Grid>
                        <Table color="blue">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Sección</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Cantidad de estudiantes
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Horario</Table.HeaderCell>
                                    <Table.HeaderCell>Acción</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {asignatura.Secciones.map((seccion, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>
                                            {seccion.Seccion}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {seccion.Estudiantes}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Table>
                                                <Table.Header>
                                                    <Table.Row>
                                                        <Table.HeaderCell>
                                                            Lunes
                                                        </Table.HeaderCell>
                                                        <Table.HeaderCell>
                                                            Martes
                                                        </Table.HeaderCell>
                                                        <Table.HeaderCell>
                                                            Miercoles
                                                        </Table.HeaderCell>
                                                        <Table.HeaderCell>
                                                            Jueves
                                                        </Table.HeaderCell>
                                                        <Table.HeaderCell>
                                                            Viernes
                                                        </Table.HeaderCell>
                                                        <Table.HeaderCell>
                                                            Sabado
                                                        </Table.HeaderCell>
                                                    </Table.Row>
                                                </Table.Header>
                                                <Table.Body>
                                                    <Table.Row>
                                                        <Table.Cell>
                                                            {reformatHorario(
                                                                seccion.Lunes
                                                            )}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {reformatHorario(
                                                                seccion.Martes
                                                            )}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {reformatHorario(
                                                                seccion.Miercoles
                                                            )}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {reformatHorario(
                                                                seccion.Jueves
                                                            )}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {reformatHorario(
                                                                seccion.Viernes
                                                            )}
                                                        </Table.Cell>
                                                        <Table.Cell>
                                                            {reformatHorario(
                                                                seccion.Sabado
                                                            )}
                                                        </Table.Cell>
                                                    </Table.Row>
                                                </Table.Body>
                                            </Table>
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Button primary compact>
                                                Editar
                                            </Button>
                                            <Button primary compact>
                                                Eliminar
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Segment>
                ))}
            </Container>
        </div>
    );
}

export default AdministrarSecciones;
