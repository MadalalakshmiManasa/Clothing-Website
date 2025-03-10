import React, { useState } from 'react';
import '../styles/CategoryNav.css';

const CategoryNav = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'men', name: 'Men' },
    { id: 'women', name: 'Women' },
    { id: 'kids', name: 'Kids' },
    { id: 'accessories', name: 'Accessories' }
  ];
  
  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };
  
  return (
    <div className="category-nav">
      <div className="category-container">
        <h2 className="category-title">Shop By Category</h2>
        <div className="category-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;