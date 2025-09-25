import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 20px",
                background: "#282c34",
                color: "white",
            }}
        >
            <nav style={{ display: "flex", gap: "15px" }}>
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                    Главная
                </Link>
                <Link to="/favorites" style={{ color: "white", textDecoration: "none" }}>
                    Избранное
                </Link>
                <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
                    Корзина
                </Link>
            </nav>

            <div style={{ display: "flex", gap: "15px", alignItems: "center", marginLeft: '20px' }}>
                {user ? (
                    <>
                        <span
                            style={{ cursor: "pointer", textDecoration: "underline" }}
                            onClick={() => navigate("/profile")}
                        >
                            {user.name}
                        </span>

                        <Link
                            to="/favorites"
                            style={{
                                color: "white",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                        >
                            ❤️ {user.favorites.length}
                        </Link>

                        <Link
                            to="/cart"
                            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}
                        >
                            👜 {user.cart.length}
                        </Link>

                        <button
                            onClick={logout}
                            style={{
                                marginLeft: "15px",
                                padding: "5px 10px",
                                cursor: "pointer",
                                borderRadius: "4px",
                                border: "none",
                                color: "white",
                                textDecoration: "none"
                            }}
                        >
                            Выйти
                        </button>
                    </>
                ) : (
                    <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                        Войти
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;