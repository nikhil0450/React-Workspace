import React, { Component } from "react";

class MessageClass extends Component {

    constructor(){
        super()
        this.state = {
            messsage: "Hello Visitor"
        }
    }

    changeMessage() { 
        this.setState({
            messsage: "Thank you for subscribing"
        })
    }

    render(){
        return(
            <>
            <h1>{this.state.messsage}</h1>
            <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </>
        )
    }
}

export default MessageClass