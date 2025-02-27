import Navbar from "./components/navbar"
import Content from "./components/content";
import Registration, { EmployersForm, WorkersForm } from "./forms/registration";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <Content />
            },
            {
                path: "/register",
                element: <Registration />,
                children: [
                    {
                        path: "/register",
                        element: <WorkersForm />
                    },
                    {
                        path: "/register/employer",
                        element: <EmployersForm />
                    }
                ]
            }
        ]
    }
])

function Home() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default function App() {
    return (
        <RouterProvider router={router} />
    )
}