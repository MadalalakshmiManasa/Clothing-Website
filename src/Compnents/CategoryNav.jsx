

import React, { useState, useCallback } from 'react';
import '../styles/CategoryNav.css';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'men', name: 'Men' },
  { id: 'women', name: 'Women' },
  { id: 'kids', name: 'Kids' },
  { id: 'accessories', name: 'Accessories' }
];

const CategoryNav = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = useCallback((categoryId) => {
    if (activeCategory !== categoryId) {
      setActiveCategory(categoryId);
      onCategoryChange?.(categoryId); // Optional chaining for safety
    }
  }, [activeCategory, onCategoryChange]);

  return (
    <nav className="category-nav" aria-label="Product Categories">
      <div className="category-container">
        <h2 className="category-title">Shop by Category</h2>
        <div className="category-buttons" role="tablist">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              className={`category-button ${activeCategory === id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(id)}
              aria-selected={activeCategory === id}
              role="tab"
            >
              {name}
            </button>  
          ))}
        </div>
      </div>
    </nav>
  );
};


export default CategoryNav;



