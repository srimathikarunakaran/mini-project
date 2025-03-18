import { BrowserRouter, Route, Routes } from "react-router-dom";
import Exam from "./Link";
import Tenth from "./10th";
import Twelve from "./12th";
import Text from "./Text";
import './TimeTable.css';




export default function TimeTable()
{
    return(
        <>
       <div className="timetable">
        <BrowserRouter>
          <Routes>

            <Route element={<Exam/>}>


             <Route path="/" element={<Text />} />      
             <Route path="/Tenth" element={<Tenth />} />
             <Route path="/Twelve" element={<Twelve/>} />


            </Route>
          </Routes>
        </BrowserRouter> 
        </div>
        
        
        </>
    )
}