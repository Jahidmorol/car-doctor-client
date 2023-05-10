import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/sheared/footer/Footer";
import Header from "../pages/sheared/header/Header";

const Main = () => {
  return (
    <div>
      <div className="w-[85%] mx-auto">
        <Header></Header>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
