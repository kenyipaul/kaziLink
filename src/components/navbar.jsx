import "../sass/navbar.scss";
import { useState } from "react"
import { useSelector } from "react-redux"
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function landing() {

	const navigate = useNavigate();
    const userState = useSelector(store => store.userState);

    const [menuState, setMenuState] = useState(false);

	return (
		<div className="navbar">
			<div className="navbar-container">
				<img
					width="150px"
					src="/logo.png"
					alt="logo"
					onClick={() => navigate("/")}
					className="logo"
				/>
                {userState.authorized ? <AuthorizedNav active={menuState} /> : <UnauthorizedNav /> }
                <svg onClick={() => setMenuState(!menuState)} className="menuBtn" width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Menu_Alt_01"> <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
			</div>
		</div>
	);
}


function UnauthorizedNav() {
    
    const location = useLocation();
	const path = location.pathname;
    const navigate = useNavigate();

    return (
        <>
            {path == "/register" && (
                <div className="navbar-buttons">
                    <button onClick={() => navigate("/login")}>
                        Login
                    </button>
                    <button onClick={() => navigate("/register/employer")}>
                        Join as Employer
                    </button>
                </div>
            )}

            {path == "/register/employer" && (
                <div className="navbar-buttons">
                    <button onClick={() => navigate("/login")}>
                        Login
                    </button>
                    <button onClick={() => navigate("/register")}>
                        Join as Worker
                    </button>
                </div>
            )}

            {path == "/login" && (
                <div className="navbar-buttons">
                    <button onClick={() => navigate("/login/employer")}>
                        Login as Worker
                    </button>
                    <button onClick={() => navigate("/register")}>Register</button>
                </div>
            )}

            {path == "/login/employer" && (
                <div className="navbar-buttons">
                    <button onClick={() => navigate("/login")}>
                        Login as Employer
                    </button>
                    <button onClick={() => navigate("/register")}>Register</button>
                </div>
            )}
        </>
    )
}


function AuthorizedNav(props) {

    const userState = useSelector(store => store.userState)

    return (
        <div className={props.active ? `authorized-user-section active` : `authorized-user-section`}>
            <ul>
                {
                    userState.userData && userState.userData.role == "employer" ?
                    <>
                        <li><Link to="/workers">Find a Worker</Link></li>
                        <li><Link to="/create">Create a Job</Link></li>
                    </> :
                    <li><Link to="/jobs">Find a Job</Link></li>
                }

                {
                    userState.userData && userState.userData.role == "employer" ?
                    <li><Link to="/employer/dashboard">Profile</Link></li> :
                    <li><Link to="/users/dashboard">Profile</Link></li>
                }
            </ul>

            <div className="buttons">
                <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#1C274C" stroke-width="1.5"></path> <path opacity="0.5" d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#1C274C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C7.71983 1.25 4.25004 4.71979 4.25004 9V9.7041C4.25004 10.401 4.04375 11.0824 3.65717 11.6622L2.50856 13.3851C1.17547 15.3848 2.19318 18.1028 4.51177 18.7351C5.26738 18.9412 6.02937 19.1155 6.79578 19.2581L6.79768 19.2632C7.56667 21.3151 9.62198 22.75 12 22.75C14.378 22.75 16.4333 21.3151 17.2023 19.2632L17.2042 19.2581C17.9706 19.1155 18.7327 18.9412 19.4883 18.7351C21.8069 18.1028 22.8246 15.3848 21.4915 13.3851L20.3429 11.6622C19.9563 11.0824 19.75 10.401 19.75 9.7041V9C19.75 4.71979 16.2802 1.25 12 1.25ZM15.3764 19.537C13.1335 19.805 10.8664 19.8049 8.62349 19.5369C9.33444 20.5585 10.571 21.25 12 21.25C13.4289 21.25 14.6655 20.5585 15.3764 19.537ZM5.75004 9C5.75004 5.54822 8.54826 2.75 12 2.75C15.4518 2.75 18.25 5.54822 18.25 9V9.7041C18.25 10.6972 18.544 11.668 19.0948 12.4943L20.2434 14.2172C21.0086 15.3649 20.4245 16.925 19.0936 17.288C14.4494 18.5546 9.5507 18.5546 4.90644 17.288C3.57561 16.925 2.99147 15.3649 3.75664 14.2172L4.90524 12.4943C5.45609 11.668 5.75004 10.6972 5.75004 9.7041V9Z" fill="#1C274C"/> </svg>
            </div>
        </div>
    )
}