import { products } from "../data/products";
import Card from "./Card";

function CardList() {
    return (
        <div style={{ display: "flex", gap: "20px" }}>
            {products.map(products => (
                <Card
                    key={products.id}
                    image={products.img}
                    name={products.name}
                    description={products.description}
                    price={products.price}
                />
            ))}
        </div>
    );
}

export default CardList;