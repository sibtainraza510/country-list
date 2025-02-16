import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react";

export const Header = () =>{
    const [showMenu, setShowMenu] = useState(false);
    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
      };

      const handleMenuItemClick = () => {
        setShowMenu(false);
      };

    return(
<>
        <div style={{position:"sticky", top:"0px"}} className="headerdiv bg-sky-100 h-22 grid grid-cols-2 items-center justify-items-center rounded-sm shadow-sm 80%" >
        <NavLink to = "/"> <h1 style={{fontSize:"20px"}}>World Atlas</h1> </NavLink>
        <nav className={`menu-mobile ${showMenu ? "active" : ""}`}>
        <ul className="flex justify-between gap-x-5 ">
            <NavLink to="/"><li onClick={handleMenuItemClick}>Home</li></NavLink>
            <NavLink to="/about"><li onClick={handleMenuItemClick}>About</li></NavLink>
            <NavLink to="/country"><li onClick={handleMenuItemClick}>Country</li></NavLink>
            <NavLink to="/contact"><li onClick={handleMenuItemClick}>Contact</li></NavLink>
        </ul>
        </nav>

        <div  onClick={handleButtonToggle} className="ham-menu">
            <GiHamburgerMenu/>
        </div>

        </div>

        

        

</>


        


       
    )
}