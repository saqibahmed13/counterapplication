import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const[count, setCount] = useState(0);

  function decreaseCount(){
    setCount(count-1);
  }

  function increaseCount(){
    setCount(count+1);
  }

  function resetCount(){
    setCount(0);
  }



  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#0398d4] font-medium'>Increment & Decrement</div>
      <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344145]' >
        <button onClick={decreaseCount} className='border-r-2 text-center w-20 border-[bfbfbf] text-5xl'>
          -
        </button>
        <div className='font-bold gap-12 text-5xl'>
          {count}
        </div>

        
        <button onClick={increaseCount} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>
          +
        </button>
      </div>
      <button onClick={resetCount} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
    </div>
  );
}

export default App;
