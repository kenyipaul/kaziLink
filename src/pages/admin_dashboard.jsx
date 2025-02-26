import "../sass/admin_dashboard.scss"
import React, { useContext, useState } from "react";
import { Link, HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"

import Dashboard from "./views/dashboard";
import Employees from "./views/employees";
import Employers from "./views/employers";
import Feedback from "./views/feedback";
import Posts from "./views/posts";

const SidebarContext = React.createContext(null)

export default function AdminDashboard() {

    const [sidebarState, setSidebarState] = useState(false);

    return (
        <div id="admin-dashboard">
            <SidebarContext.Provider value={[sidebarState, setSidebarState]}> 
                <Router>
                    <Sidebar />
                    <Main />
                </Router>
            </SidebarContext.Provider>
        </div>
    )
}


function Sidebar() {

    const location = useLocation();
    const path = location.pathname;

    const [sidebarState, setSidebarState] = useContext(SidebarContext);

    return (
        <div className={sidebarState ? "sidebar active" : "sidebar"} >
            <section>
                <div className="head">
                    <h1>Console</h1>
                    <svg onClick={() => setSidebarState(!sidebarState)} width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </div>

                <div className="user-info">
                    <div className="cover"></div>
                    <div className="info">
                        <h1>Jane Doe</h1>
                        <p>janedoe@work.org</p>
                    </div>
                </div>

                <div className="links">
                    <Link className={path == "/" && "active"} to="/"><p>Dashboard</p></Link>
                    <Link className={path == "/posts" && "active"} to="/posts"><p>Posts</p></Link>
                    <Link className={path == "/employers" && "active"} to="/employers"><p>Employers</p></Link>
                    <Link className={path == "/employees" && "active"} to="/employees"><p>Employees</p></Link>
                    <Link className={path == "/feedback" && "active"} to="/feedback"><p>Feedback</p></Link>
                </div>
            </section>

            <section>
                <div className="links">
                    <div className="link"><p>LogOut</p></div>
                </div>
            </section>
        </div>
    )
}



function Main() {
    
    const [sidebarState, setSidebarState] = useContext(SidebarContext);

    return (
        <div className="main">
            <div className="navbar">
                <h1>Console</h1>
                <svg onClick={() => setSidebarState(!sidebarState)} width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </div>

            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/employers" element={<Employers />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
            </div>
        </div>
    )
}