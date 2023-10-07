import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";
import Services from "../Pages/Services/Services";
import ErrorPage from "../Pages/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/services",
                element: <Services></Services>
            }
        ]
    }
])


export default myCreatedRoute;