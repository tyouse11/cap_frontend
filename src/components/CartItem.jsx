// This component represents an item in the shopping cart
// It displays the product image, tile, quantity, price, and a button to remove the item from the cart

export default function CartItem ( {item, onRemoveFromCart} ) {
    return (
      <div className="cart-item">
        <img src={item.product.imageUrl} alt={item.product.title} />
        <div>
          <h3>{item.product.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.product.price * item.quantity}</p>
        </div>
        <button onClick={() => onRemoveFromCart(item)}>Remove</button>
      </div>
    );
  };