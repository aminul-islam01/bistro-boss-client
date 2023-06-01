import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaListUl, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useAdmin from "../hooks/UseAdmin";


const Dashboard = () => {
    const [isAdmin, isAdminLoading] = useAdmin();
    // const isAdmin = false;
    
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
                    {isAdmin ? <>
                        <li><NavLink to="/dashboard/home"><FaHome></FaHome>ADMIN HOME</NavLink></li>
                        <li><NavLink to="/dashboard/add-item"><FaUtensils></FaUtensils>ADD ITEMS</NavLink></li>
                        <li><NavLink to="/dashboard/manage-item"><FaListUl></FaListUl>MANAGE ITEMS</NavLink></li>
                        <li><NavLink to="/dashboard/my-cart"><FaBook></FaBook>MANAGE BOOKINGS</NavLink></li>
                        <li><NavLink to="/dashboard/all-users"><FaUsers></FaUsers>ALL USERS</NavLink></li>
                    </>
                    :isAdminLoading? ""
                        : <>
                            <li><NavLink to="/dashboard/home"><FaHome></FaHome>USER HOME</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendarAlt></FaCalendarAlt>RESERVATION</NavLink></li>
                            <li><NavLink to="/dashboard/payment-history"><FaWallet></FaWallet>PAYMENT HISTORY</NavLink></li>
                            <li><NavLink to="/dashboard/my-cart"><FaShoppingCart></FaShoppingCart>MY CART</NavLink></li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>HOME</Link></li>
                    <li><Link to="/menu"><FaBars></FaBars>MENU</Link></li>
                    <li><Link to="/order/salad"><FaShoppingBag></FaShoppingBag>SHOP</Link></li>
                    <li><Link to="/contact"><FaEnvelope></FaEnvelope>Contact</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;