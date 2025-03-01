import Axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { setUser, setAuthorized } from "../store/states/user.state.js";
import { useDispatch } from "react-redux";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const passRef = useRef(null);

  const login = () => {
    const password = passRef.current.value;

    if (phone.length < 9) return alert("Invalid phone number");
    if (!password) return alert("Please fill out all fields");

    Axios({
      method: "POST",
      url: "http://localhost:9000/api/v1/users/login",
      data: { password, phone: `+250${phone}` },
    })
      .then((response) => {
        if (response.data.success === "success") {
          dispatch(setAuthorized(true));
          dispatch(setUser(response.data.data));

          localStorage.setItem("_kazi_token", response.data.token);
          localStorage.setItem(
            "_kazi_user",
            JSON.stringify(response.data.data)
          );

          if (response.data.data.role === "employer") {
            navigate("/workers");
          } else {
            navigate("/jobs");
          }
        }
      })
      .catch((error) => {
        if (error.response.data.status === "error") {
          alert(error.response.data.message);
        }
      });
  };

  return (
    <div id="form-view">
      <div className="form-container">
        <div className="form-header">
          <h1>Login to your account</h1>
          <p>
            Login to your account and hire skillful labourers on the click of a
            button
          </p>
        </div>

        <div className="form">
          <div className="input-area">
            <label htmlFor="phone-number">Enter your phone number</label>
            <div className="input-group">
              <input type="text" name="" id="" value="+250" />
              <input
                type="number"
                value={phone}
                onInput={(e) =>
                  e.target.value.length <= 9 && setPhone(e.target.value)
                }
                id=""
                placeholder="792 000 000"
              />
            </div>
          </div>

          <div className="input-area">
            <label htmlFor="password">Enter Password</label>
            <input ref={passRef} type="password" name="" id="" />
          </div>

          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}
