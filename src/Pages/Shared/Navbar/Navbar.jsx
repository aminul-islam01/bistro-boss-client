import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProviders";
import useCart from "../../../hooks/UseCart";
import { FaShoppingCart } from 'react-icons/fa';
import useAdmin from "../../../hooks/UseAdmin";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const price = cart.reduce((sum, item) => item.price + sum, 0);
    const totalPrice = price.toFixed(2);

    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to={isAdmin? "/dashboard/admin-home":"dashboard/user-home"}>Dashboard</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order/salad">Order Food</Link></li>
        {user ? <li><Link to="/" onClick={logoutUser} >Sign Out</Link></li>
            : <li><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="max-w-[1280px] navbar fixed z-10 bg-opacity-20 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            {user && <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator text-3xl">
                            <FaShoppingCart></FaShoppingCart>
                            <span className="badge badge-sm indicator-item">{cart?.length || 0}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow text-black">
                        <div className="card-body">
                            <span className="font-bold text-lg">{cart?.length || 0} Items</span>
                            <span className="text-info">Subtotal: ${totalPrice}</span>
                            <div className="card-actions">
                                <Link to="/dashboard/my-cart">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-10 rounded-full overflow-hidden ms-4">
                    <img src={user?.photoURL} />
                </div>
            </div>}
        </div>
    );
};

export default Navbar;