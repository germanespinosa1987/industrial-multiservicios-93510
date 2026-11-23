import { useState } from "react"
import "./Item.css"
import { Link } from "react-router-dom"

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
                <Link to={`/item/${product.id}`} className="btn btn-primary">Ver detalles</Link>
            </div>
        </article>
    )
}

export default Item