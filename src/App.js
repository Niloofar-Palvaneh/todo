import { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <div className='w-full bg-red-400'>
      home
    </div>

    </>
  );
}

export default App;