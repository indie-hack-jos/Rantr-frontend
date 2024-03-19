import { HomePageLayout } from '@/layouts/homePageLayout'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <HomePageLayout>
     <div className='py-4 px-6'>
          <Link href="/" className="bg-gray-100 py-2 px-6 rounded text-sm">
            Back
          </Link>
      </div>
    </HomePageLayout>
  )
}

export default page
