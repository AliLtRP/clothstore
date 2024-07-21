import React from 'react';
import getstartedStyle from './getstartedstyle.module.css';
import { useNavigate } from 'react-router-dom';
import bg_img from "../../assets/clothesimg.png";


const Getstarted = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/home');
  };

  return (
    <div className="min-w-full w-full max-h-[100vh] montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className={`w-full max-w-sm p- flex flex-col gap-6`}>
        <img src={bg_img} className=' object-cover h-[100vh] w-[100vw]'/>

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
    </div>
  );
};

export default Getstarted;

