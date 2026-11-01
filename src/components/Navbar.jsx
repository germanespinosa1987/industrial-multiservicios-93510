import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap"
import CartWidget from "./CartWidget"

function Navbar() {
    return (
        <BsNavbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top" style={{boxShadow: "0 4px 12px rgba(0, 0, 0, 0.55)"}}>
            <Container>
                <BsNavbar.Brand href="#">Industrial Multiservicios</BsNavbar.Brand>

                <BsNavbar.Toggle aria-controls="main-navbar" />

                <BsNavbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Servicios</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                    </Nav>

                    <CartWidget />
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    )
}

export default Navbar
