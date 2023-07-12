import React, { useState } from "react";
import { Form, Modal } from "semantic-ui-react";

function UsuarioEliminar({ isOpen, closeModal }) {
    const [usuarioEliminar, setUsuarioEliminar] = useState();
    const handleUsuarioEliminar = (e, { value }) => setUsuarioEliminar(value);

    const handleSubmit = () => {
        fetch("http://localhost:5000/Usuarios/Eliminar/Pregunta", {
            method: "DELETE",
            body: JSON.stringify({
                usuario: localStorage.getItem("usuario"),
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

        fetch("http://localhost:5000/Usuarios/Eliminar", {
            method: "DELETE",
            body: JSON.stringify({
                usuario: localStorage.getItem("usuario"),
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
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <Modal size="tiny" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">
                ¿Estás seguro de eliminar el usuario?
            </Modal.Header>
            <Modal.Content>
                <Form onSubmit={handleSubmit}>
                    <p>
                        Para confirmar, escribe "
                        {localStorage.getItem("usuario")}" en la caja de texto
                        debajo.
                    </p>
                    <Form.Input
                        fluid
                        value={usuarioEliminar}
                        onChange={handleUsuarioEliminar}
                    />
                    <Form.Button
                        negative
                        fluid
                        type="submit"
                        disabled={
                            usuarioEliminar != localStorage.getItem("usuario")
                        }
                    >
                        Eliminar usuario
                    </Form.Button>
                </Form>
            </Modal.Content>
        </Modal>
    );
}

export default UsuarioEliminar;
