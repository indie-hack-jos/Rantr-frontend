import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="container mx-auto h-svh flex flex-col items-center justify-center px-3">

            <div className='md:w-[33%]'>
                
                <header className='text-center'>
                    <h2 className='text-2xl font-bold mb-2 text-primary'>Rantr.</h2>
                    <h3 className='text-xl text-gray-600'>Welcome back,</h3>
                    <h5 className='text-xl text-gray-600'>Signin to your account</h5>
                </header>

                <form className='flex flex-col gap-2 mt-8 w-full'>

                    <div className='w-full relative'>

                        <label htmlFor="" className='text-sm'>Username</label>
                        <input type="text" className='focus:outline-none w-full border border-gray-400 py-3 px-2 rounded' placeholder='Enter username' />

                        <span className='absolute right-3 bottom-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>

                        </span>
                    </div>

                    <div className='w-full relative'>
                        <label htmlFor="" className='text-sm'>Password</label>

                        <input type="text" className='focus:outline-none w-full border border-gray-400 py-3 px-2 rounded' placeholder='enter password' />
                        <span className='absolute right-3 bottom-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>


                        </span>
                    </div>

                    <button className="w-full bg-primary text-white rounded py-3 mt-3">
                        Signin
                    </button>
                    <p className='cursor-pointer'>Dont have an account? <Link href="/signup" className='text-primary font-semibold'>Signup</Link></p>
                </form>
            </div>
        </main>
    )
}

export default page