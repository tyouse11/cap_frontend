import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('/products', {
          headers: {
            'Accept': 'application/json'
          }
        });
        console.log('Response data:', response.data); // Log the response to verify
        setProducts(response.data.products); // Update products state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Products</h1>
        <ul>
          {products.map(product => (
            <li key={product._id}>{product.title} - ${product.price}</li>
          ))}
        </ul>
    </div>
  );
}