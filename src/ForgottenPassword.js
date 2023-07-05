import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Grid, Button } from "semantic-ui-react";

function ForgottenPassword() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            navigate("/menu");
        }
    });

    return (
        <div style={{ background: "#10588f" }}>
            <Container>
                <Grid
                    centered
                    verticalAlign="middle"
                    style={{ height: "100vh" }}
                >
                    <Grid.Column
                        style={{
                            background: "#FFF",
                            maxWidth: 500,
                            padding: "30px 60px",
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <Link to="/">
                            <Button primary fluid>
                                Volver
                            </Button>
                        </Link>
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    );
}

export default ForgottenPassword;
