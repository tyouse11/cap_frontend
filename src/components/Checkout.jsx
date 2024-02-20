// This component represents the checkout page 
// It contains the 'CheckoutForm' component and displays a summary of the order

export default function Checkout({ cartItems, onRemoveFromCart }) {
  const handleRemoveFromCart = (item) => {
    onRemoveFromCart(item);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - ${item.product.price} x {item.quantity} = ${item.product.price * item.quantity}
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${calculateTotalPrice()}</h3>
      </div>
      <form>
        {/* Shipping and payment form fields */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}