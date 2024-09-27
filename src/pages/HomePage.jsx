import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Products from '../components/Products';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (location.state?.fromLandingPage) {
      setShouldAnimate(true);
      const timer = setTimeout(() => {
        navigate("/home", { replace: true, state: { fromLandingPage: false } });
        setShouldAnimate(false);
        if (!shouldAnimate) {
          document.body.style.overflow = "hidden";
        }
  }, 1000);

        return () => clearTimeout(timer);
    }
  }, [location.state]);

  return (
   <div>
      <Navbar />
      <AnimatePresence>
        {shouldAnimate && (
          <m.div 
            className="homepage-wrapper"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="homepage-title">Welcome to Life's Canvas!</div>
           <div>
           <Products />
           </div>
          </m.div>
        )}
        {!shouldAnimate && (
          <div className="homepage-wrapper">
            <div className="homepage-title">Welcome to Life's Canvas!</div>
           <Products />
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HomePage
