// src/components/CartList.tsx
import { useEffect, useState } from "react";
import Card from "./Card";
import type { IProduct } from "../types/types";
import useAuth from "../hooks/useAuth";

function CartList() {
    const { user } = useAuth();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch("/products.json");
                if (!res.ok) {
                    throw new Error(`Ошибка загрузки (${res.status}): ${res.statusText || "Unknown error"}`);
                }

                const data = (await res.json()) as IProduct[];

                if (!cancelled) {
                    // Фильтруем только те товары, которые есть в корзине пользователя
                    const cartProducts = user
                        ? data.filter(product => user.cart.includes(product.id))
                        : [];
                    setProducts(cartProducts);
                }
            } catch (err) {
                if (!cancelled) {
                    if (err instanceof Error) setError(err.message);
                    else setError("Произошла неизвестная ошибка");
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, [user]);

    if (loading) return <div style={{ padding: 20 }}>Загрузка корзины...</div>;
    if (error) return <div style={{ padding: 20, color: "red" }}>Ошибка: {error}</div>;
    if (!products.length) return <div style={{ padding: 20 }}>Корзина пуста</div>;

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, padding: 20 }}>
            {products.map(product => (
                <Card key={product.id} {...product} />
            ))}
        </div>
    );
}

export default CartList;