// This component represents the page displaying a list of products
// It maps through an array of products and renders a 'ProductCard' for each product

import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function ProductListing ( {products, onAddToCart} ) {
  
  return (
    <div className="product-listing">
      {/* <Link to="/products/sort-by-price">
      <button>Sort by Price</button>
    </Link> */}
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};