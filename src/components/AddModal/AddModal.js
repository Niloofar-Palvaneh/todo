import { useEffect, useState } from "react";

function AddModal({ openModal }) {
    const [titleTodo, setTitleTodo] = useState("")
    const [dateTodo, setDateTodo] = useState("")
    const [error , setError] = useState(false)


    const setTitleTodoHandler = (event) => {
        setTitleTodo(event.target.value)
    }
    const setDateTodoHandler = (event) => {
        setDateTodo(event.target.value)
    }

    const submitDateAddModal = () => {
        if(titleTodo){
            const newTodo = {
                title: titleTodo,
                date: dateTodo,
                isCompleted : false
            }
            fetch("http://localhost:4000/todos", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTodo)
            })
            openModal()
        }else{
            setError(true)
        }
    }



    return (
        <>
            <div className='w-full h-screen bg-blue-c absolute top-0 left-0 flex items-center justify-center z-50 '>
                <div className='bg-white flex flex-col gap-4 p-4 rounded shadow-xl'>
                    <h3 className='text-xl font-bold text-gray-500'>Add Task</h3>
                    <div className='flex gap-2 sm:flex-col sm:gap-4'>
                        <div className='flex flex-col items-start w-[200px] sm:w-full '>
                            <label htmlFor="title" className='text-gray-500'>Task</label>
                            <input
                                onChange={setTitleTodoHandler}
                                value={titleTodo} type="text" name='title' placeholder='learning...' className='outline-none border p-2 rounded' />
                            {
                                error && (
                                    <p className="text-red-500 text-sm ml-1">
                                        Please write a todo title
                                    </p>
                                )
                            }
                        </div>
                        <div className='flex flex-col items-start w-[200px] sm:w-full '>
                            <label htmlFor="date" className='text-gray-500'>Date</label>
                            <input
                                onChange={setDateTodoHandler}
                                value={dateTodo} type="text" name='date' placeholder='may/5/2023..' className='outline-none border p-2 rounded' />
                        </div>
                    </div>
                    <div className='flex gap-2 items-center justify-end'>
                        <button
                            onClick={submitDateAddModal}
                            className='bg-orange-500 text-white p-1 rounded shadow border border-orange-500 w-[80px]
                              transition ease-in-out hover:bg-white hover:text-orange-500'>
                            Add
                        </button>
                        <button
                            onClick={openModal}
                            className='bg-orange-500 text-white p-1 rounded shadow border border-orange-500 w-[80px]
                               transition ease-in-out hover:bg-white hover:text-orange-500'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddModal;
