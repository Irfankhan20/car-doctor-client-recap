import { Outlet } from "react-router-dom";
import Navbar from "../CommonSection/Navbar";
import Footer from "../CommonSection/Footer";


const Main = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;