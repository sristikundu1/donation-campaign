import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/Donation",
                element: <Donation></Donation>
            },

            {
                path: "/Statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donations/:ID",
                element:<DonationDetails></DonationDetails>,
                loader: () => fetch('/donation.json')
            }

        ]
    }
])

export default Route;