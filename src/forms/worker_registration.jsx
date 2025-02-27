import "./styles/form.scss"

export default function WorkerRegistration() {
    return (
        <div id="form-view">

            <div className="form-container">
                <div className="form-header">
                    <h1>Join as a worker</h1>
                    <p className="info">Start Building Your Verified work Identity Today</p>
                </div>
            
                <div className="form-header">
                    <h1>Registration</h1>
                    <p>Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail</p>
                </div>

                <div className="disclaimer">
                    <p>We take privacy issues seriously. You can be sure that that your personal data is securely protected.</p>
                </div>

                <div className="form">
                    <div className="form-header">
                        <h3>Personal data</h3>
                        <p>Specify exactly as in your passport or national id</p>
                    </div>

                    <div className="input-area">
                        <label htmlFor="firstName">First Name <span>*</span></label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>

                    <div className="input-area">
                        <label htmlFor="secondName">Second name <span>*</span></label>
                        <input type="text" name="secondName" id="secondName" />
                    </div>

                    <div className="input-area">
                        <label htmlFor="email">Email (Optional)</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="input-group">
                        <div className="input-area">
                            <label htmlFor="dob">Date of Birth <span>*</span></label>
                            <input type="date" name="dob" id="dob" />
                        </div>

                        <div className="input-area">
                            <label htmlFor="location">Location <span>*</span></label>
                            <input type="text" name="location" id="location" />
                        </div>

                        <div className="input-area">
                            <label htmlFor="gender">Gender <span>*</span></label>
                            <select name="gender" id="gender">
                                <option value="">Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <div className="input-area">
                        <label htmlFor="phone">Enter your phone number</label>
                        <div className="inputs">
                            <input type="tel" value="+250" />
                            <input type="number" id="phone" placeholder="792 000 000" />
                        </div>
                    </div>
                </div>

                <div className="skill-area">
                    <label htmlFor="skills">Select your skills</label>
                    <div className="skill-grid">
                        <p className="skill">House Cleaning</p>
                        <p className="skill">Plumbing</p>
                        <p className="skill">Carpentry</p>
                        <p className="skill">Painting</p>
                        <p className="skill">Roofing</p>
                        <p className="skill">Electrical</p>
                    </div>
                </div>

                <div className="password-area">

                    <div className="input-area">
                        <label htmlFor="password">Create Password</label>
                        <input type="password" name="password" id="password" />
                    </div>

                    <div className="input-area">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="password2" id="password2" />
                    </div>
                </div>

                <button>Sign Up</button>

            </div>

        </div>
    )
}