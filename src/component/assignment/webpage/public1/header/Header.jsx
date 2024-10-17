// Header.js
import React from 'react';
import './header.css';

const Header = () => {
  return (
     <nav className='navbar'>
      <img src="" alt="logo" />
      <ul className='list'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
     </nav>
  );
};

export default Header;