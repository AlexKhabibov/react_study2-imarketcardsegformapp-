import useAuth from "../hooks/useAuth";
import type { CardInfoProps } from "../types/types";

const CardInfo = ({ product }: CardInfoProps) => {
    const { user, toggleFavorite, toggleCart } = useAuth();

    const isFavorite = user?.favorites.includes(product.id);
    const inCart = user?.cart.includes(product.id);

    return (
        <div style={{ padding: "20px" }}>
            <h2>{product.name}</h2>
            <img
                src={product.img}
                alt={product.name}
                style={{ width: "300px", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "10px" }}>{product.description}</p>
            <p style={{ fontWeight: "bold" }}>{product.price} ₽</p>

            {user ? (
                <div style={{ display: "flex", gap: "15px", marginTop: "15px", justifyContent: 'center' }}>
                    <button onClick={() => toggleFavorite(product.id)}>
                        {isFavorite ? "❤️ Удалить" : "🤍 В избранное"}
                    </button>
                    <button onClick={() => toggleCart(product.id)}>
                        {inCart ? "🛒 Удалить" : "👜 В корзину"}
                    </button>
                </div>
            ) : (
                <p style={{ fontSize: "12px", color: "gray" }}>
                    Авторизуйтесь, чтобы добавить в корзину или избранное
                </p>
            )}
        </div>
    );
};

export default CardInfo;