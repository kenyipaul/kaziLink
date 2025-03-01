import "./styles/user_management.scss";
import {useContext, useEffect, useState, createContext} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Axios from "axios";
import { Backdrop } from "@mui/material";

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
        employers.map((employer, key) => {
            return <User data={employer} key={key} />
        })
    )
}


const ViewerContext = createContext()

function User(props) {

    const [menuState, setMenuState] = useState(false)
    const [viewerState, setViewerState] = useState(false)

    const deleteUser = () => {
        if (confirm("Are you sure you want to delete this user?")) {
            Axios({
                method: "delete",
                url: `http://localhost:9000/api/v1/users/${props.data._id}`,
            }).then((res) => {
                if (res.data.status === "success") {
                    alert(res.data.message)
                    location.reload()
                }
            }).catch((err) => {
                if (err.response.data.status === "error") {
                    alert(err.response.data.message)
                }
            })
        }
        setMenuState(false)
    }

    const viewProfile = () => {
        setViewerState(!viewerState)
        setMenuState(false)
    }

    return (
        <ViewerContext.Provider value={[viewerState, setViewerState]}>
        <div className="user">
            <h3 className="id">{props.data._id}</h3>
            <div className="profile">
                <div className="image" style={{
                    backgroundImage: `url(/assets/images/${props.data.gender == "male" ? "male.jpg" : "female.png"})`
                }}></div>
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
                            <li onClick={viewProfile}>View Profile</li>
                            <li onClick={deleteUser}>Delete User</li>
                        </ul>
                    </div>
                }
            </div>

            <UserInfo data={props.data} state={viewerState} />

        </div>
        </ViewerContext.Provider>
    )
}



function UserInfo(props) {

    const [viewerState, setViewerState] = useContext(ViewerContext)

    return (
        <Backdrop open={viewerState}>
            <div className="user-review">
                <div className="header">
                    <h1>User's Information</h1>
                    <svg onClick={() => setViewerState(false)} width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"></path> </g></svg>
                </div>
                <div className="form">

                    <div className="display-area">
                        <p>First Name</p>
                        <h3>{props.data.Fname}</h3>
                    </div>
                    <div className="display-area">
                        <p>Second Name</p>
                        <h3>{props.data.Lname}</h3>
                    </div>
                    <div className="display-area">
                        <p>Email Address</p>
                        <h3>{props.data.email}</h3>
                    </div>

                    <div className="display-group">
                        <div className="display-area">
                            <p>Date of Birth</p>
                            <h3>{props.data.birthday}</h3>
                        </div>
                        <div className="display-area">
                            <p>Location</p>
                            <h3>{props.data.location}</h3>
                        </div>
                        <div className="display-area">
                            <p>Gender</p>
                            <h3>{props.data.gender}</h3>
                        </div>
                        <div className="display-area">
                            <p>Role</p>
                            <h3>{props.data.role}</h3>
                        </div>
                    </div>

                    <div className="display-area">
                        <p>Phone number</p>
                        <h3>{props.data.phone}</h3>
                    </div>

                </div>
            </div>
        </Backdrop>
    )
}