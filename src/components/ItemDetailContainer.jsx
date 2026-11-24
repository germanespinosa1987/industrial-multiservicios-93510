import { useEffect, useState } from "react"
import { getProductById } from "../services/getProductById"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import ItemDetailSkeleton from "./ItemDetailSkeleton";

function ItemDetailContainer() {

    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true);
        getProductById(id)
            .then((p) => setProduct(p))
            .catch((e) => setError(e.message))
            .finally(() => setLoading(false));
    }, [id])

    if (error) return <p>{error}</p>
    if (loading) return <ItemDetailSkeleton />

    return <ItemDetail product={product} />
}

export default ItemDetailContainer