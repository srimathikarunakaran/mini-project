import Data from "./Data.json";
import { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import "./Form.css";

function Details() {
  const [regNo, setRegNo] = useState("");
  const [studentData, setStudentData] = useState(null);

  let Submitdata = (e) => {
    e.preventDefault();
    const studentInfo = Data.find((student) => student.RegNo === regNo);
    if (studentInfo) {
      setStudentData(studentInfo);
    } else {
      alert("Student data not found");
    }
  };

  return (
    <>
      <Container className="studetdetails">
        <Row className="justify-content-center">
          <Col
            className="col-lg-6 col-md-8 col-sm-12"
            style={{ marginBottom: "20px" }}
          >
            <Form className="Form" onSubmit={Submitdata}>
              <Form.Group className="m-4" controlId="formBasicId">
                <Form.Label className="text-white">Reg No</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Reg No"
                  className="text-black"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                />
              </Form.Group>
              <Row>
                <Col md={6} sm={12}>
                  <Form.Group className="m-4" controlId="formBasicName">
                    <Form.Label className="text-white">First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter First Name"
                      className="text-black"
                    />
                  </Form.Group>
                </Col>
                <Col md={6} sm={12}>
                  <Form.Group className="m-4" controlId="formBasicName">
                    <Form.Label className="text-white">Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Last Name"
                      className="text-black"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="m-4" controlId="formBasicDob">
                <Form.Label className="text-white">Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="DOB"
                  className="text-black"
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col
            className=" d-lg-block col-lg-6 col-md-8 col-sm-12"
            style={{ marginBottom: "20px" }}
          >
            <h1 className="text-black">Student Details</h1>
            <br />
            {studentData && (
              <>
                <div className="datas">
                  <p>First Name: {studentData.Firstname}</p>
                  <p>Last Name: {studentData.Lastname}</p>
                  <p>Date of Birth: {studentData.DOB}</p>
                  <p>Registration Number: {studentData.RegNo}</p>
                  <p>Class: {studentData.Class}</p>
                  <p>Address: {studentData.Address}</p>
                  <p>Gender: {studentData.Gender}</p>
                  <p>Email: {studentData.Email}</p>
                </div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;