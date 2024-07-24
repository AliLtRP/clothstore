import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import getstartedStyle from './getstartedstyle.module.css';
import { useNavigate } from 'react-router-dom';
import bg_img from "../../assets/clothesimg.png";
import 'react-lazy-load-image-component/src/effects/blur.css'; 

const Getstarted = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/home');
  };

  return (
    <div className="w-full h-full montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
        <LazyLoadImage 
          src={bg_img} 
          className='object-cover absolute inset-0 h-[100vh]'
          effect="blur" 
          width="100%"
        />

        <h1 className={getstartedStyle['getstarted-title']}>
          You want<br /> Authentic, here<br /> you go!
        </h1>
        <p className={getstartedStyle['getstarted-subtitle']}>
          Find it here, buy it now!
        </p>
        <button className={getstartedStyle['getstarted-btn']} onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>
  );
};

export default Getstarted;
