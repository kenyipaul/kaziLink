import "./styles/form.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function Registration() {
    return (
        <div id="form-view">

            <Router>
                <Routes>
                    <Route path="/" element={<WorkersForm />} />
                    <Route path="/register/employer" element={<EmployersForm /> } />
                </Routes>
            </Router>

        </div>
    )
}

function WorkersForm() {
    return (
        <div id="form-view">
            <div className="form-container">
                <div className="form-header">
                    <h1>Join as a worker</h1>
                    <p className="info">Start Building Your Verified work Identity Today</p>
                </div>
            </div>
        </div>
    )
}

function EmployersForm() {
    return (
        <div id="form-view">
            <div className="form-container">
                <div className="form-header">
                    <h1>Join as a Employer</h1>
                    <p className="info">Hire skillful and verified personnel in a click</p>
                </div>
            </div>
        </div>
    )
}