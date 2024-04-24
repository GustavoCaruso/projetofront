import { Routes, Route,Navigate } from "react-router-dom";
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import CadDependente from "./Pages/Cadastros/CadDependente";
import CadCargo from "./Pages/Cadastros/CadCargo";

function PrivateRoute( {children} ){
    const authenticated = localStorage.getItem("usuario")
    return authenticated ? children : <Navigate to="/" />
    } 

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<PrivateRoute> <Home /></PrivateRoute>} />
            <Route path="/caddependente" element={<PrivateRoute> <CadDependente /> </PrivateRoute>} />
            <Route path="/cadcargo" element={<PrivateRoute> <CadCargo /> </PrivateRoute>}/>
        </Routes>
    );  
}

export default MainRoutes;