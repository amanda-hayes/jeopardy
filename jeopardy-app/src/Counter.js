import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    
    
    const reset = () => setCount(0);
    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count === 0) {
            setCount(10)
        } else {
            setCount(count - 1);
        }
    }

    return (
        <div className="stats">
            <span>Score: {count}</span>
            <button className="increaseBtn" onClick={increase}>INCREASE</button>
            <button className="decreaseBtn" onClick={decrease}>DECREASE</button>
            <button className="resetBtn" onClick={reset}>RESET</button>
        </div>
    )
}
export default Counter;