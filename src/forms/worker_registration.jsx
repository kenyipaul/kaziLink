export default function WorkerRegistration() {
    return (
        <div id="form-view">

            <div className="form-container">
                <div className="form-header">
                    <h1>Join as a worker</h1>
                    <p>Start Building Your Verified work Identity Today</p>
                </div>
            
                <div>
                    <h1>Registration</h1>
                    <p>Fill in the registration data. It will take a couple of minutes. All you need is a phone number and e-mail</p>
                </div>

                <div className="form">
                    <div className="form-header">
                        <h1>Personal data</h1>
                        <p>Specify exactly as in your passport or national id</p>
                    </div>

                    <div className="input-area">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" />
                    </div>

                    <div className="input-area">
                        <label htmlFor="secondName">Second name</label>
                        <input type="text" name="secondName" id="secondName" />
                    </div>

                    <div className="input-area">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>

                    <div className="input-group">
                        <div className="input-area">
                            <label htmlFor="dob"></label>
                            <input type="date" name="dob" id="dob" />
                        </div>

                        <div className="input-area">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="location" id="location" />
                        </div>

                        <div className="input-area">
                            <label htmlFor="gender">Gender</label>
                            <select name="gender" id="gender">
                                <option value="">Gender</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}