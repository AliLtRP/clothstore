import React from 'react';
import getstartedStyle from './getstartedstyle.module.css';

const Getstarted = () => {
  return (
    <div className={getstartedStyle['getstarted-body']}>
      <h1 className={getstartedStyle['getstarted-title']}>
        You want<br/> Authentic, here<br/> you go!
      </h1>
      <p className={getstartedStyle['getstarted-subtitle']}>
        Find it here, buy it now!
      </p>
      <button className={getstartedStyle['getstarted-btn']}>
        Get Started
      </button>
    </div>
  );
};

export default Getstarted;
