import React from 'react'
import FeedHeader from './header'
import Posts from '../post/posts'

export const Feeds = () => {
  return (
    <div className='w-full'>
        <FeedHeader />
        <Posts />

    </div>
  )
}
