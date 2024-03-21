import { poppins, raleway } from "@/components/fonts"
import Link from "next/link"

const page = () => {
  return (
    <main className={`${poppins.className} w-full px-5  h-screen flex flex-col gap-5 justify-center items-center`}>


      <header className="md:w-[30%] w-full mb-2 text-center">
        <h1 className={`${raleway.className} text-xl font-bold`}> SIGN IN TO YOUR ACCOUNT</h1>

        <p className="text-gray-600">Please fill in your details to continue</p>
      </header>
      <form className='md:w-[35%] w-full flex flex-col gap-3'>
        <div className="w-full">
          <label className="text-[15px]">Username</label>
          <input type="text" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' />
        </div>

        <div className="w-full">
          <label className="text-[15px]">Password</label>
          <input type="password" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' />
        </div>


        <button className="bg-primary py-3 w-full rounded text-secondary ">Signin</button>
        <Link href="/auth/signup">  <p>Dont have an account? <span className='text-primary font-semibold'>Sign up</span></p></Link>
      </form>
    </main>
  )
}

export default page