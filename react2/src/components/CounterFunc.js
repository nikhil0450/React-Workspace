import React, {useState} from 'react'

function CounterFunc() {
    const [count, setCount] = useState(0)  

    const increment = () => {
      setCount(count+1)
    }  
  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>increment()}>Increment</button>
    </>
  )
}

export default CounterFunc