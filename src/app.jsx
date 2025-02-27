import OTPForm from "./forms/modules/otp_form";
import Registration from "./forms/registration";
import WorkerRegistration from "./forms/worker_registration";
import AdminDashboard from "./pages/admin_dashboard";

export default function App() {
    return (
        <div>
            {/* <AdminDashboard /> */}
            {/* <WorkerRegistration /> */}
            {/* <OTPForm /> */}
            <Registration />
        </div>
    )
}