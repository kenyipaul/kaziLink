import Navbar from "./components/navbar"
import Content from "./components/content";
import CreateJob from "./pages/createJob/createJob";
import Chat from "./pages/chat.jsx";
import Registration, { EmployersForm, WorkersForm } from "./forms/registration";
import { createHashRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import UsersDashboard from "./pages/users_dashboard";
import EmployerDashboard from "./pages/employer_dashboard";
import Login from "./forms/login";
import WorkersPage from "./pages/workers_page";
import JobsPage from "./pages/jobs_page";
import NotificationPage from "./pages/notification_page";
import JobDetails from "./pages/job_details";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {setUser, setAuthorized} from "./store/states/user.state"
import WorkersDashboard from "./pages/workers_dashboard.jsx";
import OTPForm from "./forms/modules/otp_form.jsx";
import AdminDashboard from "./pages/admin_dashboard.jsx";

import JobPostings from "./pages/views/job_postings.jsx";
import Dashboard from "./pages/views/dashboard.jsx";
import Verifications from "./pages/views/verifications.jsx";
import Settings from "./pages/views/settings.jsx";
import UserManagement, {UserDetails} from "./pages/views/user_management.jsx";
import CreateUser from "./pages/views/create_user.jsx";
// import Verification from "./pages/views/verification.jsx";
// import Settings from "./pages/views/settings.jsx";

// const userState = useSelector(store => store.userState);

const router = createHashRouter([
    {
        path: "/admin/dashboard",
        element: <AdminDashboard />,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },
            {
                path: "/admin/dashboard/users",
                element: <UserManagement />,
                children: [
                    {
                        path: "/admin/dashboard/users",
                        element: <UserDetails />,
                    },
                    {
                        path: "/admin/dashboard/users/create",
                        element: <CreateUser />,
                    }
                ]
            },
            {
                path: "/admin/dashboard/postings",
                element: <JobPostings />
            },
            {
                path: "/admin/dashboard/verifications",
                element: <Verifications />
            },
            {
                path: "/admin/dashboard/settings",
                element: <Settings />
            }
        ]
    },
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
                element: <Login />
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
                path: "/workers/dashboard/:id",
                element: <WorkersDashboard />
            },
            {
                path: "/workers",
                element: <WorkersPage />
            },
            {
                path: "/jobs",
                element: <JobsPage />
            },
            {
                path: "/notifications",
                element: <NotificationPage />
            },
            {
                path: "/job-details/:id",
                element: <JobDetails />
            },
            {
                path: "/otp/verification",
                element: <OTPForm />
            },
            // {
            //     path: "/chat",
            //     element: <Chat />
            // }
        ]
    }
])

function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userState = useSelector((store) => store.userState);

    useEffect(() => {
        let user = localStorage.getItem("_kazi_user")

        if (user == null) {
            // navigate("/")
            localStorage.removeItem("_kazi_token")
            localStorage.removeItem("_kazi_user")
        } else {
            user = JSON.parse(user)

            dispatch(setUser(user));
            dispatch(setAuthorized(true));
        }

    }, [])

    return (
        <div>

            {
                userState.authorized == true && userState.userData.verifyNumber == false &&
                <div className={userState.userData.verifyNumber ? "notification-alert active" : "notification-alert active"}>
                    <p>To gain full control over you account, please verify</p>
                    <button onClick={() => navigate("/otp/verification")}>Verify</button>
                </div>
            }

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