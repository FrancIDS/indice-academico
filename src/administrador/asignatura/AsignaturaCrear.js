import React, { useEffect, useState } from "react";
import { Form, Button, Modal } from "semantic-ui-react";

function AsignaturaCrear({ isOpen, closeModal }) {
    const handleSubmit = (e) => {
        let error = false;
        if (isNaN(credito)) {
            alert('Escribe un numero en el campo "Creditos"');
            error = true;
        } else if (
            codigo === "" ||
            titulo === "" ||
            credito === "" ||
            selectedArea === ""
        ) {
            alert("No dejes campos vacios!");
            error = true;
        } else {
            fetch("http://localhost:5000/Asignaturas/Insertar", {
                method: "POST",
                body: JSON.stringify({
                    codigo: codigo,
                    nombre: titulo.toUpperCase(),
                    credito: credito,
                    area: selectedArea,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    closeModal();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }

        if (
            error === false &&
            codigo != "" &&
            titulo != "" &&
            credito != "" &&
            selectedArea != ""
        ) {
            fetch("http://localhost:5000/Asignaturas/Asignar/Profesor", {
                method: "POST",
                body: JSON.stringify({
                    codigo: codigo,
                    profesor: selectedProfesor,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
                .then((response) => response.json())
                .then((data) => {})
                .catch((err) => {
                    console.log(err.message);
                });
        }
        else {
            alert("No dejes campos vacios!");
        }
    };

    const handleAreaChange = (e, { value }) => setSelectedArea(value);
    const handleProfesorChange = (e, { value }) => setSelectedProfesor(value);

    const [profesores, setProfesores] = useState([]);
    const [areas, setAreas] = useState([]);

    //Campos
    const [codigo, setCodigo] = useState("");
    const [titulo, setTitulo] = useState("");
    const [credito, setCredito] = useState("");

    // ComboBox
    const [selectedArea, setSelectedArea] = useState("");
    const [selectedProfesor, setSelectedProfesor] = useState("");

    const handleCodigoChange = (e) => setCodigo(e.target.value);
    const handleTituloChange = (e) => setTitulo(e.target.value);
    const handleCreditoChange = (e) => setCredito(e.target.value);

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
        // data fetching here
    }, []);

    const optionsProfesor = [];
    profesores.map((x) => {
        optionsProfesor.push({ text: x.Nombre, value: x.Usuario });
    });

    const optionsArea = [];

    areas.map((x) => {
        optionsArea.push({ text: x.Area, value: x.ID });
    });

    return (
        <Modal size="small" open={isOpen} onClose={closeModal}>
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
                                value={selectedProfesor}
                                onChange={handleProfesorChange}
                            />
                            <Form.Select
                                width={4}
                                label="Area"
                                placeholder="Area"
                                options={optionsArea}
                                value={selectedArea}
                                onChange={handleAreaChange}
                            />
                        </Form.Group>
                        <Button primary type="submit">
                            Crear asignatura
                        </Button>
                    </Form>
                </div>
            </Modal.Content>
            <Modal.Actions></Modal.Actions>
        </Modal>
    );
}

export default AsignaturaCrear;
