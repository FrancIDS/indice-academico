import React from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../AuthContext";

const ProtectedRoute = ({ children }) => {
    //const { isLoggedIn } = useContext(AuthContext);
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }
    return children;
};

/* const PrivateRoute = ({ path, element: Element }) => {
    return isLoggedIn ? (
        <Route path={path} element={<Element />} />
    ) : (
        <Navigate to="/" replace={true} />
    );
}; */

export default ProtectedRoute;
