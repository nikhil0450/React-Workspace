import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         messsage: "Hello"
      }
    }

    changeMessage(){
        this.setState({
            messsage: "Goodbye"
        })
    }
  render() {
    return (
      <>
        <h1>{this.state.messsage}</h1>
        <button onClick={this.changeMessage.bind(this)}>Subscribe</button>
      </>
    );
  }
}

export default EventBind;
