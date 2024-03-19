'use client'
import Modal from '@/components/home/modal';
import Popular from '@/components/home/popularCard';
import Nav from '@/components/nav/Nav';
import { BottomNav } from '@/components/nav/bottomNav';
import { Sidebar } from '@/components/nav/sidebar'
import React, { FC, useState } from 'react'

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
    
        <div className="hidden md:flex w-56 px-4 h-screen max-h-screen overflow-hidden bg-white border border-r sticky left-0 top-0 ">
            <Sidebar handleModal={handleModal}  />
        </div>

        <div className="grow">
            <Nav />

          
            <section className="container mx-auto md:flex ">
      

      <div className="md:w-2/3 w-full min-h-screen py-6">
        
            {children}
      </div>



      <div className="md:grow">

        <Popular />

      </div>
    </section>
        </div>
   
      
<BottomNav handleModal={handleModal} />

    </main>
  )
}
