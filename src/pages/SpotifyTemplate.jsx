import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TemplateStyles.css';
import './SpotifyTemplate.css';


const SpotifyTemplate = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727237071/mlvn80h99gxruhmy8i23.jpg',
      title: 'Playlist Template',
      text: `💕 Our couples-inspired Spotify playlist makes a wonderful anniversary gift for your boyfriend, girlfriend, or partner!
      Customize this print for your better half or as a present for the newly engaged couple! Whether you’re celebrating one year as 
      a couple or 10 years of marriage, this custom print can be personalized with your photos in one beautifully designed page. ✨`,    
      link: "https://www.etsy.com/ca/listing/1791138681"
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727411974/nqp3dj32pc4wltlsibq9.png',
      title: 'Album Cover Template',
      text: `💕 Our couples-inspired Spotify Album Cover makes a wonderful anniversary gift for your boyfriend, girlfriend, or partner! 
      Customize this print for your better half or as a present for the newly engaged couple! Whether you’re celebrating one year as a 
      couple or 10 years of marriage, this custom print can be personalized with your photos and text in one beautifully designed page. ✨`,
      link: "https://www.etsy.com/ca/listing/1780107438"
    },
  ];

  const handleBackClick = () => {
    navigate('/cdtemplate');
  };

  const handleNextClick = () => {
    navigate('/singleprint');
  };

  const handleMockupButtonClick = () => {
    navigate('/mockups');
  };

  return (
    <div className="spotify-template-wrapper">
      <Navbar />
      <div className="spotify-template-title">Explore our Spotify Templates</div>
      <div className="template-wrapper">
        <Swiper
          effect={'flip'}
          loop={true}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </SwiperSlide>
            ))}

        </Swiper>

        <div className="template-description">
            {slides[activeIndex].title}
            <p>{slides[activeIndex].text}</p>
          </div>
          <div className="button-container">               
            <button className="browse-mockups" onClick={handleMockupButtonClick}>Browse Mockups</button>
            <button className="find-yours-on-etsy" onClick={() => handleClick(slides[activeIndex].link)}>Find yours on Etsy</button>
          </div>
        </div>
        <div className="see-more"> 
          <button className="previous" onClick={(handleBackClick)}>← Rewind the CD</button>
          <button className="next" onClick={(handleNextClick)}>Celebrate every moment →</button>
        </div>
      <Footer />
    </div>
  )
}

export default SpotifyTemplate
