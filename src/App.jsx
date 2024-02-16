import React, { useState } from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductListing from '../src/components/ProductListing';
//import Cart from '../src/components/CartItem'
//import Checkout from '../src/components/Checkout';
import './App.css';

function App() {
 // Mock data for product listing
  const products = [
    { id: 1, title: 'Product 1', price: 10, imageUrl: 'https://example.com/product1.jpg' },
    { id: 2, title: 'Product 2', price: 20, imageUrl: 'https://example.com/product2.jpg' },
];

  return (
    <div className="App">
      <ProductListing products={products} />
      {/* <Cart /> */}
      {/* <Checkout /> */}
    </div>
  //    <Router>
  //    <div className="App">
  //      <Switch>
  //        <Route path="/" exact component={ProductListing} />
  //        <Route path="/cart" component={Cart} />
  //        <Route path="/checkout" component={Checkout} />
  //      </Switch>
  //    </div>
  //  </Router>
  );
}

export default App;