import { Outlet,Link } from "react-router-dom"

export default function Exam()
{
    return(
        <>
        <Link to={"/Tenth"}>
        <button className="btn btn-light  m-3 ">
        <h3 className="button">10th Standard</h3>
            </button></Link>
        <Link to={"/Twelve"}>
        
       <button className="btn btn-light m-3">
       <h3 className="button">12th Standard</h3>
       </button>
        </Link>

        <Outlet />
        
        </>

    )
}