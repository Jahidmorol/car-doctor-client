import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/sheared/header/Header';

const Login = () => {
    return (
        <div className='w-[85%] mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Login;