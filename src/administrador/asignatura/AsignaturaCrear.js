import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "semantic-ui-react";

function AsignaturaCrear({ isOpen, closeModal }) {
    const handleSubmit = (e) => {};

    const [profesores, setProfesores] = useState([]);

    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [credito, setCredito] = useState("");

    const handleCodigoChange = (e) => setCodigo(e.target.value);
    const handleTituloChange = (e) => setTitulo(e.target.value);
    const handleCreditoChange = (e) => setCredito(e.target.value);

    useEffect(() => {
        fetch("http://localhost:5000/Informacion/Profesores/Mostrar")
            .then((response) => response.json())
            .then((data) => {
                setProfesores(data);
                console.log(profesores);
            })
            .catch((err) => {
                console.log(err.message);
            });
        // data fetching here
    }, []);

    const optionsProfesor = [];
    profesores.map((x) => {
        optionsProfesor.push({ text: x.Nombre, value: x.ID });
    });

    const optionsArea = [];

    return (
        <Modal size="small" dimmer open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Crear asignatura</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
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
                                placeholder="Profesor asignado"
                                options={optionsProfesor}
                            />
                            <Form.Select
                                width={4}
                                label="Area"
                                placeholder="Area"
                                options={optionsArea}
                            />
                        </Form.Group>
                    </Form>
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button primary type="submit">
                    Crear asignatura
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default AsignaturaCrear;
