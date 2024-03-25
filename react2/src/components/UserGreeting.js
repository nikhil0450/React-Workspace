import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
      this.loggedIn = this.loggedIn.bind(this)
    }
    loggedIn(){
        this.setState({
            isLoggedIn: false
        })
    }
  render() {

    return 

    // This is a simple logical condition to either render the component or nothing

//    return  this.state.isLoggedIn && <h1>Welcome Nikhil</h1>

    // This is the ternary operator approach 

    /*
    return (
        <>
        {this.state.isLoggedIn ? <div>Hello Nikhil</div> : <div>Helo Guest</div>}
        </>
        )
    */
        

    /* // This is the Javascript variable rendering
    let message ;
    if(this.state.isLoggedIn){
        message = <div>Hello Nikhil</div>
    }else{
        message = <div>Hello Guest</div>
    }
    
    return (
        <div>{message}</div>
        )
    */
    /* // This is the conditional if else statement rendering 
    if(this.state.isLoggedIn){
        return <h1>Hello Nikhil</h1>
    }else{
        return (
            <>
            <h1>Hello Guest</h1>
            <button onClick={this.loggedIn}>Login</button>
            </>
            )
        }
    */ 
    // return (
    //   <div>Hello Nikhil</div>
    // )
  }
}

export default UserGreeting