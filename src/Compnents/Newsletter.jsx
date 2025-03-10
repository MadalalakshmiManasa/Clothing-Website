import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && validateEmail(email)) {
      // In a real app, you would send this to your backend
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
      
      // Reset subscription message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
    }
  };
  
  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  
  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
          <p className="newsletter-description">
            Stay updated with the latest fashion trends, new arrivals, and exclusive offers from MS BRAND FASHION.
          </p>
          
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </div>
            
            {subscribed && (
              <p className="success-message">Thank you for subscribing!</p>
            )}
          </form>
          
          <p className="privacy-note">
            By subscribing, you agree to our <a href="#">Privacy Policy</a> and consent to receive updates from MS BRAND FASHION.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;