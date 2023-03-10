import React from 'react';
import { Outlet } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

const NotFound = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <BackToTop></BackToTop>
        </>
    );
};

export default NotFound;