import { useRef } from "react";
import axios from "axios";
import { setAuthorized, setUser } from "../../store/states/user.state.js";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const genderRef = useRef();
  const firstNameRef = useRef();
  const secondNameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const locationRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const password2Ref = useRef();
  const roleRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;
    const secondName = secondNameRef.current.value;
    const email = emailRef.current.value;
    const dob = dobRef.current.value;
    const role = roleRef.current.value;
    const phone = phoneRef.current.value;
    const gender = genderRef.current.value;
    const location = locationRef.current.value;
    const password = passwordRef.current.value;
    const password2 = password2Ref.current.value;

    if (password === password2) {
      axios
        .post("http://localhost:9000/api/v1/users/signup", {
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
          role,
        })
        .then((result) => {
          alert(result.data.message);
          localStorage.setItem("_kazi_token", result.data.token);
          localStorage.setItem("_kazi_user", JSON.stringify(result.data.data));
          navigate("/admin/dashboard/users");
        })
        .catch((error) => {
          if (error.response.data.status === "error") {
            alert(error.response.data.message);
          }
        });
    } else {
      alert("Passwords don't match");
    }
  };

<<<<<<< HEAD
  return (
    <div className="add-user-form">
      <section>
        <svg
          onClick={() => navigate("/admin/dashboard/users/")}
          width="1.5rem"
          height="1.5rem"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#000000"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
            ></path>
            <path
              fill="#000000"
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
            ></path>
          </g>
        </svg>
        <div className="header">
          <h1>Personal Information</h1>
          <p>Tell us about yourself or your institution</p>
=======
        if (password === password2) {
            axios
                .post(
                    "https://kazilink.onrender.com/api/v1/users/signup",
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
                        role,
                    }
                )
                .then((result) => {
                    alert(result.data.message);
                    localStorage.setItem("_kazi_token", result.data.token);
                    localStorage.setItem("_kazi_user", JSON.stringify(result.data.data));
                    navigate("/admin/dashboard/users")
                })
                .catch((error) => {
                    if (error.response.data.status === "error") {
                        alert(error.response.data.message);
                    }
                });
        } else {
            alert("Passwords don't match");
        }

    };


    return (
        <div className="add-user-form">
            <section>
                <svg onClick={() => navigate("/admin/dashboard/users/")} width="1.5rem" height="1.5rem" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"></path><path fill="#000000" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"></path></g></svg>
                <div className="header">
                    <h1>Personal Information</h1>
                    <p>Tell us about yourself or your institution</p>
                </div>
                <div className="form">
                    <div className="input-area">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" ref={firstNameRef} name="firstName" id="firstName"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="secondName">Second Name</label>
                        <input type="text" ref={secondNameRef} name="secondName" id="secondName"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="email">Email</label>
                        <input type="email" ref={emailRef} name="email" id="email"/>
                    </div>

                    <div className="input-group">
                        <div className="input-area">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" ref={dobRef} name="dob" id="dob"/>
                        </div>
                        <div className="input-area">
                            <label htmlFor="location">Location</label>
                            <select id="location" ref={locationRef}>
                                <option value="Kigali">Kigali</option>
                                <option value="Gisozi">Gisozi</option>
                                <option value="Nyamirambo">Nyamirambo</option>
                                <option value="Kismenti">Kismenti</option>
                                <option value="Kimironko">Kimironko</option>
                            </select>
                        </div>
                        <div className="input-area">
                            <label htmlFor="location" >Gender</label>
                            <select id="gender" ref={genderRef}>
                                <option value="male">Male</option>
                                <option value="female">Male</option>
                            </select>
                        </div>
                        <div className="input-area">
                            <label htmlFor="role">Role</label>
                            <select id="role" ref={roleRef}>
                                <option value="worker">Worker</option>
                                <option value="employer">Employer</option>
                            </select>
                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="form">
                    <div className="phone-area">
                        <div className="input-area">
                            <label htmlFor="phone">Enter your phone number</label>
                            <div className="inputs">
                                <input type="tel" value="+250" id=""/>
                                <input type="tel" id="phone" placeholder="792 000 000" ref={phoneRef}/>
                            </div>
                        </div>
                    </div>

                    <div className="input-area">
                        <label htmlFor="password">Create Password</label>
                        <input type="password" name="" id="" ref={passwordRef}/>
                    </div>

                    <div className="input-area">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="" id="" ref={password2Ref}/>
                    </div>

                    <button onClick={handleSubmit}>Create User</button>

                </div>
            </section>
>>>>>>> cb90936fde9eb6f73633f29dab321df07061efce
        </div>
        <div className="form">
          <div className="input-area">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              ref={firstNameRef}
              name="firstName"
              id="firstName"
            />
          </div>
          <div className="input-area">
            <label htmlFor="secondName">Second Name</label>
            <input
              type="text"
              ref={secondNameRef}
              name="secondName"
              id="secondName"
            />
          </div>
          <div className="input-area">
            <label htmlFor="email">Email</label>
            <input type="email" ref={emailRef} name="email" id="email" />
          </div>

          <div className="input-group">
            <div className="input-area">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" ref={dobRef} name="dob" id="dob" />
            </div>
            <div className="input-area">
              <label htmlFor="location">Location</label>
              <select id="location" ref={locationRef}>
                <option value="kigali">Gisozi</option>
                <option value="kigali">K</option>
              </select>
            </div>
            <div className="input-area">
              <label htmlFor="location">Gender</label>
              <select id="gender" ref={genderRef}>
                <option value="male">Male</option>
                <option value="female">Male</option>
              </select>
            </div>
            <div className="input-area">
              <label htmlFor="role">Role</label>
              <select id="role" ref={roleRef}>
                <option value="worker">Worker</option>
                <option value="employer">Employer</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="form">
          <div className="phone-area">
            <div className="input-area">
              <label htmlFor="phone">Enter your phone number</label>
              <div className="inputs">
                <input type="tel" value="+250" id="" />
                <input
                  type="tel"
                  id="phone"
                  placeholder="792 000 000"
                  ref={phoneRef}
                />
              </div>
            </div>
          </div>

          <div className="input-area">
            <label htmlFor="password">Create Password</label>
            <input type="password" name="" id="" ref={passwordRef} />
          </div>

          <div className="input-area">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="" id="" ref={password2Ref} />
          </div>

          <button onClick={handleSubmit}>Create User</button>
        </div>
      </section>
    </div>
  );
}
