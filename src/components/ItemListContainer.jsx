import { useState, useEffect } from "react"
import { getProducts } from "../mocks/AsyncMoks"
import ItemList from "./ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
import ItemSkeleton from "./ItemSkeleton"

function ItemListContainer({ greeting, subtitle }) {
    const [items, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const { categoryId } = useParams()
    const skeletonCounts = {Perifericos: 2, Electricidad: 1, Equipos: 2}
    const skeletonCount = skeletonCounts[categoryId] ?? 5

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)
            setError(null)
            try {
                const data = await getProducts()
                const filtered = categoryId
                    ? data.filter((p) => p.category === categoryId)
                    : data
                setData(filtered)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProducts()
    }, [categoryId])

    return (
        <section className="item-list-container">
            <h1 className="item-list-title">{greeting} {categoryId}</h1>
            <h2 className="item-list-subtitle">{subtitle}</h2>

{loading && (
    <div className="item-list">
        {Array.from({ length: skeletonCount }).map((_, i) => (
            <ItemSkeleton key={i} />
        ))}
    </div>
)}
{error && <h2>{error}</h2>}
{!loading && !error && items.length === 0 && (
    <p className="item-list-empty">
        {categoryId
            ? `No hay productos en la categoría "${categoryId}".`
            : "No hay productos disponibles."}
    </p>
)}
{!loading && !error && items.length > 0 && <ItemList items={items} />}
        </section>
    )
}

export default ItemListContainer
