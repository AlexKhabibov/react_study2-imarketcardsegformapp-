import useAuth from "../hooks/useAuth";
import Card from "./Card";
import type { IProduct } from "../types/types";
import { useEffect, useState } from "react";

function FavoritesList() {
    const { user } = useAuth();
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("/products.json");
            const data = (await res.json()) as IProduct[];
            setProducts(data);
        }
        load();
    }, []);

    if (!user) {
        return <p style={{ padding: 20 }}>Авторизуйтесь, чтобы просматривать избранное</p>;
    }

    // фильтруем товары по избранным id
    const favoriteProducts = products.filter(p => user.favorites.includes(p.id));

    return (
        <div style={{ padding: 20 }}>
            <h2>Избранное</h2>

            {favoriteProducts.length === 0 ? (
                <p>У вас пока нет избранных товаров.</p>
            ) : (
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                    {favoriteProducts.map(product => (
                        <Card key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesList;