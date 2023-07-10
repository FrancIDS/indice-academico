import React, { useEffect, useState } from "react";
import { Form, Modal, Button } from "semantic-ui-react";

function AsignaturaEditar({ isOpen, closeModal }) {
    const handleSubmit = (e) => {};

    const [codigo, setCodigo] = useState("");
    const [credito, setCredito] = useState("");
    const [titulo, setTitulo] = useState("");
    const [profesores, setProfesores] = useState([]);
    const [areas, setAreas] = useState([]);
    const [selectedProfesor, setSelectedProfesor] = useState("");
    const [selectedArea, setSelectedArea] = useState("");

    const handleCodigoChange = (e, { value }) => setCodigo(value);
    const handleCreditoChange = (e, { value }) => setCredito(value);
    const handleTituloChange = (e, { value }) => setTitulo(value);
    const handleProfesorChange = (e, { value }) => setSelectedProfesor(value);
    const handleAreaChange = (e, { value }) => setSelectedArea(value);

    const optionsProfesor = [];
    profesores.map((x) => {
        optionsProfesor.push({ text: x.Nombre, value: x.Usuario });
    });

    const optionsArea = [];
    areas.map((x) => {
        optionsArea.push({ text: x.Area, value: x.ID });
    });

    useEffect(() => {
        fetch("http://localhost:5000/Informacion/Profesores/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setProfesores(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        fetch("http://localhost:5000/Informacion/Areas/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setAreas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });

        setCodigo(localStorage.getItem("codigo"));
        setCredito(localStorage.getItem("credito"));
        setTitulo(localStorage.getItem("titulo"));
        setSelectedProfesor(localStorage.getItem("profesor"));
        setSelectedArea(localStorage.getItem("area"));
    }, [
        localStorage.getItem("codigo"),
        localStorage.getItem("credito"),
        localStorage.getItem("titulo"),
        localStorage.getItem("profesor"),
        localStorage.getItem("area"),
    ]);

    return (
        <Modal size="small" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Editar asignatura</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                disabled
                                width={5}
                                label="Código"
                                placeholder="Código"
                                value={codigo}
                                onChange={handleCodigoChange}
                            />
                            <Form.Input
                                width={4}
                                label="Créditos"
                                placeholder="Créditos"
                                value={credito}
                                onChange={handleCreditoChange}
                                type="number"
                            />
                        </Form.Group>
                        <Form.Input
                            fluid
                            label="Título"
                            placeholder="Título"
                            value={titulo}
                            onChange={handleTituloChange}
                        />
                        <Form.Group widths="equal">
                            <Form.Select
                                width={5}
                                label="Profesor asignado"
                                placeholder={selectedProfesor}
                                options={optionsProfesor}
                                value={selectedProfesor}
                                onChange={handleProfesorChange}
                            />
                            <Form.Select
                                width={4}
                                label="Area"
                                placeholder={selectedArea}
                                options={optionsArea}
                                value={selectedArea}
                                onChange={handleAreaChange}
                            />
                        </Form.Group>
                        <Button primary fluid type="submit">
                            Editar asignatura
                        </Button>
                    </Form>
                </div>
            </Modal.Content>
        </Modal>
    );
}

export default AsignaturaEditar;
