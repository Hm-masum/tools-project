import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-6">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;