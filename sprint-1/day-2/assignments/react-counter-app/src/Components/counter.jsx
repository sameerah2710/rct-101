import React, { useState } from 'react'
import './counter.css'
const Counter = () =>{
    const [count,setCount] = useState(0)
    return(
        <div className='Counter_wrapper'>
            <h1 >{count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(count * 2)}>Double</button>
            </div>
        </div>
    )
}

export default Counter


