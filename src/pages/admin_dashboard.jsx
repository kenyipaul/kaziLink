import "../sass/_admin_dashboard.scss";
import React, { useContext, useState } from "react";
import {Link, useLocation, Outlet} from "react-router-dom"

const SidebarContext = React.createContext(null);

export default function AdminDashboard() {
  const [sidebarState, setSidebarState] = useState(false);

  return (
    <div id="admin-dashboard">
      <SidebarContext.Provider value={[sidebarState, setSidebarState]}>
        <Sidebar />
        <Main />
      </SidebarContext.Provider>
    </div>
  );
}

function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  const [sidebarState, setSidebarState] = useContext(SidebarContext);

  return (
    <div className={sidebarState ? "sidebar active" : "sidebar"}>
      <section>
        <div className="head">
          <h1>Console</h1>
          <svg
            onClick={() => setSidebarState(!sidebarState)}
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Menu / Menu_Alt_01">
                {" "}
                <path
                  id="Vector"
                  d="M12 17H19M5 12H19M5 7H19"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <div className="user-info">
          <div className="cover"></div>
          <div className="info">
            <h1>Jane Doe</h1>
            <p>janedoe@work.org</p>
          </div>
        </div>

                <div className="links">
                    <Link className={path === "/admin/dashboard" && "active"} to="/admin/dashboard"><p>Dashboard</p></Link>
                    <Link className={path === "/admin/dashboard/users" && "active"} to="/admin/dashboard/users"><p>User Management</p></Link>
                    <Link className={path === "/admin/dashboard/verifications" && "active"} to="/admin/dashboard/verifications"><p>Verifications</p></Link>
                    <Link className={path === "/admin/dashboard/postings" && "active"} to="/admin/dashboard/postings"><p>Job Postings</p></Link>
                    {/*<Link className={path === "/admin/dashboard/settings" && "active"} to="/admin/dashboard/settings"><p>Settings</p></Link>*/}
                </div>
            </section>

      <section>
        <div className="links">
          <div className="link">
            <p>LogOut</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Main() {
  const [sidebarState, setSidebarState] = useContext(SidebarContext);

  return (
    <div className="main">
      <div className="navbar">
        <h1>Console</h1>
        <svg
          onClick={() => setSidebarState(!sidebarState)}
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Menu_Alt_01">
              {" "}
              <path
                id="Vector"
                d="M12 17H19M5 12H19M5 7H19"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      </div>

            <div className="main-content">
                <Outlet />
            </div>
        </div>
    )
}
