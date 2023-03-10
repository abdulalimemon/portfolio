import React, { useState } from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';

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


                <div className='flex justify-between items-center'>
                    <h2 className="text-2xl text-white fixed z-50 flex items-center justify-center">
                        <HiOutlineMenuAlt1 className='w-7 h-7 error-text border-0 mr-4'></HiOutlineMenuAlt1>
                        Menu
                    </h2>
                    <button
                        className="text-xl error-text cursor-pointer fixed right-7 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        <MdOutlineClose className='w-7 h-7 error-text border-0'></MdOutlineClose>
                    </button>
                </div>


                <div >
                    <div className="flex items-center p-2 space-x-4 success h-20 mt-8">
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full" />
                        <div>
                            <h2 className="text-lg font-semibold">Leroy Jenkins</h2>
                            <span className="flex items-center space-x-1">
                                <Link className="text-xs hover:underline ">View profile</Link>
                            </span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;