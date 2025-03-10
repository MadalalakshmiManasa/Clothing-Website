import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <h1>MS BRAND FASHION</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              <li><a href="#" className="nav-link">Home</a></li>
              <li><a href="#" className="nav-link">Shop</a></li>
              <li><a href="#" className="nav-link">Men</a></li>
              <li><a href="#" className="nav-link">Women</a></li>
              <li><a href="#" className="nav-link">Kids</a></li>
              <li><a href="#" className="nav-link">About</a></li>
              <li><a href="#" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          
          {/* User Actions */}
          <div className="user-actions">
            <div className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="user-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="wishlist-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
            <div className="auth-buttons">
              <button className="login-btn">Login</button>
              <button className="signup-btn">Sign Up</button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="mobile-menu-button" onClick={toggleMobileMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {/* <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#" className="mobile-nav-link">Home</a></li>
            <li><a href="#" className="mobile-nav-link">Shop</a></li>
            <li><a href="#" className="mobile-nav-link">Men</a></li>
            <li><a href="#" className="mobile-nav-link">Women</a></li>
            <li><a href="#" className="mobile-nav-link">Kids</a></li>
            <li><a href="#" className="mobile-nav-link">About</a></li>
            <li><a href="#" className="mobile-nav-link">Contact</a></li>
          </ul>
        </div> */}
      </div>
    </header>
  );
};

export default Header;