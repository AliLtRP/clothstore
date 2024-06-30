import React from 'react';
import getstartedStyle from './getstartedstyle.module.css';
import { useNavigate } from 'react-router-dom';

const Getstarted = () => {

  const navigate = useNavigate()
  

  const handleGetStartedClick = () => {
    navigate('/homepage'); 
  };
  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
      <div className={getstartedStyle['getstarted-body']}>
      <h1 className={getstartedStyle['getstarted-title']}>
        You want<br/> Authentic, here<br/> you go!
      </h1>
      <p className={getstartedStyle['getstarted-subtitle']}>
        Find it here, buy it now!
      </p>
      <button className={getstartedStyle['getstarted-btn']} onClick={handleGetStartedClick}>
        Get Started
      </button>
    </div>
      </div>
    </div>
   
  );
};

export default Getstarted;
