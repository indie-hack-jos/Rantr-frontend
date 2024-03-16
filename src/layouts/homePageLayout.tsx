import Nav from '@/components/nav/nav';
import { Sidebar } from '@/components/nav/sidebar'
import React, { FC } from 'react'

interface LayoutProps {
    children: React.ReactNode;
  }

export const HomePageLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='w-full md:flex'>

    
        <div className="hidden md:flex w-52 h-screen max-h-screen overflow-hidden bg-white border border-r sticky left-0 top-0 ">
            <Sidebar />
        </div>

        <div className="grow">
            <Nav />

          
            {children}
        </div>
   
      


    </main>
  )
}
