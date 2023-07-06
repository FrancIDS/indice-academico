import React from "react";
import Navbar from "../components/Navbar";
import { Container, Header, Segment, Table, Button } from "semantic-ui-react";

function AdministrarSecciones() {
    let secciones = [
        {
            Codigo: "M01",
            Nombre: "ALGEBRA I",
            Creditos: 4,
            Seccion: 1,
            Estudiantes: 0,
        },
        {
            Codigo: "M01",
            Nombre: "ALGEBRA I",
            Creditos: 4,
            Seccion: 2,
            Estudiantes: 0,
        },
        {
            Codigo: "M02",
            Nombre: "ALGEBRA II",
            Creditos: 4,
            Seccion: 1,
            Estudiantes: 0,
        },
        {
            Codigo: "M03",
            Nombre: "CALCULO I",
            Creditos: 5,
            Seccion: 1,
            Estudiantes: 1,
        },
        {
            Codigo: "M04",
            Nombre: "CALCULO II",
            Creditos: 5,
            Seccion: 1,
            Estudiantes: 1,
        },
    ];

    // Agrupar las asignaturas por Codigo y Nombre
    let asignaturasAgrupadas = secciones.reduce((acumulador, seccion) => {
        let codigoNombre = seccion.Codigo + "-" + seccion.Nombre;

        if (!acumulador[codigoNombre]) {
            acumulador[codigoNombre] = {
                secciones: [],
                estudiantes: [],
            };
        }

        acumulador[codigoNombre].secciones.push(seccion.Seccion);
        acumulador[codigoNombre].estudiantes.push(seccion.Estudiantes);
        return acumulador;
    }, {});

    // Convertir el objeto en un array
    let asignaturasArray = Object.entries(asignaturasAgrupadas).map(
        ([codigoNombre, datos]) => {
            let [codigo, nombre] = codigoNombre.split("-");
            return {
                Codigo: codigo,
                Nombre: nombre,
                Secciones: datos.secciones,
                Estudiantes: datos.estudiantes,
            };
        }
    );

    console.log(asignaturasArray);

    return (
        <div style={{ background: "#e8f4fc", height: "100%" }}>
            <Navbar selectedButton={"AdministrarSecciones"} />
            <Container>
                <Header as="h1">Administrar secciones</Header>

                {asignaturasArray.map((asignatura, index) => (
                    <Segment color="blue" style={{ padding: "20px" }}>
                        <Header as="h3">
                            {asignatura.Codigo} - {asignatura.Nombre}
                        </Header>
                        <Table color="blue">
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Sección</Table.HeaderCell>
                                    <Table.HeaderCell>
                                        Cantidad de estudiantes
                                    </Table.HeaderCell>
                                    <Table.HeaderCell>Acción</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {asignatura.Secciones.map((seccion, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell>{seccion}</Table.Cell>
                                        <Table.Cell>
                                            {asignatura.Estudiantes[index]}
                                        </Table.Cell>
                                        <Table.Cell>
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
