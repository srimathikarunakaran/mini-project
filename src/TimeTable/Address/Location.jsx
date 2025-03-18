import { Col, Container, Row } from "react-bootstrap";
import './Location.css'

export default function Address() {
  return(
    <>
      <Container fluid className="address-container">
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6} className="col-1">
            <h3>+91 9312456078</h3>
          </Col>
          <Col xs={12} md={6} className="col-2">
            #Ponducherri
          </Col>
        </Row>
      </Container>
    </>
  )
}