import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import './Main.css'
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();
    const hide = location.pathname.includes('login');
   
    return (
        <div>
            {hide || <Navbar></Navbar>}
            <Outlet></Outlet>
            {hide || <Footer></Footer>}
        </div>
    );
};

export default Main;