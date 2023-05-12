// import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from "../layouts/Login";
import Main from "../layouts/Main";
import CheckOut from "../pages/checkOut/CheckOut";
import Home from "../pages/home/home/Home";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import OrderRevews from "../pages/orderReviews/OrderRevews";

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
        path: "/checkout/:id",
        element: <CheckOut></CheckOut>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orderreviews",
        element: <OrderRevews></OrderRevews>,
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
