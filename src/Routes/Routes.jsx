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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "my-cart",
          element: <MyCart></MyCart>
        },
        {
          path: "all-users",
          element: <AllUsers></AllUsers>
        },
        {
          path: "reservation",
          element: 'reservation'
        },
        {
          path: "payment-history",
          element: 'payment-history'
        }
      ]
    }
  ]);