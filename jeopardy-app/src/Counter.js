import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    // const [data, setData] = useState(1);
    // const [value, setValue] = useState(2);
    
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
            {/* <br />
            <span>Category: {data.category.title} </span>
            <br />
            <span>Points:{value}</span>
            <br /> */}
            <button className="increaseBtn" onClick={increase}>INCREASE</button>
            <button className="decreaseBtn" onClick={decrease}>DECREASE</button>
            <button className="resetBtn" onClick={reset}>RESET</button>
        </div>
    )
}
export default Counter;