import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import ErrorElement from "../Layouts/ErrorElement";
import Blog from "../pages/Blog";
import Update from "../pages/Update";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'/update',
                element:<Update></Update>
            }
        ]
    }
]);

export default router;

