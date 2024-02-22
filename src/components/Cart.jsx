// This component represents the cart page that displays a summary of the order

import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

export default function Cart({ cart, onRemoveItem }) {
  return (
    <div className="cart">
      <h2 className="cart-heading">Cart</h2>
      <OrderSummary cart={cart} showRemoveButton={true} onRemoveItem={onRemoveItem} />
      <Link to="/checkout-form">
         <button className="cart-checkout-btn">Checkout</button>
      </Link>
    </div>
  );
}
