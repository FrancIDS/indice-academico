import React, { useState } from "react";
import { Form, Modal } from "semantic-ui-react";

function AsignaturaEliminar({ isOpen, closeModal }) {
    const [asignaturaEliminar, setAsignaturaEliminar] = useState();
    const handleAsignaturaEliminar = (e, { value }) => setAsignaturaEliminar(value);

    const handleSubmit = () => {};

    return (
        <Modal size="tiny" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">¿Estás seguro de eliminar la asignatura?</Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit}>
                    <p>
                        Para confirmar, escribe "
                        {localStorage.getItem("asignatura")}" en la caja de
                        texto debajo.
                    </p>
                    <Form.Input
                        fluid
                        value={asignaturaEliminar}
                        onChange={handleAsignaturaEliminar}
                    />
                    <Form.Button
                        negative
                        fluid
                        type="submit"
                        disabled={
                            asignaturaEliminar != localStorage.getItem("asignatura")
                        }
                    >
                        Eliminar asignatura
                    </Form.Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}

export default AsignaturaEliminar;
