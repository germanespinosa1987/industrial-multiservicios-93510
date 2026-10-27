import "./ProductCard.css"

function ProductCard({ nombre, descripcion, precio, categoria, imagen }) {
    return (
        <article className="product-card">
            <div className="product-image">
                <img src={imagen} alt={nombre} />
            </div>

            <div className="product-info">
                <span className="product-category">{categoria}</span>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <span className="product-price">{precio}</span>
            </div>
        </article>
    )
}

export default ProductCard