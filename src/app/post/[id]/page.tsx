import BackButton from '@/components/postDetail/backButton'
import Post from '@/components/postDetail/post'
import { HomePageLayout } from '@/layouts/homePageLayout'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <HomePageLayout>
     <main className='px-4'>
        <BackButton />

        {/* main post details */}
       <Post />

        <section className='comment md:w-[85%] mt-4'>
            <form className='relative w-full'>
                
                <textarea name="" id="" rows={2} className='focus:outline-none border border-gray-400 w-full rounded p-3 text-sm' placeholder='Type a comment...'></textarea>

                  <h3 className='my-3'>Comments</h3>
                <div className="flex flex-col gap-2">
                  <div className="comment-card bg-secondary rounded p-3">

                    <header className='text-[0.95rem]'>
                        <h4 className='font-semibold'>@lucid</h4>

                    </header>
                      <div>
                        <p>
                          Lorem ipsum dolor sit amet.
                        </p>
                      </div>
                  </div>


                  <div className="comment-card bg-secondary rounded p-3">

<header className='text-[0.95rem]'>
    <h4 className='font-semibold'>@Tobi</h4>

</header>
  <div>
    <p>
      Ahh wahalaaaa ooooo, aye le oo
    </p>
  </div>
</div>
                </div>
            </form>
        </section>

     </main>
    </HomePageLayout>
  )
}

export default page
