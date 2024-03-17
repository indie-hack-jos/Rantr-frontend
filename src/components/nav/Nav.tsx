import Link from 'next/link'
import avatar from "../../../public/avatar.png"
import { raleway, quicksand } from '../fonts'

export default function Nav() {
    return (
        <nav className={`${quicksand.className} pt-3 pb-2 md:py-6 shadow bg-white sticky top-0 z-20`}>
            <div className="hidden container mx-auto md:flex justify-between items-center px-6">
                <ul className="flex items-center gap-6 font-semiboldw-1/3">
                    <li className='text-primary bg-primary bg-opacity-20 py-2 px-4 rounded-full'>Rants</li>
                    <li className='text-gray-400'>People</li>
                    <li className='text-gray-400'>Community</li>
                </ul>

                <div className="search w-1/3">
                    <form action="" className='relative'>
                        <span className="absolute top-2.5 left-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </span>
                        <input type="text" className='py-3 border-none bg-primary bg-opacity-15 rounded-lg w-full px-10 focus:outline-primary text-gray-400 text-sm' placeholder='What are you looking for' />
                    </form>
                </div>
                <div className='flex gap-4 cursor-pointer'>
                    {/* <Link href="/signup"><button className='py-2.5 px-6 bg-primary text-white rounded'>Join rantr</button></Link>
                <Link href="/login"><button className='py-2.5 px-6 bg-gray-600 bg-opacity-30  rounded'>Signin</button></Link> */}

                    <span className='h-8 w-8 rounded-full bg-slate-800 text-white flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>


                    </span>
                    <span className='h-8 w-8 rounded-full bg-primary bg-opacity-40  flex items-center justify-center'>

                    </span>
                    <span className='h-8 w-8 rounded-full bg-primary bg-opacity-40'>
                        <img src={avatar.src} className='w-full h-full rounded-full' alt="" />
                    </span>

                </div>


            </div>

            {/* mobile nav */}

            <div className="flex flex-col md:hidden px-6 gap-6">
                <div className="flex justify-between items-center">

                    <h1 className='text-xl font-semibold'>Rantr.</h1>


                    <div className="flex gap-4 items-center">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </span>

                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </span>
                    </div>
                </div>

                <div className={`flex justify-between text-primary px-6 pt-2 text-sm ${quicksand.className}`}>
                    <div className='py-1 px-3 bg-primary bg-opacity-30 rounded-full font-semibold'>Rants</div>
                    <div className='text-gray-400'>People</div>
                    <div className='text-gray-400'>Community</div>
                </div>

            </div>

        </nav >
    )
}
