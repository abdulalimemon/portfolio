import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from 'react-router-dom';
import emon from '../assets/emon.png';

import { MdContactMail, MdMarkEmailUnread } from 'react-icons/md';
import { BsEnvelopeCheckFill } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';

const MobileMenu = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='lg:hidden'>
            {
                showSidebar ? (
                    <CgMenuGridO className='w-6 h-6 mx-2 text-secondary'></CgMenuGridO>
                ) : (
                    <CgMenuGridO onClick={() => setShowSidebar(!showSidebar)} className='w-6 h-6 mx-2 text-secondary'></CgMenuGridO>
                )
            }
            <div className={`top-0 right-0 w-10/12  px-5 py-8 bg-[#161B22] fixed h-screen min-h-screen z-50 overflow-y-auto ease-in-out duration-500 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                }`} >

                <div className='flex justify-between items-center py-5'>
                    <img src={emon} alt='Emon' className="w-36 h-14 fixed z-50 flex items-center justify-center"></img>
                    <button
                        className="text-xl bg-secondary rounded-full p-2 cursor-pointer fixed right-7 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <MdOutlineClose className='w-6 h-6 text-black border-0'></MdOutlineClose>
                    </button>
                </div>


                <div className="p-5 mt-10">
                    <div >
                        <div className="space-y-8 flex items-center justify-center flex-col">
                            <NavLink to='/' className={({ isActive }) =>
                                isActive
                                    ? "text-secondary font-bold mr-2 flex items-center text-xl"
                                    : "text-neutral mr-2 flex items-center text-xl"}>
                                <IoHome className='w-8 h-8 mr-5 text-secondary'></IoHome>
                                Home
                            </NavLink>

                            <NavLink to='/contact' className={({ isActive }) =>
                                isActive
                                    ? "text-secondary font-bold mr-2 flex items-center text-xl"
                                    : "text-neutral mr-2 flex items-center text-xl"}>
                                <MdContactMail className='w-8 h-8 mr-5 text-secondary'></MdContactMail>
                                Contact
                            </NavLink>

                            <NavLink to='/home' className={({ isActive }) =>
                                isActive
                                    ? "text-secondary font-bold mr-2 flex items-center text-xl"
                                    : "text-neutral mr-2 flex items-center text-xl"}>
                                <IoHome className='w-8 h-8 mr-5 text-secondary'></IoHome>
                                About
                            </NavLink>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MobileMenu;