import { Outlet,Link } from "react-router-dom"

export default function Exam()
{
    return(
        <>
        <Link to={"/Tenth"}>
        <button className="btn btn-dark m-5 ">
        <h3 className="text-primary">10th Standard</h3>
            </button></Link>
        <Link to={"/Twelve"}>
        
       <button className="btn btn-dark m-5">
       <h3 className="text-primary">12th Standard</h3>
       </button>
        </Link>

        <Outlet />
        
        </>

    )
}