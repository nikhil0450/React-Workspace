import React, { Component } from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    addCount(){
        this.setState({
            count: this.state.count + 1
    })
    }

  render() {
    return (
        <>
      <div>Count: {this.state.count}</div>
      <button onClick={()=>this.addCount()}>Increment</button>
        </>
    )
  }
}

export default Counter