import { useState, useEffect } from "react"
import { getProducts } from "../mocks/AsyncMoks"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

function ItemListContainer({greeting, subtitle}) {
    const [data, setData] = useState([])

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

            {data.length === 0 ? (
                <p>Cargando productos...</p>
            ) : (
                <ItemList items={data} />
            )}
        </section>
    )
}

export default ItemListContainer
