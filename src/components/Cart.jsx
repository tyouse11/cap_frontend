// This component represents the cart page 
// It displays a summary of the order

import { Link } from 'react-router-dom';

export default function Cart({ cartItem, onRemoveItem }) {
  return (
    <div className="cart">
      <h2 className="cart-heading">Cart</h2>
      <div className="order-summary">
        <h3 className="order-summary-heading">Order Summary</h3>
        <ul className="order-summary-list">
          {cartItem.map((item) => (
            <li key={item.product._id} className="order-summary-item">
              <img src={item.product.imageUrl} alt={item.product.name} className="product-image" />
              <span className="item-name">{item.product.name} - </span>
              <span className="item-price">${item.product.price * item.quantity}</span>
              <button className="remove-btn" onClick={() => onRemoveItem(item)}>Remove</button>
          </li>
          ))}
        </ul>
        <h3 className="order-total">
          Total: $
          {cartItem.reduce(
            (total, item) => total + item.product.price * item.quantity,
            0
          )}
        </h3>
      </div>
      <Link to="/checkout-form" className="checkout-button">
         <button className="checkout-btn">Checkout</button>
      </Link>
    </div>
  );
}
