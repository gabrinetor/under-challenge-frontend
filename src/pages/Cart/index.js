import React, { Component } from 'react';
import Menu from '../../components/Menu';
import Products from '../../components/Products';

class Cart extends Component {
  render() {
    return (
      <div>
        <Menu />
        <br /><br />
        <h1 className="text-center">Carrinho de Compras</h1>
        <hr />
        <Products />
      </div>
    );
  }
}

export default Cart;