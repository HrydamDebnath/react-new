import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 flex-wrap'>

      <div className='rounded-2xl w-[48%] py-6 px-9 bg-gradient-to-br from-blue-900 to-blue-600 border border-blue-700 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>
          {data.taskCounts.newTask}
        </h2>
        <h3 className='text-lg mt-1 text-gray-200 font-medium'>
          New Tasks
        </h3>
      </div>

      <div className='rounded-2xl w-[48%] py-6 px-9 bg-gradient-to-br from-green-900 to-green-600 border border-green-700 shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:scale-[1.02] transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>
          {data.taskCounts.completed}
        </h2>
        <h3 className='text-lg mt-1 text-gray-200 font-medium'>
          Completed Tasks
        </h3>
      </div>

      <div className='rounded-2xl w-[48%] py-6 px-9 bg-gradient-to-br from-yellow-900 to-yellow-600 border border-yellow-700 shadow-[0_0_20px_rgba(234,179,8,0.25)] hover:scale-[1.02] transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>
          {data.taskCounts.active}
        </h2>
        <h3 className='text-lg mt-1 text-gray-200 font-medium'>
          Accepted Tasks
        </h3>
      </div>

      <div className='rounded-2xl w-[48%] py-6 px-9 bg-gradient-to-br from-red-900 to-red-600 border border-red-700 shadow-[0_0_20px_rgba(239,68,68,0.25)] hover:scale-[1.02] transition-all duration-300'>
        <h2 className='text-4xl font-bold text-white'>
          {data.taskCounts.failed}
        </h2>
        <h3 className='text-lg mt-1 text-gray-200 font-medium'>
          Failed Tasks
        </h3>
      </div>

    </div>
  )
}

export default TaskListNumbers