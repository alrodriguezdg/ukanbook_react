import React from 'react';
import HeaderHome from '../components/home/Header';
import BannerHome from '../components/home/Banner';
import Userbenefits from '../components/home/UsersBenefits';
import Subjects from '../components/home/Subjects';
import Testimonials from '../components/home/Testimonials';
import VideoIndex from '../components/home/Videoindex';
import BlogIndex from '../components/home/Blog';
import Footer from '../components/home/Footer';
 
import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/css/home/General.css'

const Index = () => (
    <div className="Index">
        <HeaderHome />
        <BannerHome />
        <Userbenefits />
        <Subjects />
        <Testimonials />
        <VideoIndex />
        <BlogIndex />
        <Footer />
    </div>
);

export default Index;