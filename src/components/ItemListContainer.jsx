import "./ItemListContainer.css"
import ProductCard from "./ProductCard"

function ItemListContainer() {
    return (
        <section className="item-list-container">
            <h2 className="item-list-title">Nuestros productos</h2>

            <div className="item-list">
                <ProductCard
                    nombre="Camiseta React"
                    descripcion="Camiseta oficial de React con diseño moderno y cómodo."
                    precio="$29.99"
                    categoria="Ropa"
                    imagen="/images/camiseta-react.svg" />

                <ProductCard 
                    nombre="Mug React"
                    descripcion="Mug oficial de React con diseño moderno y cómodo."
                    precio="$14.99"
                    categoria="Accesorios"
                    imagen="/images/mug-react.svg" />

                <ProductCard 
                    nombre="Sudadera React"
                    descripcion="Sudadera oficial de React con diseño moderno y cómodo."
                    precio="$49.99"
                    categoria="Ropa"
                    imagen="/images/sudadera-react.svg" />

                <ProductCard 
                    nombre="Gorra React"
                    descripcion="Gorra oficial de React con diseño moderno y cómodo."
                    precio="$19.99"
                    categoria="Accesorios"
                    imagen="/images/gorra-react.svg" />

                <ProductCard 
                    nombre="Taza React"
                    descripcion="Taza oficial de React con diseño moderno y cómodo."
                    precio="$9.99"
                    categoria="Accesorios"
                    imagen="/images/taza-react.svg" />
            </div>
        </section>
    )
}

export default ItemListContainer