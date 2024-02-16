// This component represents the checkout form when users can enter their shipping and payment info

import React, { useState } from 'react';
import '../styles/CheckoutForm.css';

export default function CheckoutForm ( {onSubmit} ) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      {/* Add more input fields for shipping/payment information */}
      <button type="submit">Place Order</button>
    </form>
  );
};