import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Root from "../../Root/Root";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Details from "../../Details/Details";
import PraivateRoute from "../../../PrivateRoute";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/technology.json')
            },
            {
                path: "/cards/:id",
                element: <PraivateRoute><Details></Details></PraivateRoute>,
                loader: () => fetch("/technology.json")
            },
            {
              path : "/login",
              element : <Login></Login>,
            },
            {
              path : "/register",
              element : <Register></Register>,
            },
            
            // {
            //   path : "/about",
            //   element : <AboutUs></AboutUs>
            // },

            // {
            //   path : "services",
            //   element : <Services></Services>,
            //   loader : () => fetch("/services.json")

            // },
            // {
            //   path : "/service/:id",
            //   element : <PraivateRoute2><ServicesDetails></ServicesDetails></PraivateRoute2>,
            //   loader : () => fetch("/service.json")
            // },
            // {
            //   path : "/galary",
            //   element : <Galary></Galary>,
            //   loader : () => fetch("/galaery.json")
            // },
            // {
            //   path : "/galaries/:id",
            //   element : <PraivateRoute3><GalariesDetails></GalariesDetails></PraivateRoute3>,
            //   loader : () => fetch("/galaries.json"),
            // }
        ]
    },
]);
export default router