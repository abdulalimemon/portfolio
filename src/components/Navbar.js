import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import LaptopMenuLinks from './LaptopMenuLinks';
import emon from '../assets/emon.png';

const NavBar2 = () => {
    return (
        <div className="drawer drawer-end">
            <input id="Navbar-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className='bg-[#090A27]'>
                    <div className="container mx-auto navbar">
                        <div className="navbar-start">
                            <Link to='/' className="font-bold text-xl md:ml-0">
                                <img className='w-48 h-11 md:h-14' src={emon} alt="Emon" />
                            </Link>
                        </div>
                        <LaptopMenuLinks></LaptopMenuLinks>
                        <div className="navbar-end">
                            <Link className="p-2 rounded-full bg-accent hover:bg-info text-secondary mr-2"><FaLinkedinIn className='w-5 h-5' /></Link>
                            <Link className="p-2 rounded-full bg-accent hover:bg-info text-secondary mr-2"><BsGithub className='w-5 h-5' /></Link>
                            <Link className="p-2 rounded-full bg-accent hover:bg-info text-secondary"><BsFacebook className='w-5 h-5' /></Link>
                        </div>
                        <div className="flex-none lg:hidden">
                            <label htmlFor="Navbar-drawer" className=" lg:hidden">
                                <CgMenuGridO className='w-6 h-6 mx-4 text-secondary'></CgMenuGridO>
                            </label>
                        </div>
                    </div>
                </div>

                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="Navbar-drawer" className="drawer-overlay"></label>
                <ul className="menu w-9/12 md:w-8/12 bg-base-100 flex items-center justify-center">
                    {/* <!-- Sidebar content here --> */}
                    <div className=''>
                        <li><Link>Sidebar Item 1</Link></li>
                        <li><Link>Sidebar Item 2</Link></li>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default NavBar2;