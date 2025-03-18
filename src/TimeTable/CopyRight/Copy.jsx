import { Container ,Row } from 'react-bootstrap';
import './Copy.css'


function CopyrightContact() {
    return (
      
      <Container fluid className="copyright-contact">
        <Row>

        <div >
        <p>&copy; 2023 Student Details App. All rights reserved.</p>
        <p>
          Contact Us:
          <br />
          Email: [your-email@example.com](mailto:your-email@example.com)
          <br />
          Phone: +1-123-456-7890
        </p>
      </div>
        </Row>
      </Container>
    );
  }
  
  export default CopyrightContact;