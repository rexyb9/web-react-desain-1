import { Container, Row, Col } from "react-bootstrap"

const HeroComp = () => {
    return (
        <div className="hero min-vh-100 w-100">
            <Container>
                <Row>
                    <Col className="text-light text-center">
                        <h1>Mari Bersantai Sejenak</h1>
                        <p className="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, rem.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroComp