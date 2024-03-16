import Nav from '@/components/nav/nav';
import { Sidebar } from '@/components/nav/sidebar'
import React, { FC } from 'react'

interface LayoutProps {
    children: React.ReactNode;
  }

export const HomePageLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className='w-full flex min-h-screen'>

       
        <div className="fixed bg-white border border-r h-screen max-h-screen overflow-hidden">
            <Sidebar />
        </div>

        <div className="grow">
            <Nav />
            {children}
        </div>
   
      


    </main>
  )
}
