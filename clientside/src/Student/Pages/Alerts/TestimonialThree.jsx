import React from 'react'

const   TestimonialThree = ({alert}) =>{
  console.log(alert)
  return (
    <div className="mx-auto max-w-xl rounded-md bg-gray bg-slate-700 p-1 my-3">
      <div className="flex flex-col rounded-md bg-white">
        <div className="flex flex-1 flex-col justify-between p-8">
          <div className="mb-4 flex space-x-2">
          </div>
          <div className="flex-1 pt-2">
            <blockquote>
              <p className="text-lg text-gray-800">
                {alert.message}
              </p>
            </blockquote>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-4 dark:border-gray-800">
            <div className="flex items-center">
              <img
                className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
              <div className="ml-3 min-w-0">
                <p className="truncate text-base font-semibold text-gray-800">{alert.createdBy}</p>
                <p className="truncate text-base text-gray-500">Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialThree
