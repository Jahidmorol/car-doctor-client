// import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Login from "../layouts/Login";
import Main from "../layouts/Main";
import CheckOut from "../pages/checkOut/CheckOut";
import Home from "../pages/home/home/Home";
import SignIn from "../pages/login/SignIn";
import SignUp from "../pages/login/SignUp";
import OrderRevews from "../pages/orderReviews/OrderRevews";
import PrivateRoute from "./PrivateRoute";

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
        element: <PrivateRoute><OrderRevews></OrderRevews></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/orderreviews",
        element: <PrivateRoute><OrderRevews></OrderRevews></PrivateRoute>,
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
