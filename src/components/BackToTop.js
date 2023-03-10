import React, { useEffect, useState } from 'react';
import { BiUpArrowAlt } from 'react-icons/bi';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className='fixed bottom-2 right-2'>
            <button
                type='button'
                onClick={scrollToTop}
                className={`inline-flex items-center p-3 rounded-full shadow-sm text-white bg-pink-600 transition-opacity hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-y-auto focus:ring-pink-500 ${isVisible ? 'flex' : 'hidden'}`}
            >
                <BiUpArrowAlt className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    );
};

export default BackToTop;