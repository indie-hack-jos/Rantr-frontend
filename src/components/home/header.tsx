import avatar from "../../../public/avatar.png"

export default function FeedHeader() {

    return (
        <header className="w-full bg-white px-10 py-6 md:rounded-lg md:px-12">


            <div className="flex gap-6 items-center justify-center">
                <div className="profile">
                    <div className="h-12 w-12 rounded-full">
                        <img src={avatar.src} className="h-full w-full rounded-full" alt="" />
                    </div>
                </div>
                <textarea rows={1} className="border border-gray-400 rounded-md grow flex items-center p-4 focus:outline-none text-sm" placeholder="Whats on your mind..">
                
                </textarea>


            </div>
            <div className="flex items-center justify-between mt-3 px-3">
                <div className="text-primary">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </span>
                </div>
                <button className="py-2 px-6 rounded-md bg-primary text-white flex gap-2 items-center text-sm ">
                    Rant
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                            <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z" />
                        </svg>

                    </span>
                </button>
            </div>
        </header>

    )
}
