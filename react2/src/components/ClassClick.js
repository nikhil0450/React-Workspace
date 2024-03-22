import React, { Component } from 'react'

class ClassClick extends Component {
    handleClick(){
        console.log("Button was clicked")
    }
  render() {
    return (
    <>
        <h1>Class based Event Handling</h1>
        <button onClick={this.handleClick}>Click</button>
    </>
    )
  }
}

export default ClassClick