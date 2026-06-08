import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        setNewTask({
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        })

        const data = userData

        data.forEach(function (elem) {
            if (asignTo == elem.firstName) {
                elem.tasks.push(newTask)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData(data)

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className='p-8 mt-6 rounded-3xl bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e293b] border border-zinc-800 shadow-[0_0_30px_rgba(59,130,246,0.15)]'>

            <h2 className='text-3xl font-bold text-white mb-8'>
                Create New Task
            </h2>

            <form
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-wrap w-full items-start justify-between'
            >

                <div className='w-1/2 pr-6'>

                    <div className='mb-5'>
                        <h3 className='text-sm text-gray-400 mb-2'>
                            Task Title
                        </h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='w-full py-3 px-4 rounded-xl bg-[#111827] border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-all'
                            type="text"
                            placeholder='Make a UI Design'
                        />
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-sm text-gray-400 mb-2'>
                            Due Date
                        </h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='w-full py-3 px-4 rounded-xl bg-[#111827] border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-all'
                            type="date"
                        />
                    </div>

                    <div className='mb-5'>
                        <h3 className='text-sm text-gray-400 mb-2'>
                            Assign To
                        </h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='w-full py-3 px-4 rounded-xl bg-[#111827] border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-all'
                            type="text"
                            placeholder='Employee Name'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-400 mb-2'>
                            Category
                        </h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='w-full py-3 px-4 rounded-xl bg-[#111827] border border-zinc-700 text-white focus:outline-none focus:border-blue-500 transition-all'
                            type="text"
                            placeholder='Design, Development, Testing'
                        />
                    </div>

                </div>

                <div className='w-[45%] flex flex-col'>

                    <h3 className='text-sm text-gray-400 mb-2'>
                        Description
                    </h3>

                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-56 py-4 px-4 rounded-xl bg-[#111827] border border-zinc-700 text-white resize-none focus:outline-none focus:border-blue-500 transition-all'
                    ></textarea>

                    <button
                        className='mt-6 bg-gradient-to-r from-blue-700 via-blue-600 to-red-600 hover:from-blue-600 hover:to-red-500 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]'
                    >
                        Create Task
                    </button>

                </div>

            </form>

        </div>
    )
}

export default CreateTask