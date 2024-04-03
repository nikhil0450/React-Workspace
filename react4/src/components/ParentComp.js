import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
import MemoComp from './MemoComp';


class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myname: "Nikhil"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                myname: "Nikhil Kulkarni"
            })
        },3000)
    }
  render() {
    console.log("****************Parent Component Render****************");
    return (
        <>
      <div>Parent Component</div>
      <PureComp name={this.state.myname}/>
      <RegComp name={this.state.myname}/>
      <MemoComp name={this.state.myname}/>
        </>
    )
  }
}

export default ParentComp