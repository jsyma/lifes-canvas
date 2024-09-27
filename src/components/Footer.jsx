import React from 'react';

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
      <img src="src\assets\Tiktok-Logo.png" height="50px" alt="Tiktok Logo" onClick={handleTiktokClick}/>
      <img src="src\assets\Instagram-Logo.png" height="50px" alt="Instagram Logo" onClick={handleInstagramClick}/>
    </div>
  )
}

export default Footer
