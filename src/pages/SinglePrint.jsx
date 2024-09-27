import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCards, Pagination, Navigation } from 'swiper/modules';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TemplateStyles.css';
import './SinglePrint.css';

const SinglePrint = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleClick = (link) => {
    window.open(link, '_blank');
  };

  const handleBackClick = () => {
    navigate('/spotifytemplate');
  };

  const handleNextClick = () => {
    navigate('/cdtemplate');
  };


  const handleMockupButtonClick = () => {
    navigate('/mockups');
  };

  const slides = [
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727057956/e5vkakuruar6qqn3rjg8.png',
      title: 'Travel Template',
      text: `🌎 Our travel-inspired scrapbook print makes a wonderful gift for friends, loved ones, or as a cherished keepsake for yourself! 
      Whether you’ve just returned from a backpacking adventure across Europe, honeymooned in Greece, or enjoyed a memorable family vacation, 
      this custom print can be personalized with your photos and text in one beautifully designed page. 🏖️`,    
      link: "https://www.etsy.com/ca/listing/1791138681"
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727065027/hsllrcm1siuacukijfr0.png',
      title: 'Couples Template',
      text: `💕 Our couple-inspired scrapbook print makes a wonderful anniversary gift for your boyfriend, girlfriend, or partner! Customize 
      this print for your better half or as a present for the newly engaged couple! Whether you’re celebrating one year as a couple or 10 
      years of marriage, this custom print can be personalized with your photos and text in one beautifully designed page. ✨`,
      link: "https://www.etsy.com/ca/listing/1780107438"
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1727065027/izy7m5idsncuifatcr3b.png',
      title: 'Birthday Template',
      text: `🎉 Our celebration-inspired scrapbook print makes a wonderful gift for a best friend, partner, or loved one! Whether it's mother's
      day, your sister's graduation or your dad's 50th, this custom print can be personalized with your photos and text to showcase all your 
      fond memories in one beautifully designed page. 🥂`,
      link: "https://www.etsy.com/ca/listing/1794317315"
    }
  ];
  
  return (
    <div className="single-print-wrapper">
      <Navbar />
      <div className="single-print-title">Explore our Single Page Prints</div>
        <div className="template-wrapper">
          <Swiper
            effect={'cards'}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[EffectCards, Pagination, Navigation]}
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
          <button className="previous" onClick={(handleBackClick)}>← Back to the Playlist</button>
          <button className="next" onClick={(handleNextClick)}>Tune into Style →</button>
        </div>
      <Footer />
    </div>
  )
}

export default SinglePrint
