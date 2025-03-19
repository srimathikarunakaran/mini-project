import { Col, Container, Row } from "react-bootstrap";
import './Location.css'

export default function Address() {
  return(
    <>
      <Container fluid className="address-container">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="col-1">
            <h5>Phone: 0413-2654439</h5>
            <h6>Email: ddehelpdesk@pondiuni.ac.in</h6>
          </Col>
          <Col xs={12} md={6} className="col-2">
         <h6> Puducherry-605 014</h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}