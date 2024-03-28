import React, { Component } from "react";

class LIFECYCLE_B_UPDATE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    // console.log("LifecycleB constructor");
  }
  static getDerivedStateFromProps() {
    // console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount(){
    // console.log("LifecycleB componentDidMount");
  }

  shouldComponentUpdate(){
    console.log("LifecycleB shouldComponentUpdate");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("LifecycleB getSnapshotBeforeUpdate");
    return null
  }

  componentDidUpdate(){
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    // console.log("LifecycleB render");
    return <h3>Lifecycle B Update</h3>
  }
}

export default LIFECYCLE_B_UPDATE