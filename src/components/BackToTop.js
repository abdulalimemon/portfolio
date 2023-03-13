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
        <div className='fixed bottom-4 right-4'>
            <button
                type='button'
                onClick={scrollToTop}
                className={`inline-flex items-center p-2 md:p-3 rounded-full shadow-lg text-base-100 bg-secondary hover:opacity-80 transition-opacity overflow-y-auto ${isVisible ? 'flex' : 'hidden'}`}
            >
                <BiUpArrowAlt className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    );
};

export default BackToTop;