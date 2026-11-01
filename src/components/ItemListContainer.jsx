import "./ItemListContainer.css"
import ProductCard from "./ProductCard"

function ItemListContainer() {
    return (
        <section className="item-list-container">
            <h2 className="item-list-title">Nuestros productos</h2>

            <div className="item-list">
                <ProductCard
                    nombre="Bomba industrial"
                    descripcion="Bomba industrial de alta calidad para uso en entornos industriales."
                    precio="$199.99"
                    categoria="Equipos"
                    imagen="images/bomba_industrial.webp" />

                <ProductCard 
                    nombre="Motor eléctrico"
                    descripcion="Motor eléctrico de alta calidad para uso en entornos industriales."
                    precio="$299.99"
                    categoria="Equipos"
                    imagen="images/motor_electrico.webp" />

                <ProductCard 
                    nombre="Sensores industriales"
                    descripcion="Sensores industriales de alta calidad para uso en entornos industriales."
                    precio="$99.99"
                    categoria="Equipos"
                    imagen="images/sensores_industriales.webp" />

                <ProductCard 
                    nombre="Tablero electrico"
                    descripcion="Tablero eléctrico de alta calidad para uso en entornos industriales."
                    precio="$199.99"
                    categoria="Equipos"
                    imagen="images/tablero_electrico.webp" />   

            </div>
        </section>
    )
}

export default ItemListContainer