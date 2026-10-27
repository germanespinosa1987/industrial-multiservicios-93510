import CartWidget from "./CartWidget"
import "./Navbar.css"

function Navbar() {
    return (
        <header className="navbar">
            <h2>Mi tienda</h2>

            <nav>
                <a href="#">Remeras</a>
                <a href="#">Pantalones</a>
                <a href="#">Zapatos</a>
            </nav>

            <CartWidget />
        </header>
    )
}

export default Navbar
