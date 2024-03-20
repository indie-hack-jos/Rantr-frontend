'use client'
import Modal from '@/components/home/modal';
import Popular from '@/components/home/popularCard';
import Nav from '@/components/ui/nav/Nav';
import { BottomNav } from '@/components/ui/nav/bottomNav';
import { Sidebar } from '@/components/ui/nav/sidebar'
import React, { FC, useState } from 'react'
import { raleway } from '@/components/fonts';

interface LayoutProps {
    children: React.ReactNode;
  }

export const HomePageLayout: FC<LayoutProps> = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

  return (
    <main className='w-full md:flex'>
            <Modal modalOpen={modalOpen} handleModal={handleModal}  />
    
        <div className="hidden md:flex w-[14%] px-4 h-screen max-h-screen overflow-hidden bg-white border border-r sticky left-0 top-0 ">
            <Sidebar handleModal={handleModal}  />
        </div>

        <div className="md:w-[86%]">
            <Nav />

          
            <section className="w-full max-w-full md:container mx-auto md:flex gap-8">
      

      <div className={`${raleway.className} md:w-2/3 min-h-screen py-6`}>
        
            {children}
      </div>



      <div className="md:w-1/3 hidden md:flex flex-col relative">

        <Popular />
      


      </div>
    </section>
        </div>
   
      
<BottomNav handleModal={handleModal} />

    </main>
  )
}
