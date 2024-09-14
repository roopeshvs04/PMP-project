// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Handlers to show and hide the dropdown menu
  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li 
          className="navbar-link products-link" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
        >
          <Link to={"/products"} className="navbar-link">Products</Link> {/* Link to the Products page */}
          {dropdownVisible && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/products/product1" className="dropdown-item">Product 1</Link>
              </li>
              <li>
                <Link to="/products/product2" className="dropdown-item">Product 2</Link>
              </li>
              <li>
                <Link to="/products/product3" className="dropdown-item">Product 3</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to={"/about"} className="navbar-link">About</Link>
        </li>
        <li>
          <Link to={"/contact"} className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
