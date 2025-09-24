import useAuth from "../hooks/useAuth";
import type { IProduct } from "../types/types";


function Card({ id, img, name, description, price }: IProduct) {
    const { user, toggleFavorite, toggleCart } = useAuth();

    const isFavorite = user?.favorites.includes(id);
    const inCart = user?.cart.includes(id);

    return (
        <div className="card" style={{ width: 220, padding: 10, border: "1px solid #ccc", borderRadius: 8 }}>
            <img src={img} alt={name} style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 4 }} />
            <h3>{name}</h3>
            <p style={{ minHeight: 40 }}>{description}</p>
            <p>{price} ₽</p>

            {user ? (
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                    <button onClick={() => toggleFavorite(id)}>
                        {isFavorite ? "❤️" : "🤍"}
                    </button>
                    <button onClick={() => toggleCart(id)}>
                        {inCart ? "Удалить из корзины" : "🛒"}
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