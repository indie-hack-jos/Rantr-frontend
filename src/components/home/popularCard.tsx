import React from 'react'

export default function Popular() {
  return (
    <aside className="static top-0 left-0 h-screen max-h-screen overflow-hidden py-6">
    <div className="card p-5 bg-primary bg-opacity-10 rounded-lg">
        <h3 className="text-lg">Popular Ranters</h3>

        <div className="flex flex-col gap-4 py-4">
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

            <div className="flex justify-between ">
                <div className="flex items-center gap-3">
                    <span className="h-10 w-10 bg-gray-400 rounded-full"></span>
                    <div>
                      <p>@Goody_eze</p>
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
