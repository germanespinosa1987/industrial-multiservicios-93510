import { useState, useEffect } from "react"
import { getProducts } from "../mocks/AsyncMoks"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

function ItemListContainer({greeting, subtitle}) {
    const [items, setData] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts()
            setData(data)
        }
        fetchProducts()
    }, [])


    return (
        <section className="item-list-container">
            <h1 className="item-list-title">{greeting}</h1>
            <h2 className="item-list-subtitle">{subtitle}</h2>

            {items.length === 0 ? (
                <h2>Cargando productos...</h2>
            ) : (
                <ItemList items={items} />
            )}
        </section>
    )
}

export default ItemListContainer
