import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "parent"
      }

      this.greetParent = this.greetParent.bind(this) 
    }

    greetParent(childName, childName2){
        alert(`Hello ${this.state.parentName} from ${childName} & ${childName2}`)
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}/>

      </div>
    )
  }
}

export default ParentComponent