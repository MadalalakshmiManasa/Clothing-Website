import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">Spring Collection 2025</h1>
          <p className="banner-subtitle">
            Discover the latest trends in fashion at MS BRAND FASHION. 
            From elegant designs to casual wear, we have something for everyone.
          </p>
          <div className="banner-buttons">
            <button className="shop-now-btn">Shop Now</button>
            <button className="explore-btn">Explore Collections</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;