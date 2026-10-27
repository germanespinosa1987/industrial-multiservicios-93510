import { useState } from "react"
import "./ItemCount.css"

function ItemCount() {
    const [cantidad, setCantidad] = useState(0)

    const handleSumar = () => setCantidad(prev => prev + 1)

    const handleRestar = () => {
        setCantidad(prev => (prev > 0 ? prev - 1 : 0))
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