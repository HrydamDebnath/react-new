import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = ({ data, changeUser }) => {
    console.log("Header Data:", data)

const logOutUser = () => {
  localStorage.removeItem('loggedInUser')
  changeUser(null)
}

  return (
    <div className='flex items-center justify-between bg-gradient-to-r from-[#0a0a0a] via-[#111827] to-[#1e293b] border border-zinc-800 rounded-2xl px-8 py-5 shadow-[0_0_25px_rgba(59,130,246,0.15)]'>

      <div>
        <h1 className='text-lg text-gray-400 font-medium'>
          Welcome Back,
        </h1>

        <h2 className='text-3xl font-bold text-white mt-1 tracking-wide'>
  {data?.name || data?.firstName || 'Admin'} 👋
</h2>
      </div>

      <button
        onClick={logOutUser}
        className='bg-gradient-to-r from-red-700 to-red-500 hover:from-red-600 hover:to-red-400 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105'
      >
        Log Out
      </button>

    </div>
  )
}

export default Header