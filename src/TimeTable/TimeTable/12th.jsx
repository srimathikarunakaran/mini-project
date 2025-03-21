import { useState } from "react";




export default function Twelve()
{

    let[twelve, settwelve]=useState([
            {
                Subject:"Tamil",
                Date:"March 28, 2025",
                Duaration:"3 Hr",
    
    
            },
            {
                Subject:"English",
                Date:"April 2, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Maths",
                Date:"April 4, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Physics",
                Date:"April 7, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Chemistry",
                Date:"April 11, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Biology",
                Date:"April 14, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Computer Application",
                Date:"April 16, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Commerce",
                Date:"April 18, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Economics",
                Date:"April 20, 2025",
                Duaration:"3 Hr"
    
    
            },
            
        ]);
    return(
        <>
        <section id="12th">
        <div className="time">
                   <table  className="table p-5 " style={{backgroundColor: "rgb(8, 8, 87)"}}>
                    <tr className="border border-white">
                        <th scope="col" className="py-4 text-info">S.No</th>
                        <th scope="col"className="py-4 text-info">Date</th>
                        <th scope="col"className="py-4 text-info">Subject</th>
                        <th scope="col"className="py-4 text-info">Duaration</th>
                    </tr>

                    {
                        twelve.map((d,i) =>
                            <tr className="border  text-white ">
                                <td className="p-3">{i+1}</td>
                                <td className="p-3">{d.Date}</td>
                                <td className="p-3">{d.Subject}</td>
                                <td className="p-3">{d.Duaration}</td>

                            </tr>
                        )
                    }
                   </table>
                </div>



                </section>
        
        
        </>
    )
}