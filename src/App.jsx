import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductCard from './components/ProductCard';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import Navigation from './components/Nav';
import ProductListing from './components/ProductListing';
import CartItem from './components/CartItem'
import Checkout from './components/Checkout';
import Notification from './components/Notification';

import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  // // Function to add item to cart
  // const addToCart = (product) => {
  //   // Check if the product is already in the cart
  //   const existingCartItemIndex = cart.findIndex(item => item.product._id === product._id);

  //   if (existingCartItemIndex !== -1) {
  //     // If the product is already in the cart, update its quantity
  //     const updatedCart = [...cart];
  //     updatedCart[existingCartItemIndex].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     // If the product is not in the cart, add it with a quantity of 1
  //     setCart([...cart, { product: product, quantity: 1 }]);
  //   }
  // };

    // Function to add item to cart
    const addToCart = (product) => {
      setCart([...cart, product]);
      setNotificationMessage('Your puppy has been added to the cart'); // Set notification message
      setTimeout(() => setNotificationMessage(''), 3000); // Clear notification after 3 seconds
    };

    // Function to remove item from cart
    const removeFromCart = (itemToRemove) => {
      const updatedCart = cart.filter(item => item !== itemToRemove);
      setCart(updatedCart);
    };

  return (
      <div>
        <Navigation />
        <Notification message={notificationMessage} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductListing products={products} onAddToCart={addToCart} />} />
          <Route path="/cart" element={<Checkout cartItems={cart}/>} />
        </Routes>
      </div>
  );
}