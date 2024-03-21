'use client'
import Link from "next/link"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import { poppins, raleway } from "@/components/fonts"

const page = () => {

  const [step, setStep] = useState<number>(22)

  const [username, setUserrname] = useState("")
  const [password, setPassword] = useState("")


  const handleStep = (num: number) => {

    setStep(num)
  }

  return (
    <main className={`${poppins.className} w-full px-5 h-screen flex flex-col gap-5 justify-center items-center`}>

      <header className="w-full md:w-[40%] text-center mb-2 px-3">
        <p className="text-gray-600">Hey, welcome</p>
        <h1 className={`${raleway.className} text-xl font-bold`}> LET SIGN YOU UP</h1>
        <Progress value={step} className="mt-6 border" />

      </header>
      <form className='w-full flex flex-col gap-2 md:w-[40%]'>

        {step === 22 && (
          <div>
            <label className="">Create Your username</label>
            <input type="text" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' value={username} onChange={(e) => setUserrname(e.target.value)} placeholder="johndoe@gmail.com" />
          </div>
        )}

        {step === 60 && (
          <div>
            <label className="">Create Password</label>
            <input type="password" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' placeholder="Your password" />
          </div>
        )}


        <button className="bg-primary text-white py-3 w-full rounded text-secondary-foreground " type="button" onClick={() => handleStep(60)} >Submit</button>
        <Link href="/auth/signin">  <p>Already have an account? <span className='text-primary font-semibold'>Sign in</span></p></Link>

      </form>
    </main>
  )
}

export default page