import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/Cart_icon.png';
import { FiMenu, FiX } from 'react-icons/fi';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop"); // Default active state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu and set active state for the selected link
  const handleLinkClick = (menuName) => {
    setMenu(menuName);
    setIsMenuOpen(false); // Close the menu on link click
  };

  return (
    <div className="navbar-container">
      {/* Mobile menu toggle button */}
      <button className="navbar-toggler" onClick={toggleMenu}>
        {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
      </button>

      {/* Logo and shop name */}
      <div className="logo-container">
        <img src={logo} alt="Aura Avenue Logo" className="logo" />
        <p className="shop-name">Aura Avenue</p>
      </div>

      {/* Navbar links */}
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li className={menu === "shop" ? "active" : ""} onClick={() => handleLinkClick("shop")}>
          <Link className="nav-link" to='/'>Shop</Link>
        </li>
        <li className={menu === "mens" ? "active" : ""} onClick={() => handleLinkClick("mens")}>
          <Link className="nav-link" to='/mens'>Mens</Link>
        </li>
        <li className={menu === "womens" ? "active" : ""} onClick={() => handleLinkClick("womens")}>
          <Link className="nav-link" to='/womens'>Women</Link>
        </li>
        <li className={menu === "kids" ? "active" : ""} onClick={() => handleLinkClick("kids")}>
          <Link className="nav-link" to='/kids'>Kids</Link>
        </li>
        <li className={menu === "about" ? "active" : ""} onClick={() => handleLinkClick("about")}>
          <Link className="nav-link" to='/about'>About Us</Link>
        </li>
        <li className={menu === "contact" ? "active" : ""} onClick={() => handleLinkClick("contact")}>
          <Link className="nav-link" to='/contact'>Contact Us</Link>
        </li>
      </ul>
           
      {/* Cart icon */}
      <Link to='/cart' className="cart-container">
        <img src={cart_icon} alt="Cart Icon" className="cart-icon" />
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </Link>
    </div>
  );
  <div className="nav-login-cart">
           <Link className="nav-link" to='/login'><button>Login</button></Link>
           
           </div>
};

export default Navbar;
