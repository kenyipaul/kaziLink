import Navbar from "./components/navbar"
import Content from "./components/content";
import CreateJob from "./pages/createJob/createJob";
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

import Posts from "./pages/views/posts.jsx";
import Dashboard from "./pages/views/dashboard.jsx";

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
                path: "/admin/dashboard/jobs",
                element: <Posts />
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
                path: "/workers/dashboard",
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
            }
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
            navigate("/")
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

            {/*{*/}
            {/*    userState.userData &&*/}
            {/*    userState.userData.verifyNumber ?*/}
            {/*        <></> :*/}
            {/*    <div className={userState.userData.verifyNumber ? "notification-alert active" : "notification-alert active"}>*/}
            {/*        <p>To gain full control over you account, please verify</p>*/}
            {/*        <button onClick={() => navigate("/otp/verification")}>Verify</button>*/}
            {/*    </div>*/}
            {/*}*/}

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