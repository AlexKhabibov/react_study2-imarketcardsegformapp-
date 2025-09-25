import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IProduct } from "../types/types";
import CardInfo from "../components/CardInfo";

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const res = await fetch("/products.json");
                const data: IProduct[] = await res.json();

                if (!cancelled) {
                    const found = data.find((p) => p.id === Number(id));
                    setProduct(found || null);
                }
            } catch (err) {
                console.error("Ошибка загрузки товара:", err);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();

        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loading) return <h2 style={{ padding: "20px" }}>Загрузка...</h2>;
    if (!product) return <h2 style={{ padding: "20px" }}>Товар не найден</h2>;

    return <CardInfo product={product} />;
};

export default ProductPage;