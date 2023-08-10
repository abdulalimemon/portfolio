import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="bg-color-home">
            <div className='flex bg-base-100 opacity-80 items-center p-16'>
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center text-gray-100">
                        <h2 className="mb-8 font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#FFCD38] to-[#FF8D29]">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl text-neutral">Sorry, we couldn't find this page.</p>
                        <p className="mt-4 mb-8 text-neutral">But don't worry, you can find many other things on my homepage.</p>
                        <Link rel="noopener noreferrer" to='/' className="btn btn-outline btn-secondary normal-case text-sm btn-lg">Back to homepage</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;