import Link from "next/link"

const page = () => {
    return (
      <main className='container mx-auto h-screen flex justify-center items-center'>
          <form className='md:w-[30%] flex flex-col gap-2'>
          <div className="w-full">
            <label className="text-gray-500">Username/email</label>
              <input type="text" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' placeholder="johndoe@gmail.com" />
            </div>

            <div className="w-full">
            <label className="text-gray-500">Password</label>
              <input type="password" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' placeholder="Your password" />
            </div>
             
  
              <button className="bg-primary py-3 w-full rounded text-secondary ">Signin</button>
            <Link href="/auth/signup">  <p>Dont have an account? <span className='text-primary font-semibold'>Sign up</span></p></Link>
          </form>
      </main>
    )
  }
  
  export default page