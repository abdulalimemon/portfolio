import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import emon from '../assets/emon.png';
import { MdContactMail } from 'react-icons/md';
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
            <div className={`top-0 right-0 w-10/12  py-5 px-10 bg-[#161B22] fixed h-screen min-h-screen z-50 overflow-y-auto ease-in-out duration-500 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                }`} >

                <div className='flex justify-between items-center py-5'>
                    <button
                        className="text-xl bg-secondary rounded-full p-2 cursor-pointer fixed right-7 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <MdOutlineClose className='w-6 h-6 text-black border-0'></MdOutlineClose>
                    </button>
                </div>


                <div className="p-5 mt-10">
                    <div className="space-y-10 flex items-center justify-center flex-col">
                        <div className='flex items-center justify-center'>
                            <IoHome className='w-8 h-8 mr-5 text-secondary'></IoHome>
                            <NavLink to='/' className={({ isActive }) =>
                                isActive
                                    ? "text-secondary font-bold mr-2 flex items-center text-lg border-b-2 border-primary"
                                    : "text-neutral font-bold mr-2 flex items-center text-lg"}> Home
                            </NavLink>
                        </div>
                        <div className='flex items-center justify-center'>
                            <MdContactMail className='w-8 h-8 mr-5 text-secondary'></MdContactMail>
                            <NavLink to='/contact' className={({ isActive }) =>
                                isActive
                                    ? "text-secondary font-bold mr-2 flex items-center text-lg border-b-2 border-primary"
                                    : "text-neutral font-bold mr-2 flex items-center text-lg"}> Contact
                            </NavLink>
                        </div>
                        <div className='flex items-center justify-center'>
                            <IoHome className='w-8 h-8 mr-5 text-secondary'></IoHome>
                            <NavLink to='/' className={({ isActive }) =>
                                isActive
                                    ? "text-secondary font-bold mr-2 flex items-center text-lg border-b-2 border-primary"
                                    : "text-neutral font-bold mr-2 flex items-center text-lg"}> Home
                            </NavLink>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button className="btn btn-outline btn-secondary normal-case text-md btn-lg px-20">
                                Resume
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;