import React, {useState} from 'react'

function MessageFunc() {
    const [text, setText] = useState("Welcome Visitor")

    const changeText = () =>{
        setText("Thanks for Subscribing")
    }

  return (
    <>
    <h1>{text}</h1>
    <button onClick={()=>changeText()}>Subscribe</button>
    </>
  )
}

export default MessageFunc