import React, { Component } from 'react'

class CbRefsDemo extends Component {
    constructor(props) {
      super(props)
      this.cbRef = null
      this.setCbRef = (element) =>{
            this.cbRef = element
      }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.setCbRef}/>
      </div>
    )
  }
}

export default CbRefsDemo