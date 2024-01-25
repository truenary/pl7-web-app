import { Outlet } from "react-router";
import ResponsiveNavbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
    return (
        <div className="w-dvw">
            <ResponsiveNavbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
}
