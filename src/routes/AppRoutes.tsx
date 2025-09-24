import { Routes, Route } from "react-router-dom";
import CardList from "../components/CardList";
import Login from "../pages/Login";
import Profile from "../components/Profile";
import FavoritesPage from "../pages/FavoritesPage";
import Cart from "../pages/Cart";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}

export default AppRoutes;