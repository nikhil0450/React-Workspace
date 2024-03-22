import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return (
        <>

        <h1>Hello {this.props.name}, This is a Class component !</h1>
        {this.props.children}

        </>
        )
    }
}

Welcome.defaultProps = {
    name: 'Guest'
  };

export default Welcome