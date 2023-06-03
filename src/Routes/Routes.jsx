import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Contact from "../Pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "menu",
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'contact',
          element: <Contact></Contact>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: "sign-up",
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: "my-cart",
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "all-users",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: "add-item",
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: "manage-item",
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        }
      ]
    }
  ]);