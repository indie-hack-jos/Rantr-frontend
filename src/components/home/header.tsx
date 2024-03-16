export default function FeedHeader() {
  return (
  <header className="w-full bg-white shadow-sm px-10 py-6 border rounded">
        <div className="flex gap-6 items-center justify-center">
            <div className="profile">
                <div className="h-14 w-14 rounded-full bg-primary"></div>
            </div>
            <div className="border h-16 rounded-md grow flex items-center px-4">
                <div className="text-gray-400">Rant About somthing...</div>
            </div>
           

        </div>
        <div className="flex justify-between mt-3">
                <div></div>
                <button className="py-2.5 px-8 rounded-md bg-primary text-white font-semibold flex gap-2 items-center ">
                    Rant
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
  <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
</svg>

                    </span>
                    </button>
            </div>
  </header>

  )
}
