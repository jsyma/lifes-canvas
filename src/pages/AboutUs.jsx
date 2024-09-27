import React from 'react';

import Navbar from '../components/Navbar';
import './AboutUs.css';

const AboutUs = () => {

  const images = {
    jma: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1726973049/JM_gd0nv8.jpg',
    mh: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1726973517/rbrezdb1sfmksip1yr7e.jpg',
  };

  return (
    <div>
      <Navbar />
        <div className="about-us-wrapper">
          <div className="about-us-title">Our Story</div>
          <div className="our-story">Born out of a love for photos, we created LC to capture all of your fondest memories in a digital scrapbook-inspired template. Life's Canvas is our passion project with a mission to take the endless photos we have stored on the cloud into a hard copy print with a unique scrapbook feel. Thanks for entrusting us with your keepsake memories! We hope they last you a lifetime!</div>
          <div className="about-us-owners">The Artists behind Life's Canvas</div>
          <div className="owner">
            <div className="owner-icon">
              <img src={images.mh} alt="mh icon"/>
              Michelle
            </div>
            <div className="owner-description">Sushi lover, e-book enthusiast, and one half of Life's Canvas!</div>
          </div>
          <div className="owner">
            <div className="owner-icon">
              <img src={images.jma} alt="jma icon"/>
              Jonathan
            </div>
            <div className="owner-description">Sports lover, art enthusiast, and the other half of Life's Canvas!</div>
          </div>
        </div>
  </div>
  )
}

export default AboutUs
