import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[320px] p-6 rounded-2xl bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#0f172a] border border-blue-800 shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:scale-[1.02] transition-all duration-300'>
      
      <div className='flex justify-between items-center'>
        <h3 className='bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs px-4 py-1 rounded-full font-medium shadow-md'>
          {data.category}
        </h3>

        <h4 className='text-xs text-gray-400 font-medium'>
          {data.taskDate}
        </h4>
      </div>

      <h2 className='mt-5 text-2xl font-bold text-white tracking-wide'>
        {data.taskTitle}
      </h2>

      <p className='text-sm mt-3 text-gray-300 leading-relaxed'>
        {data.taskDescription}
      </p>

      <div className='mt-8'>
        <button className='w-full bg-gradient-to-r from-green-700 to-green-500 hover:from-green-600 hover:to-green-400 text-white rounded-lg font-semibold py-2 px-4 text-sm shadow-lg transition-all duration-300'>
          Complete
        </button>
      </div>

    </div>
  )
}

export default CompleteTask