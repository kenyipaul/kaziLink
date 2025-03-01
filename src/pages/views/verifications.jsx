import "./styles/verifications.scss";
import {createContext, useContext, useEffect, useState} from "react";
import Axios from "axios";
import {Backdrop} from "@mui/material";

const UserInfoContext = createContext(null)

export default function Verifications() {

    const [workers, setWorkers] = useState([]);
    const [userInfoState, setUserInfoState] = useState({
        state: false,
        userData: null
    })

    useEffect(() => {
        Axios({
            method: "get",
            url: "https://kazilink.onrender.com/api/v1/users/workers",

        }).then((res) => {
            setWorkers(res.data.data);
        })

    }, []);

    return (
        <div className="verifications-page">
            <UserInfoContext.Provider value={[userInfoState, setUserInfoState]}>
                <div className="page-content">
                    <h1>Verification Queue</h1>

                    <UserInfo state={userInfoState} />

                    <div className="user-list">
                        {
                         workers.map((worker, key) => {
                             return <User data={worker} key={key}/>
                         })
                        }
                    </div>
                </div>
            </UserInfoContext.Provider>
        </div>
    )
}



function UserInfo() {

    const [userInfoState, setUserInfoState] = useContext(UserInfoContext);

    return (
        <Backdrop open={userInfoState.state}>
            <div className="user-review">
                <div className="header">
                    <h1>User's Information</h1>
                    <svg onClick={() => setUserInfoState({state: false, userData: {}})} width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"></path> </g></svg>
                </div>
                <div className="form">

                    <div className="display-area">
                        <p>First Name</p>
                        <h3>{userInfoState.userData && userInfoState.userData.Fname}</h3>
                    </div>
                    <div className="display-area">
                        <p>Second Name</p>
                        <h3>{userInfoState.userData && userInfoState.userData.Lname}</h3>
                    </div>
                    <div className="display-area">
                        <p>Email Address</p>
                        <h3>{userInfoState.userData && userInfoState.userData.email}</h3>
                    </div>

                    <div className="display-group">
                        <div className="display-area">
                            <p>Date of Birth</p>
                            <h3>{userInfoState.userData && userInfoState.userData.birthday}</h3>
                        </div>
                        <div className="display-area">
                            <p>Location</p>
                            <h3>{userInfoState.userData && userInfoState.userData.location}</h3>
                        </div>
                        <div className="display-area">
                            <p>Gender</p>
                            <h3>{userInfoState.userData && userInfoState.userData.gender}</h3>
                        </div>
                    </div>

                    <div className="display-area">
                        <p>Phone number</p>
                        <h3>{userInfoState.userData && userInfoState.userData.phone}</h3>
                    </div>

                    <button>Verify User</button>

                </div>
            </div>
        </Backdrop>
    )
}




function User(props) {

    const [menuState, setMenuState] = useState(false)
    const [userInfoState, setUserInfoState] = useContext(UserInfoContext);

    return (
        <div className="user">
            <h3 className="id">#{props.data._id}</h3>
            <div className="profile">
                <div className="image"></div>
                <div className="info">
                    <h3>{props.data.Fname} {props.data.Lname}</h3>
                    <h4>{props.data.phone}</h4>
                </div>
            </div>
            {/*<h3>Verified</h3>*/}
            <div className="action">
                <div onClick={() => setMenuState(!menuState)} className="menuBtn">
                    <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z" fill="currentColor"></path> <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="currentColor"></path> <path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"></path> </g></svg>
                </div>
                {/*{*/}
                {/*    menuState &&*/}
                    <div className="menu">
                        <ul>
                            <li onClick={() => setUserInfoState({state: true, userData: props.data})}>Review</li>
                        </ul>
                        <div className="status">Pending</div>
                    </div>
                {/*}*/}
            </div>
        </div>
    )
}