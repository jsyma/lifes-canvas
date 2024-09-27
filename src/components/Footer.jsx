import React from 'react';

import tiktokLogo from '../assets/Tiktok-logo.png';
import instagramLogo from '../assets/Instagram-logo.png';
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
        Connect with us on social media:
      <img src={tiktokLogo} height="50px" alt="Tiktok Logo" onClick={handleTiktokClick}/>
      <img src={instagramLogo} height="50px" alt="Instagram Logo" onClick={handleInstagramClick}/>
    </div>
  )
}

export default Footer
