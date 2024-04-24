import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import ErrorElement from "../Layouts/ErrorElement";
import Blog from "../pages/Blog";
import Update from "../pages/Update";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/Deals.json')
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: '/update',
                element: <Update></Update>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },

        ]
    }
]);

export default router;
