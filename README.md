# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project



import React, { useState } from 'react';
import CategoryNav from './CategoryNav';
import Products from './Products'; // Importing product data
import '../styles/ProductCards.css';

const ProductCard = ({ product }) => {
  const { 
    id, 
    name, 
    price, 
    originalPrice, 
    image, 
    category, 
    isNew, 
    isSale, 
    rating, 
    inStock 
  } = product;

  const [isWishlisted, setIsWishlisted] = useState(() => {
    return JSON.parse(localStorage.getItem(`wishlist-${id}`)) || false;
  });

  const [quantity, setQuantity] = useState(1);

  const toggleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    localStorage.setItem(`wishlist-${id}`, JSON.stringify(!isWishlisted));
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />

        {isNew && <span className="product-badge new-badge">New</span>}
        {isSale && <span className="product-badge sale-badge">Sale</span>}

        <button 
          className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
          onClick={toggleWishlist}
          aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          ❤️
        </button>
      </div>

      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>

        <div className="product-rating">
          {'★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating))}
        </div>

        <div className="product-price">
          <span className="current-price">${price.toFixed(2)}</span>
          {originalPrice > 0 && (
            <span className="original-price">${originalPrice.toFixed(2)}</span>
          )}
          {discount > 0 && (
            <span className="discount-percentage">-{discount}%</span>
          )}
        </div>

        {/* Quantity & Add to Cart Section */}
        <div className="quantity-cart-container">
          <div className="quantity-selector">
            <label htmlFor={`quantity-${id}`}>Qty:</label>
            <input 
              type="number" 
              id={`quantity-${id}`} 
              min="1" 
              value={quantity} 
              onChange={handleQuantityChange} 
            />
          </div>

          <button 
            className="add-to-cart-btn"
            disabled={!inStock}
            aria-label="Add to Cart"
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProductsList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all' 
    ? Products 
    : Products.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div>
      <CategoryNav onCategoryChange={handleCategoryChange} />
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;


