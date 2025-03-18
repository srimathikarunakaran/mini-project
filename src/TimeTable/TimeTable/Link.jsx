import { Outlet,Link } from "react-router-dom"

export default function Exam()
{
    return(
        <>
        <Link to={"/Tenth"}><h3 className="text-black">10th Standard</h3></Link>
        <Link to={"/Twelve"}><h3 className="text-black">12th Standard</h3></Link>

        <Outlet />
        
        </>

    )
}