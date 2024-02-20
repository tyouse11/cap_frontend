// This component represents the checkout page 
// It contains the 'CheckoutForm' component and displays a summary of the order

import CheckoutForm from './CheckoutForm';
import { Link } from 'react-router-dom';

export default function Checkout({ cartItems, onPlaceOrder }) {
  return (
    <div className="checkout">
      <h2 className="checkout-heading">Checkout</h2>
      <div className="order-summary">
        <h3 className="order-summary-heading">Order Summary</h3>
        <ul className="order-summary-list">
          {cartItems.map((item) => (
            <li key={item.product._id} className="order-summary-item">
              <span className="item-name">{item.product.name}</span> - ${item.product.price * item.quantity}
            </li>
          ))}
        </ul>
        <h3 className="order-total">
          Total: $
          {cartItems.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          )}
        </h3>
      </div>
      {/* <CheckoutForm onSubmit={onPlaceOrder} /> */}
      <Link to="/checkout-form" className="checkout-button">
         <button className="checkout-btn">Checkout</button>
      </Link>
    </div>
  );
}
