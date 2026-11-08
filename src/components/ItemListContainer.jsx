import { useState, useEffect } from "react"
import { getProducts } from "../mocks/AsyncMoks"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

function ItemListContainer({ greeting, subtitle }) {
    const [items, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getProducts()
                setData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [])

    return (
        <section className="item-list-container">
            <h1 className="item-list-title">{greeting}</h1>
            <h2 className="item-list-subtitle">{subtitle}</h2>

            {loading && <h2>Cargando productos...</h2>}
            {error && <h2>{error}</h2>}
            {!loading && !error && <ItemList items={items} />}
        </section>
    )
}

export default ItemListContainer
