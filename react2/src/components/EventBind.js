import React, { Component } from "react";

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         messsage: "Hello"
      }

      this.changeMessage = this.changeMessage.bind(this)
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
        {/* There are three ways of event handling */}
        <button onClick={this.changeMessage.bind(this)}>Subscribe</button>
        {/* Above is the example of event binding */}
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        {/* Above is the example of callback function calling of the function */}
        <button onClick={this.changeMessage}>Subscribe</button>
        {/* Above is the third way of doing it by writing it, this is binding in the class constructor */}
      </>
    );
  }
}

export default EventBind;
