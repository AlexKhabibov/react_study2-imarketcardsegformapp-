import { Link } from "react-router-dom";

function Header() {

    return (
        <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc", justifyContent: 'center' }}>
            <Link to="/">Главная</Link>
            <Link to="/cart">Корзина</Link>
            <Link to="/favorites">Избранное</Link>
            <Link to="/login">Авторизация</Link>
        </nav>
    );
}

export default Header;