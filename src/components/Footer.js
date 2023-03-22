import React from 'react';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-color-section'>
            <div className="footer footer-center p-10 bg-[#0C1222] opacity-80 text-base-content rounded">
                <div className="grid grid-flow-col gap-3">
                    <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5F7FA] to-[#B8C6DB]'>Abdul Alim Emon</h2>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://www.linkedin.com/in/abdulalimemon/' className="p-2 rounded-full bg-accent hover:bg-info text-secondary mr-2" title='LinkedIn Profile' target="_blank" rel="noreferrer"><FaLinkedinIn className='w-6 h-6' /></a>
                        <a href='https://github.com/Emon02' className="p-2 rounded-full bg-accent hover:bg-info text-secondary mr-2" title='Github Profile' target="_blank" rel="noreferrer"><BsGithub className='w-6 h-6' /></a>
                        <a href='https://www.facebook.com/abdulalimemon02' className="p-2 rounded-full bg-accent hover:bg-info text-secondary" title='Facebook Profile' target="_blank" rel="noreferrer"><BsFacebook className='w-6 h-6' /></a>
                        <a className="p-2 rounded-full bg-accent hover:bg-info text-secondary" title='Send Email' href="mailto:abdulalimemon11@gmail.com"><MdMarkEmailUnread className='w-6 h-6' /></a>
                    </div>
                </div>
                <div>
                    <p className='text-primary'>Copyright © {year} - All right reserved by Abdul Alim Emon.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;