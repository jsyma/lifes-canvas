import React from 'react';

import tiktokLogo from '../assets/Tiktok-Logo.png';
import instagramLogo from '../assets/Instagram-Logo.png';
import './Footer.css';

const Footer = () => {

  const handleTiktokClick = () => {
    window.open("https://tiktok.com/@lifescanvas/", "_blank");
  };
  
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/lifes.canvas.co/", "_blank");
  };

  return (
    <div className="footer">
      <p>Connect with us on social media:</p> 
      <img src={tiktokLogo} alt="Tiktok Logo" onClick={handleTiktokClick}/>
      <img src={instagramLogo} alt="Instagram Logo" onClick={handleInstagramClick}/>
    </div>
  )
}

export default Footer
