import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Products.css';

const Products = () => {
  const navigate = useNavigate();

  const handleSinglePrintClick = () => {
    navigate('/singleprint');
  };

  const handleCdTemplateClick = () => {
    navigate('/cdtemplate');
  };

  const handleSpotifyTemplateClick = () => {
    navigate('/spotifytemplate');
  };
  
  const images = {
    singlePrint: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727057956/e5vkakuruar6qqn3rjg8.png',
    cdTemplate: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1726974014/s2o46kyqiqoyhwfpzh6j.png',
    spotifyTemplate: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727237071/mlvn80h99gxruhmy8i23.jpg',
  };

  return (
    <div className="product-wrapper">
      <div className="product-message">
         Our goal is to take the endless photos stored on your phone or the cloud and transform them into our custom scrapbook style prints and other products!<br /><br /> 
         Explore our products down below!
      </div>
      <div className="single-print-container" onClick={handleSinglePrintClick}>
        <div className="single-product-text">Single Page Prints</div> 
          <img src={images.singlePrint} alt="Single Print"></img>
      </div>
      <div className="cd-template-container" onClick={handleCdTemplateClick}>
        <div className="single-product-text">CD Template</div> 
          <img src={images.cdTemplate} alt="CD Template"></img>
      </div>
      <div className="spotify-template-container" onClick={handleSpotifyTemplateClick}>
        <div className="single-product-text">Spotify Template</div> 
          <img src={images.spotifyTemplate} alt="Spotify Template"></img>
      </div>
      <div className="coming-soon">More coming soon</div> 
    </div>
  )
}

export default Products
