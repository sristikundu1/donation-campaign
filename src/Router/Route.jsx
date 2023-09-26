import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/Donation",
                element:<Donation></Donation>
            },
            
            {
                path: "/Statistics",
                element: <Statistics></Statistics>
            }
            
        ]
    }
])

export default Route;