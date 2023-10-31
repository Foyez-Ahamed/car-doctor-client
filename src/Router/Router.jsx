import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import ServicesDetails from "../HomeComponents/Services/ServicesDetails";
import Checkout from "../HomeComponents/Services/Checkout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const MyCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path:'/about',
                element:<About></About>
            },

            {
                path:'/services',
                element:<Services></Services>
            },

            {
                path:'/servicesDetails',
                element: <ServicesDetails></ServicesDetails>
            },

            {
                path:'/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://y-seven-plum.vercel.app/services/${params.id}`)
            },

            {
                path:'/myOrders',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },

            {
                path:'/contact',
                element:<Contact></Contact>
            },

            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },

            {
                path:'/signIn',
                element:<SignIn></SignIn>
            }
        ]
    }
])

export default MyCreatedRouter;