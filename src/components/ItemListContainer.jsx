import { useState, useEffect } from "react"
import { getProducts } from "../mocks/AsyncMoks"
import ItemList from "./ItemList"
import "./ItemListContainer.css"

function ItemListContainer() {
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
            <h2 className="item-list-title">Nuestros productos</h2>

            {data.length === 0 ? (
                <p>Cargando productos...</p>
            ) : (
                <ItemList items={data} />
            )}
        </section>
    )
}

export default ItemListContainer
