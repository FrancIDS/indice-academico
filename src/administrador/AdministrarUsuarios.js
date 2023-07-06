import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button, Container, Header, Segment } from "semantic-ui-react";
import TablaUsuarios from "./usuario/TablaUsuarios";
import UsuarioCrear from "./usuario/UsuarioCrear";

function AdministrarUsuarios() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openCrearUsuario = () => setIsModalOpen(true);
    const closeCrearUsuario = () => setIsModalOpen(false);

    return (
        <div style={{ background: "#e8f4fc", height: "100vh" }}>
            <Navbar selectedButton={"AdministrarUsuarios"} />
            <Container>
                <Header as="h1">Administrar usuarios</Header>

                <Segment color="blue" style={{ padding: "20px" }}>
                    <div style={{ padding: "0px 50px" }}>
                        <Button primary fluid onClick={openCrearUsuario}>
                            Crear usuario
                        </Button>
                    </div>

                    <div style={{ padding: "10px" }}>
                        <TablaUsuarios />
                    </div>
                </Segment>
            </Container>

            <UsuarioCrear
                isOpen={isModalOpen}
                closeModal={closeCrearUsuario}
            />
        </div>
    );
}

export default AdministrarUsuarios;
