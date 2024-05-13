import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const LayOut = () => {
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;