import { HomePageLayout } from '@/layouts/homePageLayout'
import React from 'react'

function page() {
  return (
    <HomePageLayout>
      <div className='py-4 px-6'>
          <p className="bg-gray 100 py-2 px-4">
            Back
          </p>
      </div>
    </HomePageLayout>
  )
}

export default page