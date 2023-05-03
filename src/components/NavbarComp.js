import { useState, useEffect } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

const NavbarComp = () => {

    const [changeColor, setChangeColor] = useState(false)

    const changeBackgroundColor = () => {
        if (window.scrollY > 650) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        changeBackgroundColor()

        window.addEventListener('scroll', changeBackgroundColor())
    })

    return (
        <div className="sticky-top">
            <Navbar expand="lg" variant="dark" className={(changeColor) ? "color-active" : ""}>
                <Container>
                    <Navbar.Brand href="#" className="fw-bold fs-4">Ngoding.</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Link href="#" className="mx-2">Home</Nav.Link>
                            <Nav.Link href="#" className="mx-2">Gallery</Nav.Link>
                            <Nav.Link href="#" className="mx-2">Services</Nav.Link>
                            <Nav.Link href="#" className="mx-2">Faq</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp