import Link from 'next/link'
import React from 'react'

const Step1 = () => {
  return (
    <div className='w-full md:w-[40%]'>
        <header className="w-full">
            <p className="text-sm text-gray-500">Hey, welcome</p>
            <h1 className="text-2xl font-bold">Let Sign You Up</h1>
        </header>
        <form className='w-full flex flex-col gap-2 md:w-[40%]'>
            <label>Email</label>
            <input type="text" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' placeholder="johndoe@gmail.com" />

            <button className="bg-primary py-3 w-full rounded text-secondary ">Submit</button>
            <Link href="/auth/signin">  <p>Already have an account? <span className='text-primary font-semibold'>Sign in</span> instead</p></Link>

        </form>
    </div>
  )
}

export default Step1