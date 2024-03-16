import React from 'react'
import FeedHeader from './header'
import Posts from './posts'

export const Feeds = () => {
  return (
    <div className='w-full md:px-8'>
        <FeedHeader />
        <Posts />

    </div>
  )
}