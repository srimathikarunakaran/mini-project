import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "./Link";
import Tenth from "./10th";
import Twelve from "./12th";
import Text from "./Text";
import './TimeTable.css';
import Container from "react-bootstrap/esm/Container";




export default function TimeTable()
{
    return(
        <>
        <Container fluid className="timetable" sm={12} md={6}>
        <BrowserRouter>
          <Routes>

            <Route element={<Exam/>}>


             <Route path="/" element={<Text />} />      
             <Route path="/Tenth" element={<Tenth />} />
             <Route path="/Twelve" element={<Twelve/>} />


            </Route>
          </Routes>
        </BrowserRouter> 

        </Container>
        
        
        
        </>
    )
}