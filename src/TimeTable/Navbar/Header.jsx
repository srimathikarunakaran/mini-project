import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";


export default function Header() {
  return (
    <>
       <Navbar expand="lg" className="nav-con">
        <Container fluid className="navbar">
          <Navbar.Brand href="#home" className="logo" style={{color:"white"}}>
            EDUCATION
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto px-4 " style={{ gap: "20px" }}>
              <Nav.Link href={"/"} className="text-white">Home</Nav.Link>
              <Nav.Link href={"/about"} className="text-white">About</Nav.Link>
              <Nav.Link href={"/contact"} className="text-white">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          
        </Container>

      </Navbar>

      <Outlet/>

    </>
  );
}
