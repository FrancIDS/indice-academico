import React, { useState } from "react";
import { Form, Modal } from "semantic-ui-react";

function AsignaturaEliminar({ isOpen, closeModal }) {
    const [asignaturaEliminar, setAsignaturaEliminar] = useState();
    const handleAsignaturaEliminar = (e, { value }) =>
        setAsignaturaEliminar(value);

    const handleSubmit = () => {
        fetch("http://localhost:5000/Asignaturas/Eliminar/Horario", {
            method: "delete",
            body: JSON.stringify({
                codigo: localStorage.getItem("asignatura"),
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

        fetch("http://localhost:5000/Asignaturas/Eliminar/Seccion", {
            method: "delete",
            body: JSON.stringify({
                codigo: localStorage.getItem("asignatura"),
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                window.location.reload();
                closeModal();
            })
            .catch((err) => {});

        fetch("http://localhost:5000/Asignaturas/Eliminar/Profesor", {
            method: "delete",
            body: JSON.stringify({
                codigo: localStorage.getItem("asignatura"),
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

        fetch("http://localhost:5000/Asignaturas/Eliminar", {
            method: "delete",
            body: JSON.stringify({
                codigo: localStorage.getItem("asignatura"),
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
    };

    return (
        <Modal size="tiny" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">
                ¿Estás seguro de eliminar la asignatura?
            </Modal.Header>
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
                            asignaturaEliminar !=
                            localStorage.getItem("asignatura")
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
