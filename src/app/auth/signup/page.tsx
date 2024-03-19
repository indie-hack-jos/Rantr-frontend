const page = () => {
  return (
    <main className='container mx-auto h-screen flex justify-center items-center'>
        <form className='w-[30%] flex flex-col gap-2'>
            <label>Email</label>
            <input type="text" className='w-full py-3 px-3 rounded border border-primary focus:outline-none' placeholder="johndoe@gmail.com" />

            <button className="bg-primary py-3 w-full rounded text-secondary ">Next</button>
        </form>
    </main>
  )
}

export default page