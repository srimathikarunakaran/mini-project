import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <div className="contact">
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <h2 className=" mb-4" style={{color:"#030349"}}>
              Get in Touch
            </h2>
            <p>
              If you have any questions or need help with the 12th and 10th
              timetable, please don't hesitate to contact us.
            </p>
            <Form className="contactform">
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2 className=" mb-4" style={{color:"#030349", marginTop:"150px" }}>
              Contact Information
            </h2>
            <div className="" style={{marginTop:"70px", lineHeight:"50px"}}>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong> [info@timetablewebsite.com](mailto:info@timetablewebsite.com)
            </p>
            <p>
              <strong>Address:</strong> 123, Timetable Street, Chennai, Tamil Nadu 600001
            </p>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
}
