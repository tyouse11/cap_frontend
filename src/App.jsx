import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';
import { data } from 'jquery';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

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

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container">
      <div className="product-listing">
        {products.map(product => (
          <ProductCard key={product._id} product={product} onAddToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
}