import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem/TodoItem';


function App() {
  const [allTodos, setAllTodos] = useState([])
  const getTodos = () => {
    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(todos => setAllTodos(todos))
  }
  useEffect(() => {
    getTodos()
  }, [])

  return (
    <>

      <div className='mt-6 h-[480px]'>
        {
          allTodos.length ? (
            allTodos.map(todo => (
              <TodoItem {...todo} />
            ))
          ) : (
            <div className='flex items-center justify-center'>
              <img src="/free.png" alt="free" className='w-[300px]' />
            </div>
          )
        }
      </div>

    </>
  );
}

export default App;
