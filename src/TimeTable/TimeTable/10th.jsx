import { useState } from "react";




export default function Tenth()
{

    let[ten, setten]=useState([
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
                Subject:"Science",
                Date:"April 7, 2025",
                Duaration:"3 Hr"
    
    
            },
            {
                Subject:"Soial Science",
                Date:"April 11, 2025",
                Duaration:"3 Hr"
    
    
            },
            
        ]);
    return(
        <>
        <section id="10th">
                <div>
                   <table className="table  text-black p-5" style={{backgroundColor: "rgba(34, 10, 247, 0.589)"}}>
                    <tr className="border border-dark">
                        <th scope="col" className="p-3">S.No</th>
                        <th scope="col"className="p-3">Date</th>
                        <th scope="col"className="p-3">Subject</th>
                        <th scope="col"className="p-3">Duaration</th>
                    </tr>

                    {
                        ten.map((d,i) =>
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