import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridO } from 'react-icons/cg';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className='bg-[#090A27]'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link className="btn btn-ghost normal-case text-xl">Emon</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Item 1</Link></li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="p-2 rounded-full bg-info hover:bg-accent text-primary mr-2"><FaLinkedinIn className='w-5 h-5' /></Link>
                    <Link className="p-2 rounded-full bg-info hover:bg-accent text-primary mr-2"><BsGithub className='w-5 h-5' /></Link>
                    <Link className="p-2 rounded-full bg-info hover:bg-accent text-primary"><BsFacebook className='w-5 h-5' /></Link>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <CgMenuGridO className='w-5 h-5 text-primary'></CgMenuGridO>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;