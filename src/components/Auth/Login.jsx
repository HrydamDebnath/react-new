import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-black via-[#111827] to-[#1e293b]'>

            <div className='w-[420px] p-10 rounded-3xl bg-[#0f172a]/90 backdrop-blur-lg border border-zinc-700 shadow-[0_0_40px_rgba(59,130,246,0.15)]'>

                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-white'>
                        Welcome Back
                    </h1>
                    <p className='text-gray-400 mt-2'>
                        Sign in to continue
                    </p>
                </div>

                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col gap-5'
                >

                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        type="email"
                        placeholder='Enter your email'
                        className='w-full bg-[#111827] border border-zinc-700 text-white py-3 px-5 rounded-xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-500'
                    />

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        type="password"
                        placeholder='Enter your password'
                        className='w-full bg-[#111827] border border-zinc-700 text-white py-3 px-5 rounded-xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-gray-500'
                    />

                    <button
                        className='mt-3 bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 hover:from-blue-600 hover:to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]'
                    >
                        Log In
                    </button>

                </form>

                <div className='mt-6 text-center'>
                    <p className='text-sm text-gray-500'>
                        Employee Management System
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Login