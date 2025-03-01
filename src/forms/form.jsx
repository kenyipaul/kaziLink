import "./styles/form.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { setUser, setAuthorized } from "../store/states/user.state";
import { useLocation, useNavigate } from "react-router-dom";

export default function Form() {
  const genderRef = useRef();
  const firstNameRef = useRef();
  const secondNameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const locationRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname;

  console.log(path);
  const [skills, setSkills] = useState([]);
  const userState = useSelector((store) => store.userState);

  const FilterSkills = (skillValue) => {
    const newArray = skills.filter((skill) => skill !== skillValue);
    skills.includes(skillValue)
      ? setSkills(newArray)
      : setSkills([...skills, skillValue]);

    console.log(newArray);
  };
  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;
    const secondName = secondNameRef.current.value;
    const email = emailRef.current.value;
    const dob = dobRef.current.value;
    const phone = phoneRef.current.value;
    const gender = genderRef.current.value;
    const location = locationRef.current.value;
    const password = passwordRef.current.value;
    const password2 = password2Ref.current.value;
    const role =
      path == "/register"
        ? "worker"
        : path == "/register/employer"
        ? "employer"
        : null;

    axios
      .post(
        // "https://d4fc-105-179-6-194.ngrok-free.app/api/v1/users/signup",
        "http://localhost:9000/api/v1/users/signup",
        {
          Fname: firstName,
          Lname: secondName,
          email,
          pin: "0000",
          birthday: dob,
          gender,
          phone: `+250${phone}`,
          location,
          password: password,
          passwordConfirm: password2,
          skills,
          role,
        }
      )
      .then((result) => {
        dispatch(setUser(result.data.data));
        dispatch(setAuthorized(true));
        alert(result.data.message);
        localStorage.setItem("_kazi_token", result.data.token);
        localStorage.setItem("_kazi_user", JSON.stringify(result.data.data));

        if (result.data.data.role == "worker") {
          navigate("/jobs");
        } else {
          navigate("/workers");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="form-view">
      <div className="form-header">
        <h1>Registration</h1>
        <p>
          Fill in the registration data. It will take a couple of minutes. All
          you need is a phone number and e-mail
        </p>
      </div>

      <div className="disclaimer">
        <p>
          We take privacy issues seriously. You can be sure that that your
          personal data is securely protected.
        </p>
      </div>

      <div className="form">
        <div className="form-head">
          <h3>Personal data</h3>
          <p>Specify exactly as in your passport or national id</p>
        </div>

        <div className="input-area">
          <label htmlFor="firstName">
            First Name <span>*</span>
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={firstNameRef}
          />
        </div>

        <div className="input-area">
          <label htmlFor="secondName">
            Second name <span>*</span>
          </label>
          <input
            type="text"
            name="secondName"
            id="secondName"
            ref={secondNameRef}
          />
        </div>

        <div className="input-area">
          <label htmlFor="email">Email (Optional)</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>

        <div className="input-group">
          <div className="input-area">
            <label htmlFor="dob">
              Date of Birth <span>*</span>
            </label>
            <input type="date" name="dob" id="dob" ref={dobRef} />
          </div>

          <div className="input-area">
            <label htmlFor="location">
              Location <span>*</span>
            </label>
            {/*<input*/}
            {/*  type="text"*/}
            {/*  name="location"*/}
            {/*  id="location"*/}
            {/*  ref={locationRef}*/}
            {/*/>*/}
            <select name="" id="location" ref={locationRef}>
              <option value="kigali">Kigali</option>
              <option value="gisozi">Gisozi</option>
              <option value="remera">Remera</option>
              <option value="kimironko">Kimironko</option>
              <option value="kismenti">Kismenti</option>
              <option value="nyamirambo">Nyamirambo</option>
            </select>
          </div>

          <div className="input-area">
            <label htmlFor="gender">
              Gender <span>*</span>
            </label>
            <select name="gender" id="gender" ref={genderRef}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
      </div>

      <div className="form">
        <div className="input-area">
          <label htmlFor="phone">Enter your phone number</label>
          <div className="inputs">
            <input type="tel" value="+250" />
            <input
              type="number"
              id="phone"
              placeholder="792 000 000"
              ref={phoneRef}
            />
          </div>
        </div>
      </div>

      {path && path !== "/register/employer" && (
        <div className="skill-area">
          <label htmlFor="skills">Select your skills</label>
          <div className="skill-grid">
            <p
              className={
                skills.includes("House Cleaning") ? "skill active" : "skill"
              }
              onClick={() => FilterSkills("House Cleaning")}
            >
              House Cleaning
            </p>
            <p
              className={skills.includes("Plumbing") ? "skill active" : "skill"}
              onClick={() => FilterSkills("Plumbing")}
            >
              Plumbing
            </p>
            <p
              className={
                skills.includes("Carpentry") ? "skill active" : "skill"
              }
              onClick={() => FilterSkills("Carpentry")}
            >
              Carpentry
            </p>
            <p
              className={skills.includes("Painting") ? "skill active" : "skill"}
              onClick={() => FilterSkills("Painting")}
            >
              Painting
            </p>
            <p
              className={skills.includes("Roofing") ? "skill active" : "skill"}
              onClick={() => FilterSkills("Roofing")}
            >
              Roofing
            </p>
            <p
              className={
                skills.includes("Electrical") ? "skill active" : "skill"
              }
              onClick={() => FilterSkills("Electrical")}
            >
              Electrical
            </p>
          </div>
        </div>
      )}

      <div className="password-area">
        <div className="input-area">
          <label htmlFor="password">Create Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>

        <div className="input-area">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            ref={password2Ref}
          />
        </div>
      </div>

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
}
