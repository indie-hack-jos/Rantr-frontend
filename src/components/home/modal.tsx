'use client'
import React from 'react'
import { raleway } from '../fonts'

export default function Modal({ modalOpen, handleModal }: {
    modalOpen: boolean,
    handleModal: VoidFunction
}) {
    return (
        <div className={`${modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} fixed h-screen w-full bg-black z-30 bg-opacity-60 backdrop-blur-sm transition-opacity duration-150 ease-in-out`}>

            <div className="container h-full mx-auto flex justify-center items-center">

                <div className="bg-white w-full h-full flex flex-col justify-center md:h-auto md:w-[40%] p-6 md:p-10 rounded-md">
                       <div className="py-6">
                       <span className="py-1 px-3 bg-gray-100 rounded-lg text-sm inline-flex gap-2" onClick={handleModal}>
                            Back
                        </span>
                       </div>
                    <h1 className={`${raleway.className} text-xl font-semibold text-primary`}>Signin to your account</h1>

                    <form action="" className='my-4 container mx-auto flex flex-col gap-3'>
                        <div className='w-full relative'>

                            <label htmlFor="" className='text-sm'>Username</label>
                            <input type="text" className='focus:outline-none w-full border border-gray-400 py-3 px-3 rounded' placeholder='Enter username' />

                            <span className='absolute right-3 bottom-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                            </span>
                        </div>
                        <div className='w-full relative'>
                            <label htmlFor="" className='text-sm'>Password</label>

                            <input type="password" className='focus:outline-none w-full border border-gray-400 py-3 px-3 rounded tracking-wide' placeholder='Enter password' />
                            <span className='absolute right-3 bottom-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>


                            </span>
                        </div>
                        <button className=" p-3 w-full bg-primary text-white rounded">Sign in</button>
                        <p className={`${raleway.className} text-sm cursor-pointer`}>Dont have an account? <span className='text-primary'>Siginup</span></p>
                    </form>



                </div>
            </div>
        </div>
    )
}
