import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="flex items-center p-16 bg-base-100 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-error">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-gray-400">But don't worry, you can find many other things on my homepage.</p>
                    <Link rel="noopener noreferrer" to='/' className="btn btn-outline btn-secondary normal-case text-sm btn-lg">Back to homepage</Link>
                </div>
            </div>
        </section>
    );
};

export default NotFoundPage;