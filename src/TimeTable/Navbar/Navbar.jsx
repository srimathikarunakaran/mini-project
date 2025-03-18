import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import './navbar.css';
import Home from "./Home";


export default function Navbar()
{
  return(
    <>
    <BrowserRouter>

    <Routes>
     
     <Route element={<Header/>}>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/about" element={<About/>}/>
        
        <Route  path="/contact" element={<Contact/>}/>


     </Route>

    </Routes>
    
    
    </BrowserRouter>
    

    
    
    </>
  )
}