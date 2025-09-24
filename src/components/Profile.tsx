import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleDelete = () => {
        if (!user) return;

        localStorage.removeItem("currentUser");
        localStorage.removeItem(user.name); // у нас email хранится как ключ

        logout();
        alert("Пользователь удалён!");
        navigate("/login");
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Профиль</h2>
            <p><b>ID:</b> {user.id}</p>
            <p><b>Имя:</b> {user.name}</p>
            <p><b>Товаров в избранном:</b> {user.favorites.length}</p>
            <p><b>Товаров в корзине:</b> {user.cart.length}</p>

            <div style={{ marginTop: 20, display: "flex", gap: 10, justifyContent: 'center' }}>
                <button onClick={logout}>Выйти</button>
                <button onClick={handleDelete} style={{ color: "red" }}>
                    Удалить пользователя
                </button>
            </div>
        </div>
    );
}

export default Profile;