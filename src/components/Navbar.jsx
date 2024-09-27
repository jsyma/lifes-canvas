import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleAboutUsClick = () => {
    navigate('/aboutus');
  };

  const handleIconClick = () => {
    navigate('/home')
  };

  const handleContactUsClick = () => {
    navigate('/contactus')
  };

  const handleShopIconClick = () => {
    window.open('https://lifescanvasco.etsy.com', '_blank');
  };
  
  useEffect(() => {
    if (location.state?.fromLandingPage) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }});

  return (
    <div>
      <nav className={shouldAnimate ? "nav-bar animate" : "nav-bar"}>
      <NavLink>
        <img className="navigation-logo" src="src/assets/landing-page-logo.png" height="50px" onClick={handleIconClick}/>
        <img className="navigation-logo-small" src="src\assets\logo.png" height="30px" onClick={handleIconClick} />
      </NavLink>
          <button className="button nav-ourshop" onClick={handleShopIconClick}>
            <span>Visit Our Shop!</span>
          </button>
          <button className="button nav-aboutus" onClick={handleAboutUsClick}>
            <span>About Us</span>
          </button>
           <button className="button nav-contactus" onClick={handleContactUsClick}>
            <span>Contact Us</span>
          </button>
      
    </nav>
    </div>
  )
}

export default Navbar
