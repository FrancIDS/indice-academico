import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
    Button,
    Container,
    Divider,
    Header,
    Segment,
    Table,
} from "semantic-ui-react";

function SeleccionarAsignaturas() {
    const [seleccionadas, setSeleccionadas] = useState([]);
    const [porSeleccionar, setPorSeleccionar] = useState([]);

    useEffect(() => {
        // Seleccionadas
        fetch("http://localhost:5000/Seleccion/Secciones/Seleccionadas", {
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
                setSeleccionadas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        // Por seleccionar
        fetch("http://localhost:5000/Seleccion/Secciones/Mostrar", {
            method: "POST",
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
                carrera: localStorage.getItem("userCarrera"),
                periodo: "23-01",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setPorSeleccionar(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    let combinado = {};
    for (let i = 0; i < seleccionadas.length; i++) {
        let objeto = seleccionadas[i];
        let Codigo = objeto.Codigo;

        if (!combinado[Codigo]) {
            combinado[Codigo] = {
                Codigo: Codigo,
                Asignatura: objeto.Asignatura,
                Creditos: objeto.Creditos,
                Lunes: objeto.Lunes,
                Martes: objeto.Martes,
                Miercoles: objeto.Miercoles,
                Jueves: objeto.Jueves,
                Viernes: objeto.Viernes,
                Sabado: objeto.Sabado,
                Profesor: objeto.Profesor,
                seccionID: objeto.seccionID,
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

    let combinadoP = {};
    for (let i = 0; i < porSeleccionar.length; i++) {
        let objeto = porSeleccionar[i];
        let Codigo = objeto.Codigo;

        if (!combinadoP[Codigo]) {
            combinadoP[Codigo] = {
                Codigo: Codigo,
                Asignatura: objeto.Asignatura,
                Creditos: objeto.Creditos,
                Lunes: objeto.Lunes,
                Martes: objeto.Martes,
                Miercoles: objeto.Miercoles,
                Jueves: objeto.Jueves,
                Viernes: objeto.Viernes,
                Sabado: objeto.Sabado,
                Profesor: objeto.Profesor,
                seccionID: objeto.seccionID,
            };
        } else {
            if (objeto.Lunes) {
                combinadoP[Codigo].Lunes = objeto.Lunes;
            }
            if (objeto.Martes) {
                combinadoP[Codigo].Martes = objeto.Martes;
            }
            if (objeto.Miercoles) {
                combinadoP[Codigo].Miercoles = objeto.Miercoles;
            }
            if (objeto.Jueves) {
                combinadoP[Codigo].Jueves = objeto.Jueves;
            }
            if (objeto.Viernes) {
                combinadoP[Codigo].Viernes = objeto.Viernes;
            }
            if (objeto.Sabado) {
                combinadoP[Codigo].Sabado = objeto.Sabado;
            }
        }
    }
    let horariosCombinadoPs = Object.values(combinadoP);
    console.log(horariosCombinadoPs);

    const guardarSeleccion = () => {
        alert("Asignaturas seleccionadas");
    };

    const reformatHorario = (dia) => {
        let horas = dia.split(" - ");
        let inicio = horas[0].split(":")[0];
        let fin = horas[1].split(":")[0];
        return inicio + " - " + fin;
    };

    function agregarSeccion (sID, horario) {

        //Cambio
        fetch("http://localhost:5000/Seleccion/Estudiantes/Seleccionar", {
            method: "POST",
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
                seccion: sID,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.message);
            });
        
    };
    const quitarSeccion = (sID) => {
        fetch("http://localhost:5000/Seleccion/Estudiantes/QuitarSeleccion", {
            method: "DELETE",
            body: JSON.stringify({
                estudiante: localStorage.getItem("userUsuario"),
                seccion: sID,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"SeleccionarAsignaturas"} />
            <Container>
                <Header as="h1">Seleccionar asignaturas</Header>
                <Button primary fluid onClick={guardarSeleccion}>
                    Guardar selección
                </Button>
                <Segment color="blue" style={{ margin: "20px" }}>
                    <Header as="h2">Asignaturas seleccionadas</Header>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Sección</Table.HeaderCell>
                                <Table.HeaderCell>Asignatura</Table.HeaderCell>
                                <Table.HeaderCell>Créditos</Table.HeaderCell>
                                <Table.HeaderCell>Lunes</Table.HeaderCell>
                                <Table.HeaderCell>Martes</Table.HeaderCell>
                                <Table.HeaderCell>Miércoles</Table.HeaderCell>
                                <Table.HeaderCell>Jueves</Table.HeaderCell>
                                <Table.HeaderCell>Viernes</Table.HeaderCell>
                                <Table.HeaderCell>Sábado</Table.HeaderCell>
                                <Table.HeaderCell>Profesor</Table.HeaderCell>
                                <Table.HeaderCell>Acción</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {horariosCombinados.map((asignatura, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{asignatura.Codigo}</Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Asignatura}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Creditos}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Lunes
                                            ? reformatHorario(asignatura.Lunes)
                                            : asignatura.Lunes}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Martes
                                            ? reformatHorario(asignatura.Martes)
                                            : asignatura.Martes}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Miercoles
                                            ? reformatHorario(
                                                asignatura.Miercoles
                                            )
                                            : asignatura.Miercoles}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Jueves
                                            ? reformatHorario(asignatura.Jueves)
                                            : asignatura.Jueves}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Viernes
                                            ? reformatHorario(
                                                asignatura.Viernes
                                            )
                                            : asignatura.Viernes}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Sabado
                                            ? reformatHorario(asignatura.Sabado)
                                            : asignatura.Sabado}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Profesor}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button
                                            onClick={() => {
                                                quitarSeccion(
                                                    asignatura.seccionID
                                                );
                                            }}
                                        >
                                            Quitar
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>

                    <Divider></Divider>

                    <Header as="h2">
                        Asignaturas disponibles para seleccionar
                    </Header>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Sección</Table.HeaderCell>
                                <Table.HeaderCell>Asignatura</Table.HeaderCell>
                                <Table.HeaderCell>Créditos</Table.HeaderCell>
                                <Table.HeaderCell>Lunes</Table.HeaderCell>
                                <Table.HeaderCell>Martes</Table.HeaderCell>
                                <Table.HeaderCell>Miércoles</Table.HeaderCell>
                                <Table.HeaderCell>Jueves</Table.HeaderCell>
                                <Table.HeaderCell>Viernes</Table.HeaderCell>
                                <Table.HeaderCell>Sábado</Table.HeaderCell>
                                <Table.HeaderCell>Profesor</Table.HeaderCell>
                                <Table.HeaderCell>Acción</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {horariosCombinadoPs.map((asignatura, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{asignatura.Codigo}</Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Asignatura}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Creditos}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Lunes
                                            ? reformatHorario(asignatura.Lunes)
                                            : asignatura.Lunes}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Martes
                                            ? reformatHorario(asignatura.Martes)
                                            : asignatura.Martes}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Miercoles
                                            ? reformatHorario(
                                                asignatura.Miercoles
                                            )
                                            : asignatura.Miercoles}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Jueves
                                            ? reformatHorario(asignatura.Jueves)
                                            : asignatura.Jueves}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Viernes
                                            ? reformatHorario(
                                                asignatura.Viernes
                                            )
                                            : asignatura.Viernes}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Sabado
                                            ? reformatHorario(asignatura.Sabado)
                                            : asignatura.Sabado}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {asignatura.Profesor}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button
                                            onClick={() => {
                                                agregarSeccion(
                                                    asignatura.seccionID
                                                );
                                            }}
                                        >
                                            Agregar
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Segment>
            </Container>
        </div>
    );
}

export default SeleccionarAsignaturas;
