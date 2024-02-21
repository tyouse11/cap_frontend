import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

export default function Nav( { cart} ) {
  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Puppy Lovers</Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Puppies</Link>
        </li>
        <li className="nav-cart-icon">
          <Link to="/cart" className="nav-link">
          <div>
              <BsCart className="cart-icon" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
