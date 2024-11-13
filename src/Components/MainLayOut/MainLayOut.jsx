import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainLayOut = () => {
    
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <Outlet></Outlet>
            {/* footer */}

        </div>
    );
};

export default MainLayOut;