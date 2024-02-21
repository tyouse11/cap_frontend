// This component represents the page displaying a list of products
// It maps through an array of products and renders a 'ProductCard' for each product

import ProductCard from './ProductCard';

export default function ProductListing ( {products, onAddToCart} ) {
  
  return (
    <div className="product-listing">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};