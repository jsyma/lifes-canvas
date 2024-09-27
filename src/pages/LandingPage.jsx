import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import smallLogo from '../assets/logo.png';
import landingPageLogo from '../assets/landing-page-logo.png';
import exploreImage from '../assets/Explore.png';
import './LandingPage.css';

const LandingPage = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    setShow(false);
    setTimeout(() => {
      navigate("/home", { state: { fromLandingPage: true } });
    }, 1000);
  };

  return (
    <div>
      <AnimatePresence>
        {show && (
          <m.div
            className="logo"
            initial={{ y: "0%" }}
            animate={{ y: "0%" }}
            exit={{ opacity:0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={smallLogo} alt="" height={80} />
          </m.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {show && (
          <m.div
            className="landing-page-wrapper"
            initial={{ y: "0%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-150%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="landing-page-img-container">
              <img src={landingPageLogo} />
            </div>
            <div>
              <button className="landing-page-btn-container" onClick={handleClick}>
                <img src={exploreImage} />
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage
