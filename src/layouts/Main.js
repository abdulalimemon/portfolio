import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BackToTop></BackToTop>
            <Toaster />
        </div>
    );
};

export default Main;