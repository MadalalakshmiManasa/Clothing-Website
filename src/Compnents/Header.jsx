

// import React, { useState } from 'react';
// import '../styles/Header.css';

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e) => {
//     if (e.key === 'Enter') {
//       console.log('Searching for:', searchQuery);
//     }
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         {/* Logo and Brand Name */}
//         <div className="logo-container">
//           <img src="..\assets\MS fashion logo.jpg" alt="Brand Logo" className="logo" />
//           <h1 className="brand-name">MS BRAND FASHION</h1>
//         </div>

//         {/* Search Bar */}
//         <div className="search-bar">
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             value={searchQuery} 
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyPress={handleSearch}
//           />
//           <button className="search-button">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="11" cy="11" r="8"></circle>
//               <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//             </svg>
//           </button>
//         </div>

//         {/* Icons */}
//         <div className="user-actions">
//           <div className="notification-icon">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"></path>
//               <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//             </svg>
//           </div>
//           <div className="wishlist-icon">
//             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
//             </svg>
//           </div>
//           <div className="trolley-icon">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="9" cy="21" r="1"></circle>
//               <circle cx="20" cy="21" r="1"></circle>
//               <path d="M1 1h4l2.8 13.1a2 2 0 0 0 2 1.6H19a2 2 0 0 0 2-1.7l1.4-7.6H5"></path>
//             </svg>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
// 
import React, { useState } from "react";
import styled from "styled-components";

// Updated Navbar Styling with Fashion Theme
const HeaderContainer = styled.header`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  padding: 15px 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: white;
  padding: 5px;
`;

const BrandName = styled.h1`
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  width: 200px;
  font-size: 14px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #ff4b2b;
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  margin: 0 10px;
  cursor: pointer;

  svg {
    stroke: white;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Dropdown = styled.select`
  background-color: white;
  color: black;
  border: none;
  padding: 5px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  font-weight: bold;
`;

// Header Component
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <HeaderContainer>
      <NavContainer>
        {/* Logo and Brand Name */}
        <LogoContainer>
        <Logo src="/assets/image.png" alt="Brand Logo" />
          <BrandName>MS BRAND FASHION</BrandName>
        </LogoContainer>

        {/* Dropdown Menu */}
        {/* <Dropdown>
          <option>Categories</option>
          <option>Men</option>
          <option>Women</option>
          <option>Kids</option>
          <option>Accessories</option>
        </Dropdown> */}

        {/* Search Bar */}
        <SearchBar>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <SearchButton>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </SearchButton>
        </SearchBar>

        {/* Icons */}
        <UserActions>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </Icon>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </Icon>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.8 13.1a2 2 0 0 0 2 1.6H19a2 2 0 0 0 2-1.7l1.4-7.6H5"></path>
            </svg>
          </Icon>
        </UserActions>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;





