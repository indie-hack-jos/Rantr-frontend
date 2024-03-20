import Link from "next/link"

const page = () => {
    return (
      <main className='container mx-auto h-screen flex flex-col gap-4 justify-center items-center'>

            <header className="md:w-[30%] w-full mb-4 md:text-center">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <p className="text-gray-600">Please fill in your details to continue</p>
            </header>
          <form className='md:w-[35%] flex flex-col gap-3'>
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