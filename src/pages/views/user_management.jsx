import "./styles/user_management.scss";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Axios from "axios";

export default function UserManagement() {
    return (
        <div className="user_management_page">
            <Outlet />
        </div>
    )
}


export function UserDetails() {

    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0)

    return (
        <div className="user-details">
            <div className="top-bar">
                <h1>User Collection</h1>
                <div className="buttons">
                    <button onClick={() => setCurrentTab(0)} className={currentTab === 0 ? "active" : ""}>Workers</button>
                    <button onClick={() => setCurrentTab(1)} className={currentTab === 1 ? "active" : ""}>Employers</button>
                </div>
            </div>

            <div className="user-list-container">
                <div className="list-container">

                    {currentTab === 0 ? <Workers /> : <Employers /> }

                </div>

                <button onClick={() => navigate("/admin/dashboard/users/create")} className="createBtn">Create New User</button>
            </div>
        </div>
    )
}


function Workers() {

    const [workers, setWorkers] = useState([]);

    useEffect(() => {
        Axios({
            method: "get",
            url: "http://localhost:9000/api/v1/users/workers",

        }).then((res) => {
            setWorkers(res.data.data);
        })

    }, []);

    return (
        workers.map((worker, key) => {
            return <User data={worker} key={key} />
        })
    )
}


function Employers() {

    const [employers, setEmployers] = useState([]);

    useEffect(() => {
        Axios({
            method: "get",
            url: "http://localhost:9000/api/v1/users/employees",

        }).then((res) => {
            setEmployers(res.data.data);
        })

    }, []);

    return (
        <>

        </>
    )
}




function User(props) {

    const [menuState, setMenuState] = useState(false)

    return (
        <div className="user">
            <h3>{props.data._id}</h3>
            <div className="profile">
                <div className="image"></div>
                <h3>{props.data.Fname} {props.data.Lname}</h3>
            </div>
            <h3>{props.data.phone}</h3>
            <div className="action">
                <div onClick={() => setMenuState(!menuState)} className="menuBtn">
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="currentColor"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"></path> <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"></path> </g></svg>
                </div>
                {
                    menuState &&
                    <div className="menu">
                        <ul>
                            <li>Edit Profile</li>
                            <li>Delete User</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}