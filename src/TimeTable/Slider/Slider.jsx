import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row,Carousel } from "react-bootstrap";
import slider2 from './slider2.jpg';



export default function Ban()
{
    return(
        <>
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Col lg={8}>

                <Carousel>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100"
      src={slider2}
      alt="First slide"
    />
    <Carousel.Caption>
      <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p className="d-none d-sm-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item >
</Carousel>
                </Col>
            </Row>

            
            
        </Container>
        </>
    )
}