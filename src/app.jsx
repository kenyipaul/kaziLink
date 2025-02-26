import Navbar from "./components/Navbar/Navbar.jsx";
import Content from "./components/content/content.jsx";
import AdminDashboard from "./pages/admin_dashboard";

export default function App() {
    return (
        <div>
            <Navbar/>
            <Content/>
            {/* <AdminDashboard /> */}
        </div>
    )
}