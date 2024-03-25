import React from 'react'

function ChildComponent(props) {

  return (
    <div>
        <button onClick={() => props.greetHandler("child", "child2")}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent