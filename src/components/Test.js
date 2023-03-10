import React from 'react';
import { BiAt } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";
import { useForm } from 'react-hook-form';

const Test = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }


    return (
        <section className="container mx-auto">
            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-5/12 mx-auto">
                <div className="px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Log in</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div>
                            <div>
                                <label className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiAt className='w-5 h-5'></BiAt>
                                    </div>

                                    <input
                                        type="email" id="email"
                                        placeholder="Enter email address"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address.'
                                            }
                                        })} />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoIosFingerPrint className='w-5 h-5'></IoIosFingerPrint>
                                    </div>

                                    <input
                                        type="password" id="password"
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be 8 characters or longer.'
                                            }
                                        })}
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div className='pt-2'>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Log in
                                </button>
                            </div>
                        </div>
                    </form>

                    
                </div>
            </div>
        </section>
    );
};

export default Test;