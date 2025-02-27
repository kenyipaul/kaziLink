import { Outlet } from "react-router-dom"

export default function Login() {
    return (
        <div id="form-view">
            <Outlet />
        </div>

    )
}


export function EmployerLogin() {
    return (
        <div className="form-container">
            <div className="form-header">
                <h1>Login to your account</h1>
                <p>Login to your account and expand your network of opportunities</p>
            </div>

            <div className="form">
                <div className="input-area">
                    <label htmlFor="phone-number">Enter your phone number</label>
                    <div className="input-group">
                        <input type="text" name="" id="" value="+250" />
                        <input type="number" name="" id="" placeholder="792 000 000" />
                    </div>
                </div>

                <div className="input-area">
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" name="" id="" />
                </div>

                <button>Login</button>
            </div>
        </div>
    )
}

export function UserLogin() {
    return (
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
                        <input type="number" name="" id="" placeholder="792 000 000" />
                    </div>
                </div>

                <div className="input-area">
                    <label htmlFor="password">Enter Password</label>
                    <input type="password" name="" id="" />
                </div>

                <button>Login</button>
            </div>
        </div>
    )
}