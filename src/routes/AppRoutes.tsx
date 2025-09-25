import { Routes, Route } from "react-router-dom";
import CardList from "../components/CardList";
import Login from "../pages/Login";
import Profile from "../components/Profile";
import FavoritesPage from "../pages/FavoritesPage";
import Cart from "../pages/Cart";
import ProductPage from "../pages/ProductPage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
    );
}

export default AppRoutes;