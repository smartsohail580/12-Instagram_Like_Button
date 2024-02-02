import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    let incCount = () => {
        setCount(count + 1);
        console.log(`inside incCount, count = ${count}`);
    };
    return (
        <>
        <div className='flex items-center justify-center h-screen'>
          <div className='text-center'>
            <h3 className='bg-gray-400'>Count = {count}</h3>
            <button onClick={incCount} className='bg-blue-500 text-white px-4 py-2 mt-4'>
              Increase Count
            </button>
          </div>
        </div>
      </>
    )
}

export default Counter
