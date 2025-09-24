import { useEffect, useState } from "react";
import Card from "./Card";
import type { IProduct } from "../types/types";

function CardList() {
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
                    setProducts(data);
                }
            } catch (err) {
                if (!cancelled) {
                    if (err instanceof Error) {
                        console.error("Fetch error:", err);
                        setError(err.message);
                    } else {
                        console.error("Неизвестная ошибка:", err);
                        setError("Произошла неизвестная ошибка");
                    }
                }
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) return <div style={{ padding: 20 }}>Загрузка товаров...</div>;
    if (error) return <div style={{ padding: 20, color: "red" }}>Ошибка: {error}</div>;

    return (
        <div style={{ display: "flex", gap: 20, padding: 20 }}>
            {products.map((product) => (
                <Card
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    );
}

export default CardList;