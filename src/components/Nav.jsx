import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

export default function Nav() {
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
        <li className="nav-cart-item">
          <Link to="/cart" className="nav-link">
            <BsCart />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
