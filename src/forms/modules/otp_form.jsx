import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/states/user.state";

export default function OTPForm() {
  const [number, setNumber] = useState("");
  const token = localStorage.getItem("_kazi_token");
  const [showVerifiy, setShowVerifiy] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((store) => store.userState);

  console.log("old: ", userState);

  const HandlSubmit = async () => {
    const ob = {
      phone: "+250" + number,
      token,
    };
    const resoponse = await axios.post(
      `http://localhost:9000/api/v1/sms/send-otp`,
      ob
    );
    if (resoponse.statusText === "OK") {
      alert("Verification code sent successfully!");
      setShowVerifiy(true);
    }
  };
  const HandleVerify = async () => {
    const ob = {
      otp: verificationCode,
      token,
    };
    const resoponse = await axios.post(
      `http://localhost:9000/api/v1/sms/verify-otp`,
      ob
    );
    if (resoponse.data.message === "The OTP is Valid") {
      alert("Verification code sent successfully!");
      const newUser = { ...userState.userData, verifyNumber: true };
      localStorage.setItem("_kazi_user", JSON.stringify(newUser));
      await dispatch(setUser({ ...newUser }));
      navigate("/");

      console.log(newUser);
    } else {
      alert("Invalid OTP!");
    }
  };
  const HandleResend = async () => {
    const ob = {
      phone: "+250" + number,
      token,
    };
    const resoponse = await axios.post(
      `http://localhost:9000/api/v1/sms/send-otp`,
      ob
    );
    if (resoponse.statusText === "OK") {
      alert("Verification code sent successfully!");
    }
  };
  if (!showVerifiy) {
    return (
      <div id="otp-form-view">
        <div className="form-container">
          <div className="form-header">
            <h1>Confirm Registration</h1>
            <p className="info">
              Use the OTP sent to your phone number to confirm account creation.
            </p>
          </div>
          <div className="otp-input-area">
            <div className="input-area">
              <label htmlFor="phone">Enter you phone number</label>
              <div className="input-group">
                <input type="text" placeholder="+250" />
                <input
                  type="tel"
                  name=""
                  id=""
                  placeholder="700 000 000"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button onClick={() => HandlSubmit()}>Confirm</button>
        </div>
      </div>
    );
  } else {
    return (
      <div id="otp-form-view">
        <div className="otp-input-area">
          <div className="input-area">
            <label htmlFor="confirm-code">Confirmation code</label>
            <input
              type="number"
              maxLength="6"
              max="6"
              placeholder="000 000 000"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <p>Confirm phone number with code from sms message</p>
          </div>
          <div className="btn">
            <button onClick={() => HandleResend()}>
              <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="currentColor"
                    d="M7.248 1.307A.75.75 0 118.252.193l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.004-1.114l1.29-1.161a4.5 4.5 0 103.655 2.832.75.75 0 111.398-.546A6 6 0 118.018 2l-.77-.693z"
                  ></path>
                </g>
              </svg>
              Send again
            </button>
            <button onClick={() => HandleVerify()}>Verify</button>
          </div>
        </div>
      </div>
    );
  }
}
