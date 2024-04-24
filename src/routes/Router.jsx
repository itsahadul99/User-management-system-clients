import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddUser from "../components/AddUser";
import UpdateUser from "../components/UpdateUser";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/newUser',
                element: <AddUser />
            }, 
            {
                path: '/users/:id',
                element: <UpdateUser />,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`)
            }
        ]
    }
])
export default router;