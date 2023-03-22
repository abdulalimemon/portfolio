import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MdOutlineError, MdMarkEmailUnread } from 'react-icons/md';
import { BsEnvelopeCheckFill } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';

const ContactForm = () => {
    const form = useRef();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        emailjs.sendForm('service_4qizxrk', 'template_tcrwuju', form.current, 'Yx6awojseorIqq-eL')
            .then((result) => {
                toast.success('Your message has been sent successfully. Thanks for your message.', {
                    icon: <BsEnvelopeCheckFill className='w-7 h-7 text-secondary'></BsEnvelopeCheckFill>,
                    style: {
                        borderRadius: '10px',
                        background: '#112240',
                        color: '#ffffff',
                    }
                })
            }, (error) => {
                toast.error('Something went wrong please try again.', {
                    icon: <MdOutlineError className='w-7 h-7 text-primary'></MdOutlineError>,
                    style: {
                        borderRadius: '10px',
                        background: '#112240',
                        color: '#ffffff',
                    }
                })
            });
    };

    return (

        <div className='py-16 bg-base-100 opacity-80'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-5 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl md:text-4xl font-bold leading-tight lg:text-5xl">Let's get in touch!</h2>
                        <div className="text-white py-5 lg:pr-10">
                            <p className='text-sm lg:text-base'>If you have any questions or suggestions regarding any projects, please don't hesitate to contact me. To contact me, fill out the contact form or you can reach out to me via email. I will do my best to respond to your inquiry as soon as possible.</p>
                        </div>
                        <div className='pb-10'>
                            <div className="space-y-4">
                                <p className="flex items-center">
                                    <IoHome className='w-7 h-7 mr-5 text-secondary'></IoHome>
                                    <span className='text-white'>Rangpur, Bangladesh</span>
                                </p>
                                <p className="flex items-center">
                                    <MdMarkEmailUnread className='w-7 h-7 mr-5 text-secondary'></MdMarkEmailUnread>
                                    <span className='text-white'>abdulalimemon11@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <form ref={form} className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="text-sm text-white">Full name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name."
                            className="input text-sm input-bordered w-full p-3 rounded bg-gray-800 mt-2 text-white"
                            name='name'
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name is Required.'
                                },
                                minLength: {
                                    value: 3,
                                    message: 'Name must be 3 characters or longer.'
                                }
                            })}
                        />
                        <label className="label">
                            <span className="label-text-alt">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                                {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                            </span>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email" className="text-sm text-white">Email</label>
                        <input
                            id="email" type="email" name='email'
                            className="input text-white input-bordered text-sm w-full p-3 outline-none rounded bg-gray-800 hover:bg-gray-800 mt-2" placeholder="Enter your email."
                            aria-invalid={errors.email ? "true" : "false"}
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email is Required.'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please provide a valid email address.'
                                }
                            })} />

                        <label className="label">
                            <label className="label-text-alt">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                            </label>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="subject" className="text-sm text-white">Subject</label>
                        <input
                            id="subject" type="text" name='subject'
                            className="input input-bordered text-sm w-full p-3 rounded bg-gray-800 mt-2 text-white"
                            placeholder="Enter your subject."
                            aria-invalid={errors.subject ? "true" : "false"}
                            {...register('subject', {
                                required: {
                                    value: true,
                                    message: 'Subject is Required.'
                                },
                                minLength: {
                                    value: 15,
                                    message: 'Subject must be 15 characters or longer.'
                                }
                            })}
                        />

                        <label className="label">
                            <label className="label-text-alt">
                                {errors.subject?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.subject.message}</span>}
                                {errors.subject?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.subject.message}</span>}
                            </label>
                        </label>
                    </div>
                    <div>
                        <label htmlFor="message" className="text-sm text-white">Message</label>
                        <textarea id="message" rows="3"
                            className="textarea textarea-bordered text-sm w-full p-3 rounded bg-gray-800 mt-2 text-white"
                            spellCheck="false"
                            placeholder="Enter your message."
                            name='message'
                            aria-invalid={errors.message ? "true" : "false"}
                            {...register('message', {
                                required: {
                                    value: true,
                                    message: 'Message is Required.'
                                },
                                minLength: {
                                    value: 50,
                                    message: 'Message must be 50 characters or longer.'
                                }
                            })}
                        ></textarea>

                        <label className="label">
                            <label className="label-text-alt">
                                {errors.message?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.message.message}</span>}
                                {errors.message?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.message.message}</span>}
                            </label>
                        </label>
                    </div>
                    <button type="submit" className="w-full btn btn-outline btn-secondary normal-case text-sm btn-lg hover:text-white">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;