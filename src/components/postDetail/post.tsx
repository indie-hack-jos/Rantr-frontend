import React from 'react'
import { open_sans, roboto } from '../fonts'

const Post = () => {
  return (
    <section className='mt-4 md:w-[85%] px-2'>
    <header className='flex items-center gap-4'>
                <div className="avatar h-[3rem] w-[3rem] rounded-full bg-gray-200">
                    {/* <img src= className='h-full w-full object-cover rounded-full' alt="" /> */}
                </div>

                <div className="user-data flex-col">
                    <h5 className='font-[400]'>Goody Ezeokafor</h5>
                    <p className="text-sm text-gray-500">Enginering lead at changera</p>
                    <p className="text-sm text-gray-500">10hours ago</p>

                </div>


            </header>


            <div className={`${open_sans.className} text-[15px] post-body mt-4 tracking-wide leading-relaxed text-primary`}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quod beatae fugit, necessitatibus vitae vel quae illo dignissimos ullam. Sed, laudantium. Rerum fugit hic itaque sapiente, perspiciatis exercitationem laboriosam iusto necessitatibus sequi, amet expedita eos ullam adipisci nulla vero molestiae magni ipsam aperiam ea ex quisquam molestias. Quod, ipsam incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptatum, veritatis nam nesciunt obcaecati eos quas ab voluptas similique hic?</p>


            </div>
            <footer className="card-footer flex justify-between mt-5">
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

            
    </section>
  )
}

export default Post