import { Container, Row, Col } from "react-bootstrap"

import Gallery1 from "../assets/img/gallery/gallery-1.jpg"
import Gallery2 from "../assets/img/gallery/gallery-2.jpg"
import Gallery3 from "../assets/img/gallery/gallery-3.jpg"
import Gallery4 from "../assets/img/gallery/gallery-4.jpg"
import Gallery5 from "../assets/img/gallery/gallery-5.jpg"
import Gallery6 from "../assets/img/gallery/gallery-6.jpg"

const GalleryComp = () => {
    return (
        <div className="gallery min-vh-100">
            <Container>
                <Row>
                    <Col>
                        <img src={Gallery1} className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery2} className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery3} className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery4} className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery5} className="w-100" />
                    </Col>
                    <Col>
                        <img src={Gallery6} className="w-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default GalleryComp