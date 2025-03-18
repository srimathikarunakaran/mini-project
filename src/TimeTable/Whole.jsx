import { Container } from "react-bootstrap";
import Address from "./Address/Location";
import Copy from "./CopyRight/Copy";
import Navbar from "./Navbar/Navbar";
import Slider from "./Slider/Slider";
import Details from "./StudentsDetails/Form";
import TimeTable from "./TimeTable/Timetable";
import './Whole.css';



function App()
{
    return(
        <>
   <Container fluid className="whole-container">


   <Navbar />
        

        <Address />

        <Slider />


        <TimeTable />
        
        <Details />



        <Copy />


    </Container>     


     
        
        </>
    )
}

export default App;