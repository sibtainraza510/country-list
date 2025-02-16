import { useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom";
export const Errorpage = () =>{
    const error = useRouteError();

    return(
        <div>
            <h1>404 ERROR</h1>
            {error && <p>{error.data}</p>}
            <NavLink path="/"><button style={{cursor:"pointer"}}>GO BACK TO HOME PAGE </button></NavLink>
        </div>
    )
}