import { useState } from "react";

function EditModal({ editTodo , editedTodo }) {

    const [updatedTitle, setUpdatedTitile] = useState(editedTodo.title)
    const [updatedDate, setUpdatedDate] = useState(editedTodo.date)

    const setTitleHandler = (e) => {
        setUpdatedTitile(e.target.value)
    }
    const setDateHandler = (e) => {
        setUpdatedDate(e.target.value)
    }
    const editTodoHandler = ()=>{
        fetch(`http://localhost:4000/todos/${editedTodo.id}` , {
            method : "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...editedTodo , 
                title:updatedTitle,
                date : updatedDate
            })
        })
        editTodo()
    }


    return (
        <>
            <div className='w-full h-screen bg-blue-c absolute top-0 left-0 flex items-center justify-center z-50 '>
                <div className='bg-white flex flex-col gap-4 p-4 rounded shadow-xl'>
                    <h3 className='text-xl font-bold text-gray-500'>Edit Todo</h3>
                    <div className='flex gap-2 sm:flex-col sm:gap-4'>
                        <div className='flex flex-col items-start w-[200px] '>
                            <label htmlFor="title" className='text-gray-500'>Task</label>
                            <input
                                onChange={setTitleHandler}
                                value={updatedTitle} type="text" name='title' placeholder='learning...' className='outline-none border p-2 rounded' />
                        </div>
                        <div className='flex flex-col items-start w-[200px] '>
                            <label htmlFor="date" className='text-gray-500'>Date</label>
                            <input
                                onChange={setDateHandler}
                                value={updatedDate}
                                type="text" name='date' placeholder='may/5/2023..' className='outline-none border p-2 rounded' />
                        </div>
                    </div>
                    <div className='flex gap-2 items-center justify-end'>
                        <button
                        onClick={editTodoHandler}
                            className='bg-orange-500 text-white p-1 rounded shadow border border-orange-500 w-[80px]
                              transition ease-in-out hover:bg-white hover:text-orange-500'>
                            Edit
                        </button>
                        <button
                            onClick={editTodo}
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

export default EditModal;
