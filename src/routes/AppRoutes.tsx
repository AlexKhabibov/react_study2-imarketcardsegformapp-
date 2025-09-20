import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favorites from "../pages/Favorites";
import Authorisation from "../pages/Authorisation";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Authorisation />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default AppRoutes;