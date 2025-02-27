import Navbar from "./components/navbar"
import Content from "./components/content";
import CreateJob from "./pages/createJob/createJob";
import Registration, { EmployersForm, WorkersForm } from "./forms/registration";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import UsersDashboard from "./pages/users_dashboard";
import EmployerDashboard from "./pages/employer_dashboard";
import Login, { EmployerLogin, UserLogin } from "./forms/login";
import WorkersPage from "./pages/workers_page";
import JobsPage from "./pages/jobs_page";

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
            },
            {
                path: "/login",
                element: <Login />,
                children: [
                    {
                        path: "/login",
                        element: <UserLogin />
                    },
                    {
                        path: "/login/employer",
                        element: <EmployerLogin />
                    }
                ]
            },
            {
                path: "/create",
                element: <CreateJob />

            },
            {    path: "/users/dashboard",
                element: <UsersDashboard />
            },
            {
                path: "/employer/dashboard",
                element: <EmployerDashboard />
            },
            {
                path: "/workers",
                element: <WorkersPage />
            },,
            {
                path: "/jobs",
                element: <JobsPage />
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