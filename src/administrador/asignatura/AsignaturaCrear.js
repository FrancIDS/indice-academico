import React from "react";
import { Form, Button, Modal } from "semantic-ui-react";

function AsignaturaCrear({ isOpen, closeModal }) {
    const handleSubmit = (e) => {};

    const optionsProfesor = [
        { text: "Francia Mejía", value: "Francia Mejía" },
        { text: "Bernardo Batista", value: "Bernardo Batista" },
        { text: "Ernesto Mancebo", value: "Ernesto Mancebo" },
    ];

    return (
        <Modal size="small" dimmer open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Crear asignatura</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                width={2}
                                label="Código"
                                placeholder="Código"
                            />
                            <Form.Input
                                width={5}
                                label="Título"
                                placeholder="Título"
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                width={2}
                                label="Créditos"
                                placeholder="Créditos"
                                type="number"
                            />
                            <Form.Select
                                width={5}
                                label="Profesor asignado"
                                placeholder="Profesor asignado"
                                options={optionsProfesor}
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
