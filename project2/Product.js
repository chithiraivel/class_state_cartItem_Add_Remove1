import React, { Component } from 'react'
import './product.css'

export class Product extends Component {

    addToCart =() => {
        
        this.props.addToCart(this.props.data)
      
    }
  render() {
    return (
        <div className='react'>
           <img src={this.props.data.images}/>
        <h1>{this.props.data.name}</h1>
        <button onClick={this.addToCart}>ADD TO CART</button>
    </div>
    )
  }
}

export default Product