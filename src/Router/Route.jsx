import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";
import ErrorPage from "../Pages/ErrorPage";
import SingleEvent from "../Components/SingleEvent";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/News";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: "/about",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact",
                element:<Contact></Contact>
            },
            {
                path: "/news",
                element: <News></News>
            },
            {
                path: "/events/:id",
                element: <SingleEvent></SingleEvent>,
                loader: () => fetch('event.json')
            }
        ]
    }
])


export default myCreatedRoute;