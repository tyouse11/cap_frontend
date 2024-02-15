// This component represents a single product card displayed on the product listing page
// It contains the product image, title, price, and a button to add the product to the cart

export default function ProductCard ( {product, onAddToCart} ) {
    return (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    );
  };