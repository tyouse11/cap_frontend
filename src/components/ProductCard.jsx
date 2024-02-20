// This component represents a single product card displayed on the product listing page
// It contains the product image, name, breed, price, and a button to add the product to the cart
import React, { useState } from 'react';
import Notification from './Notification';

export default function ProductCard({ product, onAddToCart }) {
  const [notificationMessage, setNotificationMessage] = useState('');

  const addToCart = (product) => {
    onAddToCart(product);
    setNotificationMessage(`${product.name} has been added to cart`);
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <h4>{product.breed}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Notification message={notificationMessage} />
    </div>
  );
}
