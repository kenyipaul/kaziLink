export default function CreateUser() {
    return (
        <div className="add-user-form">
            <section>
                <div className="header">
                    <h1>Personal Information</h1>
                    <p>Tell us about yourself or your institution</p>
                </div>
                <div className="form">
                    <div className="input-area">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="secondName">Second Name</label>
                        <input type="text" name="secondName" id="secondName"/>
                    </div>
                    <div className="input-area">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>

                    <div className="input-group">
                        <div className="input-area">
                            <label htmlFor="dob">Date of Birth</label>
                            <input type="date" name="dob" id="dob"/>
                        </div>
                        <div className="input-area">
                            <label htmlFor="location">Location</label>
                            <select id="location">
                                <option value="kigali">Kigali</option>
                            </select>
                        </div>
                        <div className="input-area">
                            <label htmlFor="location">Gender</label>
                            <select id="gender">
                                <option value="male">Male</option>
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
                                <input type="tel" id="phone" placeholder="792 000 000"/>
                            </div>
                        </div>
                    </div>

                    <div className="input-area">
                        <label htmlFor="password">Create Password</label>
                        <input type="password" name="" id=""/>
                    </div>

                    <div className="input-area">
                        <label htmlFor="password2">Confirm Password</label>
                        <input type="password" name="" id=""/>
                    </div>
                </div>
            </section>
        </div>
    )
}