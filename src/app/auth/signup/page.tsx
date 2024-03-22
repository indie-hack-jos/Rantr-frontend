'use client'
import Link from "next/link"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { poppins, quicksand, raleway } from "@/components/fonts"

const Page = () => {

  const [step, setStep] = useState<number>(22)

  const [username, setUserrname] = useState("")
  const [password, setPassword] = useState("")


  const handleStep = (num: number) => {

    setStep(num)
  }

  return (
    <main className={`${poppins.className} w-full px-5 h-screen flex flex-col gap-5 justify-center items-center`}>

      <header className="w-full md:w-[40%] text-center mb-2 px-3">
        <p className={`${quicksand.className} text-gray-600`}>Hey, welcome</p>
        <h1 className={`${raleway.className} text-xl font-semibold`}> Let sign you up</h1>
        <Progress value={step} className="mt-6 border" />

      </header>
      <form className='w-full flex flex-col gap-2 md:w-[40%]'>

        {step === 22 && (
          <div>
            <label className={`text-[15px] text-gray-500`}>Create Your username</label>
            <input type="text" className={` ${quicksand.className} w-full py-3 px-3 rounded border border-gray-400 focus:outline-none`} value={username} onChange={(e) => setUserrname(e.target.value)} placeholder="johndoe@gmail.com" />

            <div className={`${quicksand.className} error text-danger text-sm`}>
                username taken, try another
            </div>
          </div>
        )}

        {step === 60 && (
          <div>
            <label className="text-[15px] text-gray-500">Create Password</label>
            <input type="password" className={`${quicksand.className} w-full py-3 px-3 rounded border border-gray-400 tracking-wider focus:outline-none`} placeholder="Your password" />
          </div>
        )}


        <button className="bg-primary text-white py-3 w-full rounded text-secondary-foreground " type="button" onClick={() => handleStep(60)} >Submit</button>
        <Link href="/auth/signin">  <p className="text-gray-600 text-[15px]">Already have an account? <span className='text-primary'>Sign in</span></p></Link>

      </form>
    </main>
  )
}

export default Page