import { roboto } from '@/components/fonts'
import BackButton from '@/components/postDetail/backButton'
import Comments from '@/components/postDetail/comment'
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

        {/* comment */}
        <Comments />
        
       

      </main>
    </HomePageLayout>
  )
}

export default page
