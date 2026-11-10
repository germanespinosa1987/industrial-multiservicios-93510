import { useEffect, useState } from "react"
import { getProductById } from "../services/getProductById"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProductById(1)
            .then((p) => setProduct(p))
            .catch((e) => setError(e.message))
    }, [])

    if (error) return <p>{error}</p>
    if (!product) return <p>Cargando...</p>

    return <ItemDetail product={product} />
}

export default ItemDetailContainer