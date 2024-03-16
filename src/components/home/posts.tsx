import React from 'react'
import profileImg from "../../../public/goody.jpeg"
export default function Posts() {
    interface rants {
        username: string,
        bio: string,
        post: string,
        likes: number
    }

    const rants: rants[] = [
        {username: "Goody_Ezeokafor", bio: "Sofwtare engineer | founder", post: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam ab inventore enim autem tempora a perspiciatis porro vero earum.", likes: 2},

        {username: "Ola of jos", bio: "Here to rant | junior fullstack", post: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam ab inventore enim autem tempora a perspiciatis porro vero earum.", likes: 3},

        {username: "Tobi Dev", bio: "Backend Dev | thoughts", post: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam ab inventore enim autem tempora a perspiciatis porro vero earum.", likes: 1},
    ]
    return (
        <section className='w-full flex flex-col gap-4 mt-6 px-2'>
                {rants.map((rant) => (
                    <div className="postcard bg-white border rounded-lg py-5 px-10">
                <header className='flex items-center gap-4'>
                    <div className="avatar h-12 w-12 rounded-full bg-gray-200">
                        <img src={profileImg.src} className='h-full w-full object-cover rounded-full' alt="" />
                    </div>

                    <div className="user-data flex-col">
                        <h5>{rant.username}</h5>
                        <p className="text-sm text-gray-400">{rant.bio}</p>
                        <p className="text-sm text-gray-400">10hours ago</p>

                    </div>


                </header>

                <div className="rant-body py-4 md:w-2/3">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam ab inventore enim autem tempora a perspiciatis porro vero earum.
                    </p>
                </div>


                <footer className="card-footer flex justify-between py-4">
                    <div className='flex items-center cursor-pointer'>
                        <span className='hover:bg-red-500 p-1 rounded-full hover:bg-opacity-40 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </span>
                        <p className='text-sm'>1</p>

                    </div>
                    <div className='flex gap-1 items-center cursor-pointer'>
                        <span className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>

                        </span>
                        <p className='text-sm'>1</p>

                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <span className='hover:bg-red-500 p-1 rounded-full hover:bg-opacity-40 '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>

                        </span>
                       

                    </div>
                </footer>
            </div>

                ))}
            

        </section>
    )
}
