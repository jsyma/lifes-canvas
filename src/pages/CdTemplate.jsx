import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TemplateStyles.css';
import './CdTemplate.css';

const CdTemplate = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const images = {
    cdTemplate: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1726974014/s2o46kyqiqoyhwfpzh6j.png',
  };

  const handleBackClick = () => {
    navigate('/singleprint');
  };

  const handleNextClick = () => {
    navigate('/spotifytemplate');
  };


  const handleImageClick = () => {
    setIsClicked(true);
  };

  const handleMockupButtonClick = () => {
    navigate('/mockups');
  };
  
  return (
    <div className="cd-template-wrapper">
        <Navbar />
        <div className="cd-template-title">Explore our CD Template</div>
        <div>        
          <img className={`click-me ${isClicked ? 'hidden' : ''}`} src="src/assets/Click-Me.png" height="40px"/>
        </div>
        <div className="cd-image-container">
          <div className={`cd-image-wrapper ${isClicked ? 'spin' : ''} initial-position`}>
            <img onClick={handleImageClick} src={images.cdTemplate} alt="CD Template" />
          </div>
          <div className={`cd-template-description ${isClicked ? 'show' : ''}`}>
            <div className="template-description">CD Cover Print</div>
            <p> 
            🎶 Our custom CD template is the perfect way to create a unique gift for friends, family, or your significant other! 
            Whether you've just returned from an unforgettable road trip, are commemorating a special event, or want to express 
            your appreciation with a heartfelt gift, this personalized CD design beautifully showcases your memories in one stunning page! 🎵 
            </p>
            <div className="button-container">               
            <button className="browse-mockups" onClick={handleMockupButtonClick}>Browse Mockups</button>
            <button className="find-yours-on-etsy">Find yours on Etsy</button>
          </div>
          </div>
        </div>
        <img className={`click-here ${isClicked ? 'hidden' : ''}`} src="src/assets/Click-Here.png" height="50px" width="70px"/>
        <div className="see-more"> 
          <button className="previous" onClick={(handleBackClick)}>← View Timeless Memories</button>
          <button className="next" onClick={(handleNextClick)}>Check out the Bonus Track! →</button>
        </div>
      <Footer />
    </div>
  )
}

export default CdTemplate
