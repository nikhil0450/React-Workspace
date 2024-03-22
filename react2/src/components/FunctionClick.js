import React from 'react'

function FunctionClick() {
    const handleClick = () =>{
        console.log("Button was clicked")
    }
  return (
    <>
    <h1>Event Handling</h1>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default FunctionClick