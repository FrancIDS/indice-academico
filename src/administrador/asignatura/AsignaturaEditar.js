import React from "react";
import { Form, Modal } from "semantic-ui-react";

function AsignaturaEditar({ isOpen, closeModal }) {
    const handleSubmit = (e) => {};

    return (
        <Modal size="small" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Editar asignatura</Modal.Header>
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
                            Editar asignatura
                        </Button>
                    </Form>
                </div>
            </Modal.Content>
        </Modal>
    );
}

export default AsignaturaEditar;
