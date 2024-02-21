import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import Navigation from './components/Nav';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Notification from './components/Notification';
import CheckoutForm from './components/CheckoutForm';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [cartItem, setCartItem] = useState([]);

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

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const isProductInCart = cartItem.some(item => item.product._id === product._id);
  
    // If the product is not in the cart, add it
    if (!isProductInCart) {
      setCartItem([...cart, { product, quantity: 1 }]);
      setNotificationMessage(`${product.name} has been added to the cart`);
      setTimeout(() => setNotificationMessage(''), 3000); // Clear notification after 3 seconds
    } else {
      // Product is already in the cart, show error message or handle accordingly
      setNotificationMessage(`${product.name} is already in the cart`);
      setTimeout(() => setNotificationMessage(''), 3000); // Clear notification after 3 seconds
    }
  };

  // Function to remove item from cart
  const handleRemoveItem = (itemToRemove) => {
    const updatedCart = cartItem.filter(item => item !== itemToRemove);
    setCartItem(updatedCart);
  };

  return (
      <div>
        <Navigation cartItem={cartItem}/>
        <Notification message={notificationMessage} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductListing products={products} onAddToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItem={cartItem} onRemoveItem={handleRemoveItem} />} />
          <Route path="/checkout-form" element={<CheckoutForm />} />
        </Routes>
      </div>
  );
}