import { createBrowserRouter , RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import {Layoutpage} from "./Layout/Layoutpage"
import { Errorpage } from "./pages/Errorpage";
import Country from "./pages/Country";
import { Countrydetails } from "./Layout/Countrydetails";

export const App = () =>{
  const router = createBrowserRouter([
    {path: "/", element:<Layoutpage/>,errorElement:<Errorpage/>,
    children:[
      {path:"/" , element:<Home/>},
      {path:"/about" , element:<About/>},
      {path:"/contact" , element:<Contact/>},
      {path:"/Country", element:<Country/>},
      {path:"/Country/:id", element:<Countrydetails/>}

    ]}
  ]);

  return <RouterProvider router = {router}/>
};
