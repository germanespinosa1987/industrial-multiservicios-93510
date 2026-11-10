import { useState } from "react"
import "./Item.css"

function Item({ product }) {
    const { name, price, category, img } = product
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
                <span className="product-price">${price}</span>
                <button className="detail-btn">Ver detalle</button>
            </div>
        </article>
    )
}

export default Item