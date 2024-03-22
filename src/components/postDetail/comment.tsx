import React from 'react'
import { open_sans, poppins, raleway, roboto } from '../fonts'

const Comments = () => {
  return (
    <section className='comment m mt-4'>
    <form className='relative w-full'>

      <textarea name="" id="" rows={2} className='focus:outline-none border border-gray-400 w-full rounded p-3 text-sm' placeholder='Type a comment...'></textarea>

      <h3 className='my-3'>Comments</h3>
      <div className={`flex flex-col text-sm md:px-5 ${open_sans.className}`}>
        <div className="comment-card rounded p-3">

          <div className='text-[0.95rem] flex gap-2 items-center'>
            {/* avatar */}
            <div className='h-8 w-8 overflow-hidden bg-primary rounded-full'>
                <span className=''></span>
            </div>
            {/* user name */}
            <div className="flex flex-col">
              <p className='text-sm'>Lucid</p>
              <p className="text-xs text-gray-500">Backend Dev | Blockchain - 2hours ago</p>

             
            </div>

          </div>
          <div className='py-2 text-sm'>
                <p className=''>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis!
                </p>
              </div>

        </div>

     <div className="comment-card rounded p-3">

          <div className='text-[0.95rem] flex gap-2 items-center'>
            {/* avatar */}
            <div className='h-8 w-8 overflow-hidden bg-primary rounded-full'>
                <span className=''></span>
            </div>
            {/* user name */}
            <div className="flex text-sm flex-col">
              <p>Lucid</p>
              <p className="text-xs text-gray-500">Backend Dev | Blockchain - 2hours ago</p>

             
            </div>

          </div>
          <div className='py-2'>
                <p className='text-sm'>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis!
                </p>
              </div>

        </div>

        <div className="comment-card rounded p-3">

<div className='text-[0.95rem] flex gap-2 items-center'>
  {/* avatar */}
  <div className='h-8 w-8 overflow-hidden bg-primary rounded-full'>
      <span className=''></span>
  </div>
  {/* user name */}
  <div className="flex flex-col text-sm">
    <p>Lucid</p>
    <p className="text-xs text-gray-500">Backend Dev | Blockchain - 2hours ago</p>

   
  </div>

</div>
<div className='py-2'>
      <p className='text-sm'>
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis!
      </p>
    </div>

</div>


      </div>
    </form>
  </section>
  )
}

export default Comments