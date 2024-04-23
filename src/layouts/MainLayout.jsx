import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayout = () => {
    return (
        <div className="border-2 border-green-400">
            <Nav />
            <div className="max-w-7xl mx-auto min-h-60 my-10">
            <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;