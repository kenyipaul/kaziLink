import { useLocation, useNavigate } from "react-router-dom";
import "../sass/navbar.scss"


export default function landing(){

  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="div">

      <div className="navbar-container">
          <img width="150px" src="/logo.png" alt="logo" onClick={() => navigate("/")} className="logo" />

        {
          path.includes("/register") &&
          <div className="navbar-buttons">
            <button onClick={() => navigate("/register")}>Join as Worker</button>
            <button onClick={() => navigate("/register/employer")}>Join as Employer</button>
          </div>
        }

      </div>

    </div>
  );
};

