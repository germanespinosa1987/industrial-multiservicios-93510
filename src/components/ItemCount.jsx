import { useState,useEffect } from "react"
import "./ItemCount.css"

function ItemCount() {
    const [cantidad, setCantidad] = useState(0)

    const handleSumar = () => {setCantidad(cantidad => cantidad + 1)}

    const handleRestar = () => {
        setCantidad(cantidad => (cantidad > 0 ? cantidad - 1 : 0))
    }


    return (
        <div className="item-count">
            <button onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar}>+</button>
        </div>
    )
}

export default ItemCount