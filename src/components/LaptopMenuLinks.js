import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCloudDownloadFill } from 'react-icons/bs';

const LaptopMenuLinks = () => {
    return (
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 text-secondary font-semibold mr-2 border-secondary"
                            : "text-neutral mr-2"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/contact' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 text-secondary font-semibold mr-8 border-secondary"
                            : "text-neutral mr-8"}>
                        Contact
                    </NavLink>
                </li>
                <div>
                    <button className="btn btn-outline btn-secondary text-black normal-case ">
                        Resume
                        <BsCloudDownloadFill className='w-5 h-5 ml-2 text-seconadry'></BsCloudDownloadFill>
                    </button>
                </div>
            </ul>
        </div>
    );
};

export default LaptopMenuLinks;