import React from 'react';

const GetInTouch = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='py-20'>
                    <div className='text-center'>
                        <p className='text-sm text-primary'>What’s Next?</p>
                        <h2 className='text-4xl md:text-6xl font-bold pb-8 pt-5'>Get In Touch</h2>
                        <div className='w-10/12 md:w-8/12 xl:w-6/12 mx-auto pb-8'>
                            <p className=''>Although I’m not currently looking for any new opportunities, if you have any new ideas or Freelance projects my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                        </div>
                        <button className="btn btn-outline btn-secondary normal-case text-sm btn-lg">
                            <a href="mailto:abdulalimemon11@gmail.com">Say Hello
                            </a>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;