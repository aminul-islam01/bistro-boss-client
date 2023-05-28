import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Laout/Dashboard";
import MyCart from "../Pages/Dashboard/Mycart/MyCart";


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
          path: "home",
          element: 'home'
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