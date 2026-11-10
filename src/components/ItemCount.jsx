import { useState, } from "react"
import "./ItemCount.css"

function ItemCount({ stock }) {
    const [cantidad, setCantidad] = useState(0)

    const handleSumar = () => {
        setCantidad(prev => (prev < stock ? prev + 1 : prev))
    }

    const handleRestar = () => {
        setCantidad(prev => (prev > 0 ? prev - 1 : 0))
    }

    return (
        <div className="item-count">
            <button onClick={handleRestar} disabled={cantidad === 0}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar} disabled={cantidad === stock}>+</button>
        </div>
    )
}


export default ItemCount