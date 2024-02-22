// This component represents the checkout form where users can enter their shipping and payment info

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

export default function CheckoutForm({ cart, setCart }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle placing an order
  const handlePlaceOrder = async () => {
    try {
      const requiredFields = ['name', 'email', 'address', 'city', 'state', 'zip'];
      const errors = {};
      requiredFields.forEach(field => {
        if (!formData[field].trim()) {
          errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
        }
      });

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      const orderData = {
        customerInfo: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zip
        },
        items: cart.map(item => ({
          productId: item.product._id,
          quantity: item.quantity
        }))
      };

      // Send the order data to the backend server
      const response = await fetch('http://localhost:5000/products/place-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        throw new Error('Failed to place order');
      }

      // If order is placed successfully
      console.log('Order placed successfully');
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check for form errors
    const errors = {};
    const requiredFields = ['name', 'email', 'address', 'city', 'state', 'zip'];
    requiredFields.forEach(field => {
      if (!formData[field].trim()) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }
    });
  
    // Set form errors if there are any
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
  
    // If no errors, handle placing the order
    await handlePlaceOrder();
  
    // Reset form data, cart, and errors after successful submission
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    });
    setFormErrors({});
    setCart([]);
  };
  

  return (
    <div className="checkout">
      <h2 className="checkout-heading">Checkout</h2>
      <OrderSummary cart={cart} showRemoveButton={false} />
      <form className="checkout-form" onSubmit={handleSubmit}>
        {/* Form fields for user information */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />
          {formErrors.address && <span className="error">{formErrors.address}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
          {formErrors.city && <span className="error">{formErrors.city}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} />
          {formErrors.state && <span className="error">{formErrors.state}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input type="text" id="zip" name="zip" value={formData.zip} onChange={handleInputChange} />
          {formErrors.zip && <span className="error">{formErrors.zip}</span>}
        </div>
        <button type="submit" className="checkout-btn">Place Order</button>
      </form>
      <Link to="/cart" className="back-to-cart-link">Back to Cart</Link>
    </div>
  );
}
