import { products } from "../mocks/AsyncMoks"

export function getProductById(productId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === productId)
            product ? resolve(product) : reject(new Error("Producto no encontrado"))
        }, 2000)
    })
}