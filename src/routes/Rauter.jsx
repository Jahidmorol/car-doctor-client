// import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from "../layouts/Login";
import Main from "../layouts/Main";
import CheckOut from "../pages/checkOut/CheckOut";
import Home from "../pages/home/home/Home";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    children: [
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/login/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
