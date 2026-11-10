import ItemCount from "./ItemCount"
import "./ItemDetail.css"

function ItemDetail({ product }) {
    const { name, img, price, category, description, stock } = product

    return (
        <div className="item-detail">
            <img src={img} alt={name} />
            <div className="item-detail-info">
                <h2>{name}</h2>
                <p>Categoría: {category}</p>
                <p>{description}</p>
                <p className="item-detail-price">Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
                <ItemCount stock={stock} />
            </div>
        </div>
    )
}

export default ItemDetail