import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/Cart_icon.png';
import { FiMenu, FiX } from 'react-icons/fi';

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");  // Default active state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);  // Close menu when a link is clicked
  };

  return (
    <div className="navbar-container">
      {/* Toggle button for mobile */}
      <button className="navbar-toggler" onClick={toggleMenu}>
        {isMenuOpen ? <FiX className="menu-icon" /> : <FiMenu className="menu-icon" />}
      </button>

      {/* Centered logo and shop name */}
      <div className="logo-container">
        <img src={logo} alt="Aura Avenue Logo" className="logo" />
        <p className="shop-name">Aura Avenue</p>
      </div>

      {/* Centered navbar links */}
      <div className="links-wrapper">
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li className={menu === "shop" ? "active" : ""} onClick={() => { setMenu("shop"); closeMenu(); }}>
            <Link className="nav-link" to='/'>Shop</Link>
          </li>
          <li className={menu === "mens" ? "active" : ""} onClick={() => { setMenu("mens"); closeMenu(); }}>
            <Link className="nav-link" to='/mens'>Mens</Link>
          </li>
          <li className={menu === "womens" ? "active" : ""} onClick={() => { setMenu("womens"); closeMenu(); }}>
            <Link className="nav-link" to='/womens'>Women</Link>
          </li>
          <li className={menu === "kids" ? "active" : ""} onClick={() => { setMenu("kids"); closeMenu(); }}>
            <Link className="nav-link" to='/kids'>Kids</Link>
          </li>
          <li className={menu === "about" ? "active" : ""} onClick={() => { setMenu("about"); closeMenu(); }}>
            <Link className="nav-link" to='about'>About Us</Link>
          </li>
          <li className={menu === "contact" ? "active" : ""} onClick={() => { setMenu("contact"); closeMenu(); }}>
            <Link className="nav-link" to='contact'>Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Cart icon in the right corner */}
      <Link to='/cart' className="cart-container">
        <img src={cart_icon} alt="Cart Icon" className="cart-icon" />
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </Link>
    </div>
  );
}

export default Navbar;




