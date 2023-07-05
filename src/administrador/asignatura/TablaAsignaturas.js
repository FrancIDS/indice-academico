import React from "react";
import { Table, Button } from "semantic-ui-react";

const AsignaturasTable = ({ asignaturas }) => {
    const handleEditar = (asignatura) => {
        // Aquí puedes implementar la lógica para editar la asignatura
        console.log("Editar asignatura:", asignatura);
    };

    const handleEliminar = (asignatura) => {
        // Aquí puedes implementar la lógica para editar la asignatura
        console.log("Eliminar asignatura:", asignatura);
    };

    return (
        <Table celled color="blue">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Código</Table.HeaderCell>
                    <Table.HeaderCell>Título</Table.HeaderCell>
                    <Table.HeaderCell>Crédito</Table.HeaderCell>
                    <Table.HeaderCell>Profesor</Table.HeaderCell>
                    <Table.HeaderCell>Acciones</Table.HeaderCell>{" "}
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {asignaturas.map((asignatura, index) => (
                    <Table.Row key={index}>
                        <Table.Cell>{asignatura.codigo}</Table.Cell>
                        <Table.Cell>{asignatura.titulo}</Table.Cell>
                        <Table.Cell>{asignatura.credito}</Table.Cell>
                        <Table.Cell>{asignatura.profesor}</Table.Cell>
                        <Table.Cell>
                            <Button
                                primary
                                onClick={() => handleEditar(asignatura)}
                                content="Editar"
                                size="compact"
                            />
                            <Button
                                primary
                                onClick={() => handleEliminar(asignatura)}
                                content="Eliminar"
                                size="compact"
                            />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

function TablaAsignaturas() {
    let asignaturas = [
        {
            codigo: "M01",
            titulo: "Algebra Lineal",
            credito: 5,
            profesor: "Randy Leonardo",
        },
        {
            codigo: "M02",
            titulo: "Ecuaciones Diferenciales",
            credito: 5,
            profesor: "Renso Rojas",
        },
        {
            codigo: "M03",
            titulo: "Matemática Discreta I",
            credito: 4,
            profesor: "Renso Rojas",
        },
        {
            codigo: "M04",
            titulo: "Matemática Discreta II",
            credito: 4,
            profesor: "Lidia Almonte",
        },
    ];

    return (
        <div style={{ padding: "10px" }}>
            <AsignaturasTable asignaturas={asignaturas} />
        </div>
    );
}

export default TablaAsignaturas;
