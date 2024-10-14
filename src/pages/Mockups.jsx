import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './TemplateStyles.css';
import './Mockups.css';

const Mockups = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSinglePrintClick = () => {
    navigate('/singleprint');
  };

  const handleSpotifyTemplateClick = () => {
    navigate('/spotifytemplate');
  };

  const handleCdTemplateClick = () => {
    navigate('/cdtemplate');
  };

  const slides = [
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728875330/ritd0j9vsmnrypjkangl.png',
      title: 'Travel Mockup',
      link: handleSinglePrintClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728875329/klcjpmjiubh44l9eecqf.png',
      title: 'Travel Mockup',
      link: handleSinglePrintClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728875466/opbznp5iphv85axc5dhh.png',
      title: 'Birthday Mockup',
      link: handleSinglePrintClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728875465/mgdmcwe9tydtreggmitm.png',
      title: 'Couples Mockup',
      link: handleSinglePrintClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728875471/m8rgwmutuohsn47ejk6z.png',
      title: 'Couples Mockup',
      link: handleSinglePrintClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728875659/bos5lynzpg6qgbiqvgum.png',
      title: 'Spotify Playlist Mockup',
      link: handleSpotifyTemplateClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728881450/yblnzspfewsfcpq5gy9b.png',
      title: 'Spotify Playlist Mockup',
      link: handleSpotifyTemplateClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728881451/l6nteobo45xnrrdtq4vz.png',
      title: 'Spotify Album Mockup',
      link: handleSpotifyTemplateClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728881447/znpobvly7rbjbp0kztqn.png',
      title: 'CD Template Mockup',
      link: handleCdTemplateClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728881449/gl4viwdcjkdtttoywjxp.png',
      title: 'CD Template Mockup',
      link: handleCdTemplateClick
    },
    {
      image: 'https://res.cloudinary.com/dqgviyg1w/image/upload/v1728881448/qouseva3u1bqy4lrscvo.png',
      title: 'CD Template Mockup',
      link: handleCdTemplateClick
    }
  ];
    
  return (
    <div className="mockup-wrapper">
      <Navbar />
      <div className="mockup-title">Explore our Mockups</div>
      <div className="mockup-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mockup-images"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.image} alt="Mockup Photos" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mockup-description-title">
          <p>{slides[activeIndex].title}</p>
          <button className="browse-mockups" style={{ width: '100px' }}onClick={slides[activeIndex].link}>
            See More
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Mockups
