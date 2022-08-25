import React, { Component } from 'react'

export class First extends Component {

   one = () => {
     
  
  //  console.log(this);
  this.props.one(this.props.data)

  }
  render() {
    return (
        <div className='react'>
         <img src={this.props.data.images}/>
        <h1>{this.props.data.name} {this.props.data.qty}</h1><span></span>
        <button onClick={this.one}>Remove</button>
    </div>
    )
  }
}

export default First