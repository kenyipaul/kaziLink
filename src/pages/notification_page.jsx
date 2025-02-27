export default function NotificationPage() {
    return (
        <div className="notification-page">

            <div className="notification-container">
                <h1>Notifications</h1>

                <div className="notifications">

                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />

                </div>
            </div>

        </div>
    )
}

function Notification() {
    return (
        <div className="notification">
            <div className="profile"></div>
            <div className="info">
                <h2>We released some new features</h2>
                <p>Check them out</p>
            </div>
        </div>
    )
}