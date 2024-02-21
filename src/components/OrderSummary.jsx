// This component accepts cart as a prop and renders the order summary content

export default function OrderSummary({ cart, showRemoveButton, onRemoveItem }) {
  return (
    <div className="order-summary">
      <h3 className="order-summary-heading">Order Summary</h3>
      <ul className="order-summary-list">
        {cart.map((item) => (
          <li key={item.product._id} className="order-summary-item">
            <img src={item.product.imageUrl} alt={item.product.name} className="product-image" />
            <span className="item-name">{item.product.name} - </span>
            <span className="item-price">${item.product.price * item.quantity}</span>
            {showRemoveButton && (
              <button className="remove-btn" onClick={() => onRemoveItem(item)}>Remove</button>
            )}
          </li>
        ))}
      </ul>
      <h3 className="order-total">
        Total: $
        {cart.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )}
      </h3>
    </div>
  );
}
