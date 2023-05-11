import React from 'react';
import AboutUs from './aboutUs/AboutUs';
import Banner from './banner/Banner';
import Service from './service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Service></Service>
        </div>
    );
};

export default Home;