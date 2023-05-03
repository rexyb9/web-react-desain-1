import { Container, Row, Col } from "react-bootstrap"

const FooterComp = () => {
    return (
        <div className="footer pb-3 pt-4">
            <Container>
                <Row>
                    <Col>
                        <h3 className="fw-bold text-light">Ngoding.</h3>
                    </Col>
                    <Col className="text-end">
                        <i className="fab fa-youtube text-light fs-1 mx-lg-3 mx-2"></i>
                        <i className="fab fa-twitter text-light fs-1 mx-lg-3 mx-2"></i>
                        <i className="fab fa-discord text-light fs-1 mx-lg-3 mx-2"></i>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center text-white-50">&copy; Copyright by Ngoding 2023, All Right Reversed.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComp