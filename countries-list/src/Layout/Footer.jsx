import footerdata from "../Api/footerdata.json";
import { MdPlace } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

import { CiHeart } from "react-icons/ci";

export const Footer = () =>{

    const iconsreact = {
        MdPlace:<MdPlace style={{height:"40px" , width:"25px"}}/>,
        IoCallSharp:<IoCall style={{height:"40px" , width:"25px"}}/>,
        TbMailPlus:<TbMailPlus style={{height:"40px" , width:"25px"}}/>
    }
    return(
        <div className="bg-sky-200 pt-8">

        <div className="footerdiv grid grid-cols-3 justify-items-center content-center pt-4" >
            {footerdata.map((currelement, index)=>{
                return(
                    
                    <div className="flex gap-x-4" key={index}>
                        <div style={{}} >
                            {iconsreact[currelement.icon ] }
                        </div>

                        <div >
                            <h1><b>{currelement.title}</b></h1>
                            <p>{currelement.details}</p>
                        </div>  

                    </div>   
                )
            })}

            
        </div>
        <br></br>
        <hr  style={{ width: "86%", margin: "0 auto", borderColor: "gray" }}/>

        <div className="flex justify-center items-center pt-4 pb-4 gap-4">
            <h1>Copyright @ SIBTAIN RAZA </h1>
            <p><CiHeart /></p>
            
        </div>

        </div>
    )
}