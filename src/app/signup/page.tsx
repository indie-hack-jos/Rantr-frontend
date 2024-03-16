import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="container mx-auto h-svh flex items-center justify-center px-4">
            <div className='md:w-[33%]'>

                <header className='text-center'>
                    <h2 className='text-2xl font-bold mb-2 text-primary'>Rantr</h2>
                  
                    <h5 className='text-xl text-gray-600'>Create an account</h5>
                </header>

                <form className='flex flex-col gap-2 mt-6 w-full'>

                    <div className='w-full relative'>

                        <label htmlFor="" className='text-sm'>Username</label>
                        <input type="text" className='focus:outline-none w-full border border-gray-400 py-3 px-2 rounded' placeholder='Enter username' />

                        <span className='absolute right-3 bottom-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </span>
                    </div>

                    <div className='w-full relative'>

                        <label htmlFor="" className='text-sm'>Email adress</label>
                        <input type="text" className='focus:outline-none w-full border border-gray-400 py-3 px-2 rounded' placeholder='Enter username' />

                        <span className='absolute right-3 bottom-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
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

                    <div className='w-full relative'>
                        <label htmlFor="" className='text-sm'>Confirm password</label>

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
                    <p className='cursor-pointer'>Already have an account? <Link href="/login" className='text-primary font-semibold'>Signin</Link></p>
                </form>
            </div>
        </main>
    )
}

export default page