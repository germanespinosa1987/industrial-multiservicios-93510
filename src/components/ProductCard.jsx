import { useState } from "react"
import "./ProductCard.css"
import ItemCount from "./ItemCount"

function ProductCard({ nombre, descripcion, precio, categoria, imagen }) {
    const [esFavorito, setEsFavorito] = useState(false)

    const toggleFavorite = () => setEsFavorito(prev => !prev)

    return (
        <article className="product-card">
            <div className="product-image">
                <img src={imagen} alt={nombre} />
                <button
                    className={`favorite-btn ${esFavorito ? "active" : ""}`}
                    onClick={toggleFavorite}
                    aria-label="Marcar como favorito"
                >
                    {esFavorito ? "❤️" : "🤍"}
                </button>
            </div>

            <div className="product-info">
                <span className="product-category">{categoria}</span>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <span className="product-price">{precio}</span>
                <ItemCount />
            </div>
        </article>
    )
}

export default ProductCard