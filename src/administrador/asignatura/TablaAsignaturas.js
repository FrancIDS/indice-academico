import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import AsignaturaEliminar from "./AsignaturaEliminar";

const AsignaturasTable = ({ asignaturas }) => {
    const handleEditar = (asignatura) => {
        // Aquí puedes implementar la lógica para editar la asignatura
        console.log("Editar asignatura:", asignatura);
    };

    const [isModalOpenEliminar, setIsModalOpenEliminar] = useState(false);
    const openEliminarAsignatura = () => setIsModalOpenEliminar(true);
    const closeEliminarAsignatura = () => {
        setIsModalOpenEliminar(false);
        localStorage.removeItem("asignatura");
    };

    return (
        <>
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
                            <Table.Cell>{asignatura.Codigo}</Table.Cell>
                            <Table.Cell>{asignatura.Titulo}</Table.Cell>
                            <Table.Cell>{asignatura.Credito}</Table.Cell>
                            <Table.Cell>{asignatura.Profesor}</Table.Cell>
                            <Table.Cell>
                                <Button
                                    primary
                                    onClick={() => handleEditar(asignatura)}
                                    content="Editar"
                                    size="compact"
                                />
                                <Button
                                    primary
                                    onClick={() => {
                                        openEliminarAsignatura();
                                        localStorage.setItem("asignatura", asignatura.Codigo);
                                    }}
                                    content="Eliminar"
                                    size="compact"
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        
        <AsignaturaEliminar isOpen={isModalOpenEliminar} closeModal={closeEliminarAsignatura} />
        </>
    );
};

function TablaAsignaturas() {
    const [asignaturas, setAsignaturas] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/Informacion/Asignaturas/Profesores")
            .then((response) => response.json())
            .then((data) => {
                setAsignaturas(data);
                console.log(asignaturas);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // data fetching here
    }, []);
    return (
        <div style={{ padding: "10px" }}>
            <AsignaturasTable asignaturas={asignaturas} />
        </div>
    );
}

export default TablaAsignaturas;
