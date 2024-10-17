// App.js
import React from 'react';
import Header from './public1/header/Header';
import MainContent from './public1/main/MainContent';
import Footer from './public1/footer/Footer';
import './web.css';

const Web = () => {
  return (
    <div className="web">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Web;