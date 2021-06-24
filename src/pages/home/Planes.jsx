import React from 'react';
import HeaderHome from '../../components/home/Header';
import InsidePlanes from '../../components/home/InsidePlanes'
import PlanesPremium from '../../components/home/PlanesPremium'
import Footer from '../../components/home/Footer';

const Planes = () => (
    <div className="App">
        <HeaderHome />
        <InsidePlanes />
        <PlanesPremium />
        <Footer />
    </div>
);

export default Planes;