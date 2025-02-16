import { useState } from "react"
export function Contact(){
    const[user,setuser] = useState({yourfullname: "", youremail: "", yourmessage: ""});

    const handleinputchange = (e)=>{
        const {name, value} = e.target;
        setuser((prev)=>({
            ...prev, [name]: value
        }));
    }
    const handleformsubmit = (e)=>{
            e.preventDefault();
            alert("Message sent")
            console.log(user);
            setuser({
                yourfullname: "", youremail: "", yourmessage: ""
            })
    }

    return(
        <div className="pt-12 text-center bg-pink-200 pb-12">
            <div className="pb-6">
                <h1 style={{fontSize:"22px"}}><b>CONTACT US!</b></h1>
            </div>

        <form onSubmit={handleformsubmit} className="flex flex-col content-center justify-items-center gap-y-10 ">
            <label htmlFor="yourfullname">
                <input style={{width:"29%", height:"40px"}} className="input border-2 rounded-sm border-solid " type="text" name="yourfullname" placeholder="Enter your name" required value={user.yourfullname} onChange={handleinputchange} />
            </label>

            <label htmlFor="youremail">
                <input style={{width:"29%", height:"40px"}} className="input border-2 rounded-sm border-solid " type="text" name="youremail" placeholder="Enter your email" required value={user.youremail} onChange={handleinputchange} />
            </label>

            <label htmlFor="yourmessage">
                <textarea style={{width:"29%", height:"120px"}} className="input border-2 rounded-sm border-solid " type="text" name="yourmessage" placeholder="Message" required value={user.yourmessage} onChange={handleinputchange} />
            </label>

            <div>
            <button className="border-black border-2 rounded-sm p-1" onClick={handleformsubmit} type="submit">Click to Submit </button>
            </div>

        </form>
        </div>
    )
}