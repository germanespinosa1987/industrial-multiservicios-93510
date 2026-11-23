import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <BsNavbar expand="lg" data-bs-theme="dark" sticky="top" style={{backgroundColor: "#000", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.55)"}}>
            <Container>
                        <BsNavbar.Brand as={Link} to="/">
            <img
                src="/images/logo.webp"
                alt="Industrial Multiservicios"
                height="56"
            />
        </BsNavbar.Brand>

                <BsNavbar.Toggle aria-controls="main-navbar" />

                <BsNavbar.Collapse id="main-navbar">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/category/Perifericos">
                            Perifericos
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/Electricidad">
                            Electricidad
                        </Nav.Link>
                        <Nav.Link as={Link} to="/category/Equipos">
                            Equipos
                        </Nav.Link>
                    </Nav>

                    <CartWidget />
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    )
}

export default Navbar
