import React, { useState } from 'react'

function UseStateFunctionalCounter() {

    const [count, setCount] = useState(0)

    const complexIncrement = () => {
        setTimeout(() => {
            setCount((preValue) => {
                return preValue+1;
            })
        },2000)
    }

    const complexDecrement = () => {
        setTimeout(() => {
            setCount((preValue) => {
                return preValue-1;
            })
        }, 2000)
    }
    

    return (
        <>
            <h2>04. UseStateFunctionalCounter</h2>
            <h3>Counter</h3>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count-1)}>Decrement</button><br/>
            <button onClick={() => complexIncrement()}>Complex Increment</button>
            <button onClick={() => complexDecrement()}>Complex Decrement</button>
        </>

    )
}

export default UseStateFunctionalCounter