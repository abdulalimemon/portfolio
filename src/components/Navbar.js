import React from 'react';
import { Link } from 'react-router-dom';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import LaptopMenuLinks from './LaptopMenuLinks';
import emon from '../assets/emon.png';
import MobileMenu from './MobileMenu';

const Navbar = () => {
    return (
        <>
            <div className="navbar bg-[#090A27] py-0">
                <div className='container mx-auto'>
                    <div className="navbar-start py-0">
                        <Link to='/' className="font-bold text-xl md:ml-0">
                            <img className='w-40 md:w-48 h-11 md:h-12' src={emon} alt="Emon" />
                        </Link>
                    </div>

                    {/* Large Screen NavBar */}
                    <LaptopMenuLinks></LaptopMenuLinks>

                    {/* Social Link */}
                    <div className="navbar navbar-end">
                        <a className="p-2 rounded-full bg-accent hover:bg-info text-secondary mr-2" href='https://www.linkedin.com/in/abdulalimemon/' target="_blank" rel="noreferrer"><FaLinkedinIn className='w-5 h-5' /></a>
                        <a href='https://github.com/Emon02' className="p-2 rounded-full bg-accent hover:bg-info text-secondary mr-2" target="_blank" rel="noreferrer"><BsGithub className='w-5 h-5' /></a>
                        <a href='https://www.facebook.com/abdulalimemon02' className="p-2 rounded-full bg-accent hover:bg-info text-secondary" target="_blank" rel="noreferrer"><BsFacebook className='w-5 h-5' /></a>
                    </div>

                    {/* Mobile And Tab Screen NavBar */}
                    <div className='flex justify-between items-center content-center lg:hidden'>
                        <MobileMenu></MobileMenu>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;