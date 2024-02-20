// This component represents an item in the shopping cart
// It displays the product image, tile, price, and a button to remove the item from the cart

export default function CartItem({ item, onRemoveFromCart }) {
  const handleRemoveClick = () => {
    onRemoveFromCart(item);
  };

  return (
    <div className="cart-item">
      <img src={item.product.imageUrl} alt={item.product.name} />
      <div>
        <h3>{item.product.name}</h3>
        <p>Price: ${item.product.price * item.quantity}</p>
      </div>
      <button onClick={handleRemoveClick}>Remove</button> {/* Call handleRemoveClick when Remove button is clicked */}
    </div>
  );
}