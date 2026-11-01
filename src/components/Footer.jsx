import { Container } from "react-bootstrap"

function Footer() {
    return (
        <footer className="bg-dark text-light py-4 auto">
            <Container className="text-center">
                <p className="mb-1">Industrial Multiservicios</p>
                <small className="text-secondary">
                    © {new Date().getFullYear()} Todos los derechos reservados
                </small>
            </Container>
        </footer>
    )
}

export default Footer