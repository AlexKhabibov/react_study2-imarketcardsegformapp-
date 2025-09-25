import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import type { IProduct } from "../types/types";

function Card({ id, img, name, description, price }: IProduct) {
    const { user, toggleFavorite, toggleCart } = useAuth();
    const navigate = useNavigate();

    const isFavorite = user?.favorites.includes(id);
    const inCart = user?.cart.includes(id);

    const handleRedirect = () => {
        navigate(`/product/${id}`);
    };

    return (
        <div
            className="card"
            style={{ width: 220, padding: 10, border: "1px solid #ccc", borderRadius: 8 }}
        >
            {/* зона клика */}
            <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
                <img
                    src={img}
                    alt={name}
                    style={{ width: "100%", height: 150, objectFit: "contain", borderRadius: 4 }}
                />
                <h3>{name}</h3>
                <p style={{ minHeight: 40 }}>{description}</p>
                <p>{price} ₽</p>
            </div>

            {/* кнопки — не редиректят */}
            {user ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 8,
                        marginTop: 10,
                    }}
                >
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // блокируем переход
                            toggleFavorite(id);
                        }}
                    >
                        {isFavorite ? "❤️ Удалить" : "🤍 В избранное"}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // блокируем переход
                            toggleCart(id);
                        }}
                    >
                        {inCart ? "🛒 Удалить" : "👜 В корзину"}
                    </button>
                </div>
            ) : (
                <p style={{ fontSize: "12px", color: "gray" }}>
                    Авторизуйтесь, чтобы добавить в корзину или в избранное
                </p>
            )}
        </div>
    );
}

export default Card;