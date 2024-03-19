import React from 'react'

export default function Popular() {
  return (
    <aside className="grow h-screen max-h-screen overflow-hidden py-6">
    <div className="card  w-full flex-col p-5 bg-white shadow rounded-lg">
        <h3 className="text-lg">Popular Ranters</h3>

        <div className="flex flex-col gap-6 py-4 text-sm">
            <div className="flex  gap-28">
                <div className="flex items-center gap-4">
                    <span className="h-10 w-10 bg-slate-900 rounded-full"></span>
                    <div>
                      <p className='text-gray-500'>@Ola of jos</p>
                      <p className="text-xs text-gray-400">Developer...</p>

                    </div>
                </div>

                <div className="text-sm text-primary">
                  25 rants
                </div>
            </div>

            <div className="flex justify-between ">
                <div className="flex items-center gap-3">
                    <span className="h-10 w-10 bg-slate-800 rounded-full flex justify-center items-center"></span>
                    <div>
                      <p className='text-gray-600'>@Goody_eze</p>
                      <p className="text-xs text-gray-400">Here to scream...</p>

                    </div>
                </div>

                <div className="text-sm text-primary">
                  25 rants
                </div>
            </div>

            <div className="flex justify-between ">
                <div className="flex items-center gap-3">
                    <span className="h-10 w-10 bg-gray-400 rounded-full"></span>
                    <div>
                      <p>@Tobi</p>
                      <p className="text-sm text-gray-500">Here to scream...</p>

                    </div>
                </div>

                <div className="text-sm text-primary">
                  25 rants
                </div>
            </div>

            <div className="flex justify-between ">
                <div className="flex items-center gap-3">
                    <span className="h-10 w-10 bg-gray-400 rounded-full"></span>
                    <div>
                      <p>@Ola of jos</p>
                      <p className="text-sm text-gray-500">Here to scream...</p>

                    </div>
                </div>

                <div className="text-sm text-primary">
                  25 rants
                </div>
            </div>
        </div>
    </div>
  </aside>
  )
}
