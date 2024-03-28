import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps() {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    console.log("LifecycleA componentDidMount");
  }
  render() {
    console.log("LifecycleA render");
    return (
    <div>
    <h3>Lifecycle A Mount</h3>
    <LifecycleB/>
    </div>
    )
  }
}

export default LifecycleA