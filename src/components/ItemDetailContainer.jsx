import { useEffect, useState } from "react"
import { getProductById } from "../services/getProductById"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"

function ItemDetailContainer() {

    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        getProductById(id)
            .then((p) => setProduct(p))
            .catch((e) => setError(e.message))
    }, [id])

    if (error) return <p>{error}</p>
    if (!product) return <p>Cargando...</p>

    return <ItemDetail product={product} />
}

export default ItemDetailContainer