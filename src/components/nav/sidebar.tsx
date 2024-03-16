import React from 'react'

export const Sidebar = () => {
  return (
    <div className='w-44 h-full max-h-screen overflow-hidden px-4 py-7 text-center'>
        <header>
            <h1 className='text-2xl font-semibold text-primary'>Rantr.</h1>
        </header>

        <nav className="w-full h-full flex justify-center mt-20">
          <ul className='flex flex-col gap-6'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>

          </ul>
        </nav>
    </div>
  )
}
