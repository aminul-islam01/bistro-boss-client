import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaCalendarAlt, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';


const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gray-100">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome>USER HOME</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>RESERVATION</NavLink></li>
                    <li><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet>PAYMENT HISTORY</NavLink></li>
                    <li><NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart>MY CART</NavLink></li>
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>HOME</Link></li>
                    <li><Link to="/menu"><FaBars></FaBars>MENU</Link></li>
                    <li><Link to="/order/salad"><FaShoppingBag></FaShoppingBag>SHOP</Link></li>
                    <li><Link to="/"><FaEnvelope></FaEnvelope>Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;