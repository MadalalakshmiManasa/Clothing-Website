# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

 /* General Styles  */
 body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Product Grid - Responsive */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Auto-adjust grid */
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Product Card - Responsive */
.product-card {
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image-container {
  position: relative;
  width: 100%;
  max-width: 250px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Responsive Badges */
.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4757;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.new-badge {
  background-color: #2ed573;
}

.sale-badge {
  background-color: #ff4757;
}

/* Product Actions */
.product-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 14px;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Wishlist & Compare Buttons */
.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  background: none;
  border: none;
}

.wishlist-btn.active {
  color: red;
}

.compare-btn {
  font-size: 12px;
  padding: 5px 8px;
  background-color: #ff9f43;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.compare-btn.active {
  background-color: #ff4757;
}

/* Product Info */
.product-info {
  text-align: center;
  padding: 10px 0;
  width: 100%;
}

.product-category {
  font-size: 12px;
  color: #777;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}

/* Rating */
.product-rating {
  color: gold;
}

/* Pricing */
.product-price {
  font-size: 16px;
  margin: 5px 0;
}

.current-price {
  font-weight: bold;
  color: #28a745;
}

.original-price {
  text-decoration: line-through;
  color: #777;
  margin-left: 5px;
}

.discount-percentage {
  color: #ff4757;
  font-weight: bold;
  margin-left: 5px;
}

/* Quantity Selector */
.quantity-selector {
  margin-top: 10px;
}

.quantity-selector input {
  width: 50px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Filter Dropdown */
.filter-container {
  text-align: center;
  margin: 20px 0;
}

.filter-container select {
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Smaller columns */
    padding: 10px;
  }

  .product-card {
    padding: 10px;
  }

  .product-image-container {
    max-width: 180px;
  }

  .product-name {
    font-size: 16px;
  }

  .product-price {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Even smaller on mobile */
  }

  .product-card {
    padding: 8px;
  }

  .product-image-container {
    max-width: 150px;
  }

  .product-name {
    font-size: 14px;
  }

  .product-price {
    font-size: 12px;
  }
} */
 /* Product Image Styling 
.product-image-container {
  position: relative;
  text-align: center;
  width: 100%;
  height: 200px;  Set a fixed height for the image container 
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures images fill the container without distortion 
  border-radius: 8px;
} 
/* Ensure all product cards have the same height */




  /* General Styles 
 body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Product Grid - Responsive */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Auto-adjust grid */
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Product Card - Responsive */
.product-card {
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image-container {
  position: relative;
  width: 100%;
  max-width: 250px;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Responsive Badges */
.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4757;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.new-badge {
  background-color: #2ed573;
}

.sale-badge {
  background-color: #ff4757;
}

/* Product Actions */
.product-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 14px;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Wishlist & Compare Buttons */
.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  background: none;
  border: none;
}

.wishlist-btn.active {
  color: red;
}

.compare-btn {
  font-size: 12px;
  padding: 5px 8px;
  background-color: #ff9f43;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.compare-btn.active {
  background-color: #ff4757;
}

/* Product Info */
.product-info {
  text-align: center;
  padding: 10px 0;
  width: 100%;
}

.product-category {
  font-size: 12px;
  color: #777;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}

/* Rating */
.product-rating {
  color: gold;
}

/* Pricing */
.product-price {
  font-size: 16px;
  margin: 5px 0;
}

.current-price {
  font-weight: bold;
  color: #28a745;
}

.original-price {
  text-decoration: line-through;
  color: #777;
  margin-left: 5px;
}

.discount-percentage {
  color: #ff4757;
  font-weight: bold;
  margin-left: 5px;
}

/* Quantity Selector */
.quantity-selector {
  margin-top: 10px;
}

.quantity-selector input {
  width: 50px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Filter Dropdown */
.filter-container {
  text-align: center;
  margin: 20px 0;
}

.filter-container select {
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Smaller columns */
    padding: 10px;
  }

  .product-card {
    padding: 10px;
  }

  .product-image-container {
    max-width: 180px;
  }

  .product-name {
    font-size: 16px;
  }

  .product-price {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Even smaller on mobile */
  }

  .product-card {
    padding: 8px;
  }

  .product-image-container {
    max-width: 150px;
  }

  .product-name {
    font-size: 14px;
  }

  .product-price {
    font-size: 12px;
  }
} 


body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

/* Product Grid - Responsive */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Auto-adjust grid */
  gap: 20px;
  padding: 20px;
  justify-content: center;
}

/* Product Card */
.product-card {
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.product-card:hover {
  transform: translateY(-5px);
}

/* Product Image Container - Fixed Ratio for Responsiveness */
.product-image-container {
  width: 100%;
  height: 200px; /* Consistent image height */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Maintain aspect ratio and uniform size */
  border-radius: 8px;
}

/* Responsive Badges */
.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #ff4757;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.new-badge {
  background-color: #2ed573;
}

.sale-badge {
  background-color: #ff4757;
}

/* Product Actions */
.product-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  font-size: 14px;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}

.add-to-cart-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Wishlist & Compare Buttons */
.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 18px;
  background: none;
  border: none;
}

.wishlist-btn.active {
  color: red;
}

.compare-btn {
  font-size: 12px;
  padding: 5px 8px;
  background-color: #ff9f43;
  color: white;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.compare-btn.active {
  background-color: #ff4757;
}

/* Product Info */
.product-info {
  text-align: center;
  padding: 10px 0;
  width: 100%;
}

.product-category {
  font-size: 12px;
  color: #777;
}

.product-name {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}

/* Rating */
.product-rating {
  color: gold;
}

/* Pricing */
.product-price {
  font-size: 16px;
  margin: 5px 0;
}

.current-price {
  font-weight: bold;
  color: #28a745;
}

.original-price {
  text-decoration: line-through;
  color: #777;
  margin-left: 5px;
}

.discount-percentage {
  color: #ff4757;
  font-weight: bold;
  margin-left: 5px;
}

/* Quantity Selector */
.quantity-selector {
  margin-top: 10px;
}

.quantity-selector input {
  width: 50px;
  padding: 5px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
}

/* Filter Dropdown */
.filter-container {
  text-align: center;
  margin: 20px 0;
}

.filter-container select {
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

/* RESPONSIVE DESIGN */
@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Slightly smaller for tablets */
  }

  .product-image-container {
    height: 180px;
  }

  .product-name {
    font-size: 16px;
  }

  .product-price {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); /* Adjust for smaller screens */
    padding: 10px;
  }

  .product-card {
    padding: 10px;
  }

  .product-image-container {
    height: 160px;
  }

  .product-name {
    font-size: 15px;
  }

  .product-price {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Smaller cards for mobile */
  }

  .product-card {
    padding: 8px;
  }

  .product-image-container {
    height: 140px;
  }

  .product-name {
    font-size: 14px;
  }

  .product-price {
    font-size: 12px;
  }

  .add-to-cart-btn {
    font-size: 12px;
    padding: 6px 10px;
  }

  .wishlist-btn {
    font-size: 16px;
  }

  .compare-btn {
    font-size: 10px;
    padding: 4px 6px;
  }
}
