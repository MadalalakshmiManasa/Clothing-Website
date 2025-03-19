
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import bannerImage1 from '../assets/b.1.jpg';
import bannerImage2 from '../assets/b.2.jpg';
import bannerImage3 from '../assets/b.3.jpg';
import bannerImage4 from '../assets/b.4.jpg';
import bannerImage5 from '../assets/b.5.jpg';


const Banner = () => {
  return (
    <div style={styles.container}>
      {/* Left Side Content */}
      <div style={styles.textContent}>
        <h2 style={styles.heading}>Welcome to Our Spring Collection</h2>
        <p style={styles.paragraph}>
          Explore our latest arrivals, crafted with elegance and style. 
          Discover fashion that speaks to your personality and brings out the best in you.
        </p>
        <button style={styles.button}>Shop Now</button>
      </div>
      
      {/* Right Side Image Slider */}
      <nav className="banner" style={styles.banner}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="banner-swiper"
          style={styles.bannerSwiper}
        >
          <SwiperSlide>
            <img src={bannerImage1} alt="Spring Collection 1" style={styles.bannerSlideImage} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImage2} alt="Spring Collection 2" style={styles.bannerSlideImage} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImage3} alt="Spring Collection 3" style={styles.bannerSlideImage} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImage4} alt="Spring Collection 4" style={styles.bannerSlideImage} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={bannerImage5} alt="Spring Collection 4" style={styles.bannerSlideImage} />
          </SwiperSlide>
        </Swiper>
      </nav>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    flexWrap: 'wrap',
    height: '300px',
  },
  textContent: {
    width: '40%',
    padding: '20px',
    backgroundColor: '#e0e0e0', /* Slightly darker for contrast */
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    height: '250px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  banner: {
    width: '55%',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  bannerSwiper: {
    width: '80%',
    maxWidth: '650px',
  },
  bannerSlideImage: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
};

export default Banner;

