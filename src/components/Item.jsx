import { useState } from "react"
import "./Item.css"
import ItemCount from "./ItemCount"

function Item({ product }) {
    const { name, description, price, category, img, stock } = product
    const [esFavorito, setEsFavorito] = useState(false)

    const toggleFavorite = () => setEsFavorito(prev => !prev)

    return (
        <article className="product-card">
            <div className="product-image">
                <img src={img} alt={name} />
                <button
                    className={`favorite-btn ${esFavorito ? "active" : ""}`}
                    onClick={toggleFavorite}
                    aria-label="Marcar como favorito"
                >
                    {esFavorito ? "❤️" : "🤍"}
                </button>
            </div>

            <div className="product-info">
                <span className="product-category">{category}</span>
                <h3>{name}</h3>
                <p>{description}</p>
                <span className="product-price">${price}</span>
                <small className="text-muted">Stock: {stock}</small>
                <ItemCount stock={stock} />
            </div>
        </article>
    )
}

export default Item