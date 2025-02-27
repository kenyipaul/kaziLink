import Form from "./form"
import "./styles/form.scss";
import { Outlet } from "react-router-dom";

export default function Registration() {
    return (
        <div id="form-view">

            <Outlet />

        </div>
    )
}

export function WorkersForm() {
    return (
        <>
            <div className="form-container">
                <div className="form-header">
                    <h1>Join as a worker</h1>
                    <p className="info">Start Building Your Verified work Identity Today</p>
                </div>

                <Form />

            </div>
        </>
    )
}

export function EmployersForm() {
    return (
        <>
            <div className="form-container">
                <div className="form-header">
                    <h1>Join as a Employer</h1>
                    <p className="info">Hire skillful and verified personnel in a click</p>
                </div>

                <Form />

            </div>
        </>
    )
}