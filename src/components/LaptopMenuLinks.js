import React from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/jj' className={({ isActive }) =>
                        isActive
                            ? "border-b-2 text-secondary font-semibold mr-2 border-secondary"
                            : "text-neutral mr-2"}>
                        Home
                    </NavLink>
                </li>
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
                            ? "border-b-2 text-secondary font-semibold mr-2 border-secondary"
                            : "text-neutral mr-2"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default LaptopMenuLinks;