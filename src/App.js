import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EditModal from './components/EditModal/EditModal';


function App() {
  const [allTodos, setAllTodos] = useState([])
  const [isOpenEditModal, setIsOpenEditModal] = useState(false)
  const [editedTodo, setEditedTodo] = useState("")

  const getTodos = () => {
    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(todos => setAllTodos(todos))
  }

  const removeTodo = (id) => {
    fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE"
    }).then(res => console.log(res))
    getTodos()
  }
  useEffect(() => {
    AOS.init();
    getTodos()
  }, [allTodos])

  const doTodoHandler = (todo) => {
    fetch(`http://localhost:4000/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...editedTodo,
        id: todo.id,
        title: todo.title,
        date: todo.date,
        isCompleted: !todo.isCompleted
      })
    }).then(res => console.log(res))
  }

  const editTodo = (todo) => {
    setIsOpenEditModal(!isOpenEditModal)
    setEditedTodo(todo)
  }

  return (
    <>

      <div className='mt-6 h-[480px]'>
        {
          allTodos.length ? (
            allTodos.map(todo => (
              <div data-aos="fade-left" className={`flex items-center justify-between p-2 border mx-2 mb-1 ${todo.isCompleted ? "bg-red-100":"bg-green-100"}`}>
                <div className='flex items-center gap-2'>
                  <div
                    onClick={() => doTodoHandler(todo)}
                    className={`w-[18px] h-[18px] rounded-full border border-orange-500 shadow cursor-pointer ${todo.isCompleted ? "bg-red-200" : "bg-green-200"} `}></div>
                  <p className='font-bold text-gray-600 w-[470px]'>
                    {todo.title}
                  </p>
                </div>
                <div className='bg-orange-200 rounded p-2 w-[120px] flex items-center justify-center'>
                  {
                    todo.date ? (
                      todo.date
                    ) : (
                      <p className='text-gray-400'>
                        Not Entered
                      </p>
                    )
                  }
                </div>
                <div className='flex items-center gap-2'>
                  <svg
                    onClick={() => removeTodo(todo.id)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="w-6 h-6 text-orange-800 transition ease-in-out hover:scale-110 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  <svg
                    onClick={() => editTodo(todo)}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    className="w-6 h-6 text-orange-700 transition ease-in-out hover:scale-110  ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
                </div>
              </div>
            ))
          ) : (
            <div className='flex items-center justify-center'>
              <img src="/free.png" alt="free" className='w-[300px]' />
            </div>
          )
        }
      </div>
      {
        isOpenEditModal && (
          <EditModal editTodo={editTodo} editedTodo={editedTodo} />
        )
      }
    </>
  );
}

export default App;
