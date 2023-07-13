import React, { useState } from "react";
import { Button, Divider, Form, Modal } from "semantic-ui-react";

function SeccionCrear({ isOpen, closeModal }) {
    const [numero, setNumero] = useState("");
    const [dia, setDia] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFin, setHoraFin] = useState("");

    const handleNumeroChange = (e, { value }) => setNumero(value);
    const handleDiaChange = (e, { value }) => setDia(value);
    const handleHoraInicioChange = (e, { value }) => setHoraInicio(value);
    const handleHoraFinChange = (e, { value }) => setHoraFin(value);

    const optionsDia = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    const handleSubmit = () => {};

    return (
        <Modal size="tiny" open={isOpen} onClose={closeModal}>
            <Modal.Header as="h2">Crear sección</Modal.Header>
            <Modal.Content>
                <div style={{ padding: "20px" }}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Número"
                                placeholder="Número"
                                value={numero}
                                onChange={handleNumeroChange}
                            />
                            <Form.Select
                                label="Día"
                                placeholder="Día"
                                options={optionsDia}
                                value={dia}
                                onChange={handleDiaChange}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Hora de inicio"
                                placeholder="Hora de inicio"
                                value={horaInicio}
                                onChange={handleHoraInicioChange}
                            />
                            <Form.Input
                                label="Hora de fin"
                                placeholder="Hora de fin"
                                value={horaFin}
                                onChange={handleHoraFinChange}
                            />
                        </Form.Group>
                        <Divider hidden />
                        <Button fluid primary type="submit">
                            Crear sección
                        </Button>
                    </Form>
                </div>
            </Modal.Content>
        </Modal>
    );
}

export default SeccionCrear;
