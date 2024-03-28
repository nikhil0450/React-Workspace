import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps() {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifecycleB componentDidMount");
  }
  render() {
    console.log("LifecycleB render");
    return <h3>Lifecycle B Mount</h3>
  }
}

export default LifecycleB