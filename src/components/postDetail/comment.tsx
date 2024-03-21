import React from 'react'
import { roboto } from '../fonts'

const Comments = () => {
  return (
    <section className='comment md:w-[85%] mt-4'>
    <form className='relative w-full'>

      <textarea name="" id="" rows={2} className='focus:outline-none border border-gray-400 w-full rounded p-3 text-sm' placeholder='Type a comment...'></textarea>

      <h3 className='my-3'>Comments</h3>
      <div className={`flex flex-col gap-4 ${roboto.className}`}>
        <div className="comment-card bg-gray-100 border rounded p-3">

          <div className='text-[0.95rem] flex gap-2'>
            {/* avatar */}
            <div className='h-10 w-12 overflow-hidden bg-primary rounded-full py-2'></div>
            {/* user name */}
            <div className="flex flex-col">
              <p>Lucid</p>
              <p className="text-sm text-gray-500">Backend Dev | Blockchain - 2hours ago</p>

              <div className='py-2'>
                <p className=''>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis!
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="comment-card bg-gray-100 border rounded p-3">

          <div className='text-[0.95rem] flex gap-2'>
            {/* avatar */}
            <div className='h-10 w-12 overflow-hidden bg-primary rounded-full py-2'></div>
            {/* user name */}
            <div className="flex flex-col">
              <p>Lucid</p>
              <p className="text-sm text-gray-500">Backend Dev | Blockchain - 2hours ago</p>

              <div className='py-2'>
                <p className=''>
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, officiis!
                </p>
              </div>
            </div>

          </div>

        </div>


      </div>
    </form>
  </section>
  )
}

export default Comments