import React, { Component } from "react";
import LIFECYCLE_B_UPDATE from "./LifecycleB-Update";

class LIFECYCLE_A_UPDATE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps() {
    // console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    // console.log("LifecycleA componentDidMount");
  }

  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null
  }

  componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate");
  }

  stateChanged = () => {
    this.setState({
        message: "Hello world"
    })
  }


  render() {
    // console.log("LifecycleA render");
    return (
    <div>
    <h3>Lifecycle A Update</h3>
    <button onClick={this.stateChanged}>Change state</button>
    <LIFECYCLE_B_UPDATE/>
    </div>
    )
  }
}

export default LIFECYCLE_A_UPDATE