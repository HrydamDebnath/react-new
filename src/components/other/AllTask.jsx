import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className='mt-6 p-6 rounded-3xl bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e293b] border border-zinc-800 shadow-[0_0_30px_rgba(59,130,246,0.15)]'>

      <h2 className='text-3xl font-bold text-white mb-6'>
        Employee Task Overview
      </h2>

      {/* Header */}
      <div className='bg-gradient-to-r from-red-700 via-red-600 to-red-500 py-4 px-6 flex justify-between rounded-2xl shadow-lg'>
        <h2 className='text-lg font-semibold w-1/5 text-white'>Employee</h2>
        <h3 className='text-lg font-semibold w-1/5 text-white'>New</h3>
        <h3 className='text-lg font-semibold w-1/5 text-white'>Active</h3>
        <h3 className='text-lg font-semibold w-1/5 text-white'>Completed</h3>
        <h3 className='text-lg font-semibold w-1/5 text-white'>Failed</h3>
      </div>

      {/* Employee Rows */}
      <div className='mt-4 flex flex-col gap-3'>

        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className='bg-[#111827] border border-zinc-700 hover:border-blue-600 py-4 px-6 flex justify-between rounded-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]'
            >
              <h2 className='text-lg font-medium w-1/5 text-white'>
                {elem.firstName}
              </h2>

              <h3 className='text-lg font-bold w-1/5 text-blue-400'>
                {elem.taskCounts.newTask}
              </h3>

              <h3 className='text-lg font-bold w-1/5 text-yellow-400'>
                {elem.taskCounts.active}
              </h3>

              <h3 className='text-lg font-bold w-1/5 text-green-400'>
                {elem.taskCounts.completed}
              </h3>

              <h3 className='text-lg font-bold w-1/5 text-red-400'>
                {elem.taskCounts.failed}
              </h3>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default AllTask