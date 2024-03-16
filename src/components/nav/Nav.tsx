import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav className='py-4 border-b'>
            <div className="container mx-auto flex justify-between items-center px-6">
                <ul className="flex gap-6 text-lg font-semiboldw-1/3">
                    <li className='text-primary'>Rants</li>
                    <li>People</li>
                    <li>Community</li>
                </ul>

                    <div className="search w-1/3">
                        <form action="" className=''>
                            <input type="text" className='py-4 border-none bg-primary bg-opacity-15 rounded w-full px-4 focus:outline-primary text-gray-400' placeholder='What are you looking for' />
                        </form>
                    </div>
                <div className='flex gap-4'>
                    {/* <Link href="/signup"><button className='py-2.5 px-6 bg-primary text-white rounded'>Join rantr</button></Link>
                <Link href="/login"><button className='py-2.5 px-6 bg-gray-600 bg-opacity-30  rounded'>Signin</button></Link> */}

                <span className='h-10 w-10 rounded-full bg-primary bg-opacity-40'></span>
                <span className='h-10 w-10 rounded-full bg-primary bg-opacity-40'></span>
                <span className='h-10 w-10 rounded-full bg-primary bg-opacity-40'></span>

            </div>


        </div>
    </nav >
  )
}
