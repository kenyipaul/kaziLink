import OTPForm from "./forms/modules/otp_form";
import Registration from "./forms/registration";
import WorkerRegistration from "./forms/worker_registration";
import AdminDashboard from "./pages/admin_dashboard";
import Navbar from "./components/navbar/navbar";
import { HashRouter as Router, Routes, Route, createHashRouter, Outlet, RouterProvider } from "react-router-dom";

const router = createHashRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <h1>Home</h1>
            },
            {
                path: "/register",
                element: <Registration />
            }
        ]
    }
])

function Home() {
    return (
        <div>
            <Navbar />
            {Outlet}
        </div>
    )
}

export default function App() {
    return (
        <div>

            <RouterProvider router={router} />

            {/* <AdminDashboard /> */}
            {/* <WorkerRegistration /> */}
            {/* <OTPForm /> */}
            {/* <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <AdminDashboard /> } />
                </Routes>
            </Router> */}
            
        </div>
    )
}