import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import TodoItem from './components/TodoItem/TodoItem';

const todos = [
  {
    id: 1,
    title: "lerning js",
    isCompleted: false,
    date: "5/8/1400"
  },
  {
    id: 2,
    title: "lerning react",
    isCompleted: false,
    date: "25/8/1400"
  },
  {
    id: 3,
    title: "lerning nextjs",
    isCompleted: false,
    date: "8/9/1402"
  },
]

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>

      <div className='mt-6'>
        {
          todos.map(todo => (
            <TodoItem {...todo} />
          ))
        }
      </div>

    </>
  );
}

export default App;
