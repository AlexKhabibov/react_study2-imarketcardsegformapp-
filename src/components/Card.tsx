import type { CardProps } from "../types/types";

function Card({ image, name, description, price }: CardProps) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "12px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                maxWidth: "200px",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "340px",
            }}
        >
            <div>
                <img
                    src={image}
                    alt={name}
                    style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "6px",
                    }}
                />
                <h3 style={{ fontSize: "1rem", margin: "8px 0", color: 'black' }}>{name}</h3>
                <p
                    style={{
                        fontSize: "0.85rem",
                        color: "#555",
                        height: "40px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {description}
                </p>
                <p style={{ fontWeight: "bold", margin: "8px 0" }}>{price} €</p>
            </div>
            <div style={{ marginTop: "auto" }}>
                <button style={{ marginRight: "6px" }}>В корзину</button>
                <button style={{ marginTop: '2px' }}>В избранное</button>
            </div>
        </div>
    );
}

export default Card;