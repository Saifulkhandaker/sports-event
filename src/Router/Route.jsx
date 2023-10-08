import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About Us/AboutUs";
import ErrorPage from "../Pages/ErrorPage";
import SingleEvent from "../Components/SingleEvent";
import Contact from "../Pages/Contact/Contact";
import News from "../Pages/News/News";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "../providers/PrivateRoute";


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
                element:
                <PrivateRoute>
                    <Contact></Contact>
                </PrivateRoute>
            },
            {
                path: "/news",
                element: 
                <PrivateRoute>
                    <News></News>
                </PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/events/:id",
                element: 
                    <PrivateRoute>
                        <SingleEvent></SingleEvent>
                    </PrivateRoute>,
                
                loader: () => fetch('event.json')
            }
        ]
    }
])


export default myCreatedRoute;