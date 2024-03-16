import Link from 'next/link'
import avatar from "../../../public/avatar.png"

export default function Nav() {
    return (
        <nav className='py-4 border-b bg-white sticky top-0 z-20'>
            <div className="container mx-auto flex justify-between items-center px-6">
                <ul className="flex items-center gap-6 font-semiboldw-1/3">
                    <li className='text-primary bg-primary bg-opacity-20 py-2 px-4 rounded-full'>Rants</li>
                    <li className=''>People</li>
                    <li>Community</li>
                </ul>

                <div className="search w-1/3">
                    <form action="" className='relative'>
                        <span className="absolute top-4 left-2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                        </span>
                        <input type="text" className='py-4 border-none bg-primary bg-opacity-15 rounded-lg w-full px-10 focus:outline-primary text-gray-400' placeholder='What are you looking for' />
                    </form>
                </div>
                <div className='flex gap-4 cursor-pointer'>
                    {/* <Link href="/signup"><button className='py-2.5 px-6 bg-primary text-white rounded'>Join rantr</button></Link>
                <Link href="/login"><button className='py-2.5 px-6 bg-gray-600 bg-opacity-30  rounded'>Signin</button></Link> */}

                    <span className='h-8 w-8 rounded-full bg-primary bg-opacity-40'>

                    </span>
                    <span className='h-8 w-8 rounded-full bg-primary bg-opacity-40'></span>
                    <span className='h-8 w-8 rounded-full bg-primary bg-opacity-40'>
                        <img src={avatar.src} className='w-full h-full rounded-full' alt="" />
                    </span>

                </div>


            </div>
        </nav >
    )
}
