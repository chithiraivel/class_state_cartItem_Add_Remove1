import React, { Component } from "react";
import First from "./First";
import Product from "./Product";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      product: [
        { id: 1, name: "React", qty: 1,images:require('../Assets/react.png') },
        { id: 2, name: "Java", qty: 1,images:require('../Assets/react.png')  },
        { id: 3, name: "Javascript", qty: 1,images:require('../Assets/react.png') },
      ],
    };
  }

  addToCart = (data1) => {

    // const temp = this.state.cart.push(data1)
    if (!(this.state.cart.includes(data1))) {
      // this.setState({ cart: [...this.state.cart, data1] });

      let joined = this.state.cart.concat(data1)
      this.setState({cart:joined})

      // let newArray = this.state.cart.slice();
      // newArray.push(data1);
      // this.setState({cart:newArray})

    } else {
      let qty=data1.qty++;
      this.setState({qty: qty});
      console.log(this.state.cart);
    }

    
  };

  one = (data) => {

    // const emp = this.state.cart.slice();

    // const emp = [...this.state.cart]
    // emp.splice(data,1);
    // this.setState({cart:emp})
    const a= this.state.cart.filter( (d) => {
      console.log( "d",d);
      console.log('data',data);
      
      return d !== data 
    })
    console.log('a',a);
    this.setState({cart:a})
  }

  render() {
    return (
      <div>
        {this.state.product.map((data, index) => (
          <Product key={index} data={data} addToCart={this.addToCart} />
          // <div key={index}>
          //     <h1>{data.name}</h1>
          //     <button>ADD TO CART</button>
          // </div>
        ))}

        <h1>LIST</h1>
        {this.state.cart.map((data, index) => (
          <First key={index} data={data}  one={this.one}/>
        ))}
      </div>
    );
  }
}

export default Main;
