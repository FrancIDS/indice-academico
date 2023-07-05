import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import ProtectedRoute from "./components/PrivateRoute";

import LoginForm from "./LoginForm";
import ForgottenPassword from "./ForgottenPassword";

import Menu from "./Menu";

// Administrador
import AdministrarAsignaturas from "./administrador/AdministrarAsignaturas";
import AdministrarUsuarios from "./administrador/AdministrarUsuarios";

// Estudiante
import SeleccionarAsignaturas from "./estudiante/SeleccionarAsignaturas";
import HistorialAsignaturas from "./estudiante/HistorialAsignaturas";

// Profesor
import AdministrarSecciones from "./profesor/AdministrarSecciones";
import CalificarEstudiantes from "./profesor/CalificarEstudiantes";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route index element={<LoginForm />} />
                    <Route
                        path="/ForgottenPassword"
                        element={<ForgottenPassword />}
                    />

                    <Route
                        path="/Menu"
                        element={
                            <ProtectedRoute>
                                <Menu />
                            </ProtectedRoute>
                        }
                    />

                    {/* Estudiante */}
                    <Route
                        path="/SeleccionarAsignaturas"
                        element={
                            <ProtectedRoute>
                                <SeleccionarAsignaturas />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/HistorialAsignaturas"
                        element={
                            <ProtectedRoute>
                                <HistorialAsignaturas />
                            </ProtectedRoute>
                        }
                    />

                    {/* Profesor */}
                    <Route
                        path="/AdministrarSecciones"
                        element={
                            <ProtectedRoute>
                                <AdministrarSecciones />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/CalificarEstudiantes" element={
                        <ProtectedRoute>
                            <CalificarEstudiantes />
                        </ProtectedRoute>
                    }>

                    </Route>

                    {/* Administrador */}
                    <Route
                        path="/AdministrarAsignaturas"
                        element={
                            <ProtectedRoute>
                                <AdministrarAsignaturas />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/AdministrarUsuarios"
                        element={
                            <ProtectedRoute>
                                <AdministrarUsuarios />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
