import React from 'react';
import { NavLink } from 'react-router-dom';

const LaptopMenuLinks = () => {
    return (
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 text-primary font-semibold mr-2 border-[#36D399]"
                            : "text-neutral mr-2"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jj' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 mr-2 border-[#36D399]"
                            : "text-neutral mr-2"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 text-primary font-semibold mr-2 border-[#36D399]"
                            : "text-neutral mr-2"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/jj' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 mr-2 border-[#36D399]"
                            : "text-neutral mr-2"}>
                        Home
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default LaptopMenuLinks;