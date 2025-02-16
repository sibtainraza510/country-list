import { Outlet } from "react-router-dom";
import "./Layout.css"
import { Header } from "./Header";
import { Footer } from "./Footer";


export function Layoutpage(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}