export default function OTPForm() {
    return (
        <div id="otp-form-view">

                <div className="form-container">
                    <div className="form-header">
                        <h1>Join as a worker</h1>
                        <p className="info">Start Building Your Verified work Identity Today</p>
                    </div>

                    <div className="form-header">
                        <h1>Confirm Registration</h1>
                        <p>Use the OTP sent to your phone number to confirm account creation.</p>
                    </div>

                    <div className="otp-input-area">
                        <div className="input-area">
                            <label htmlFor="confirm-code">Confirmation code</label>
                            <input type="number" maxLength="6" max="6" placeholder="000 000 000" />
                            <p>Confirm phone number with code from sms message</p>
                        </div>
                        <button><svg width="1.5rem" height="1.5rem" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="currentColor" d="M7.248 1.307A.75.75 0 118.252.193l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 01-1.004-1.114l1.29-1.161a4.5 4.5 0 103.655 2.832.75.75 0 111.398-.546A6 6 0 118.018 2l-.77-.693z"></path></g></svg>Send again</button>
                    </div>

                    <button>Confirm</button>
                </div>

        </div>
    )
}