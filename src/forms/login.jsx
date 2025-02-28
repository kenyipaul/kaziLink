import Axios from "axios";
import { Outlet } from "react-router-dom"
import {useRef, useState} from "react";

export default function Login() {

    const [phone, setPhone] = useState("")
    const passRef = useRef(null)

    const login = () => {
        const password = passRef.current.value;

        if (phone.length < 9) return alert("Invalid phone number");
        if (!password) return alert("Please fill out all fields");

        Axios({
            method: 'POST',
            url: "http://localhost:9000/api/v1/users/login",
            data: { password, phone }
        }).then((response) => {
            console.log(response)
        })
    }

    return (
        <div id="form-view">
            <div className="form-container">
                <div className="form-header">
                    <h1>Login to your account</h1>
                    <p>Login to your account and hire skillful labourers on the click of a button</p>
                </div>

                <div className="form">
                    <div className="input-area">
                        <label htmlFor="phone-number">Enter your phone number</label>
                        <div className="input-group">
                            <input type="text" name="" id="" value="+250" />
                            <input type="number" value={phone} onInput={(e) => e.target.value.length <= 9 && setPhone(e.target.value)} id="" placeholder="792 000 000" />
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

    )
}


// export function EmployerLogin() {
//
//     const phoneRef = useRef(null)
//     const passRef = useRef(null)
//
//     const login = () => {
//
//     }
//
//     return (
//         <div className="form-container">
//             <div className="form-header">
//                 <h1>Login to your account</h1>
//                 <p>Login to your account and expand your network of opportunities</p>
//             </div>
//
//             <div className="form">
//                 <div className="input-area">
//                     <label htmlFor="phone-number">Enter your phone number</label>
//                     <div className="input-group">
//                         <input type="text" name="" id="" value="+250" />
//                         <input type="number" name="" id="" placeholder="792 000 000" />
//                     </div>
//                 </div>
//
//                 <div className="input-area">
//                     <label htmlFor="password">Enter Password</label>
//                     <input type="password" name="" id="" />
//                 </div>
//
//                 <button>Login</button>
//             </div>
//         </div>
//     )
// }
//
// export function Login() {
//
//     const [phone, setPhone] = useState()
//     const passRef = useRef(null)
//
//     const login = () => {
//
//     }
//
//     return (
//         <div className="form-container">
//             <div className="form-header">
//                 <h1>Login to your account</h1>
//                 <p>Login to your account and hire skillful labourers on the click of a button</p>
//             </div>
//
//             <div className="form">
//                 <div className="input-area">
//                     <label htmlFor="phone-number">Enter your phone number</label>
//                     <div className="input-group">
//                         <input type="text" name="" id="" value="+250" />
//                         <input type="number" value={phone} onInput={(e) => e.target.value.length <= 9 && setPhone(e.target.value)} id="" placeholder="792 000 000" />
//                     </div>
//                 </div>
//
//                 <div className="input-area">
//                     <label htmlFor="password">Enter Password</label>
//                     <input type="password" name="" id="" />
//                 </div>
//
//                 <button>Login</button>
//             </div>
//         </div>
//     )
// }