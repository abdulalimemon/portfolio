import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import NotFound from "../layouts/NotFound";
import NotFoundPage from "../components/404";
import ContactUs from "../pages/ContactUs";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>,
        children: [
            {
                path: "*",
                element: <NotFoundPage />,
            }
        ]
    },
]);


export default routes;