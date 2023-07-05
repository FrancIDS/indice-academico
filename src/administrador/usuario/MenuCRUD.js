import React, { useState } from "react";
import { Menu, Segment } from "semantic-ui-react";
import UsuarioCrear from "./UsuarioCrear";
import UsuarioEditar from "./UsuarioEditar";

function MenuCRUD() {
    const [activeItem, setActiveItem] = useState("Crear");

    const handleItemClick = (name) => {
        setActiveItem(name);
    };

    const renderComponent = () => {
        switch (activeItem) {
            case "Crear":
                return <UsuarioCrear />;
            case "Editar":
                return <UsuarioEditar />;
            case "Eliminar":
                return <></>;
            default:
                return null;
        }
    };

    return (
        <div>
            <Menu widths={3}>
                <Menu.Item
                    name="Crear"
                    active={activeItem === "Crear"}
                    onClick={() => handleItemClick("Crear")}
                />
                <Menu.Item
                    name="Editar"
                    active={activeItem === "Editar"}
                    onClick={() => handleItemClick("Editar")}
                />
                <Menu.Item
                    name="Eliminar"
                    active={activeItem === "Eliminar"}
                    onClick={() => handleItemClick("Eliminar")}
                />
            </Menu>

            <Segment attached="bottom">{renderComponent()}</Segment>
        </div>
    );
}

export default MenuCRUD;