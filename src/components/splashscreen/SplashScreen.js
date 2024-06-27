import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import splashimg1 from '../../assets/splash1.svg';
import splashimg2 from '../../assets/splash2.svg';
import splashimg3 from '../../assets/splash3.svg';
import './splashscreenstyle.css';

const splashCollection = [
  {
    label: 'Choose Products',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: splashimg1,
  },
  {
    label: 'Make Payment',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: splashimg2,
  },
  {
    label: 'Get Your Order',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
    img: splashimg3,
  },
];

const SplashScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const nextScreen = () => {
    if (currentIndex < splashCollection.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/signin');
    }
  };

  const prevScreen = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src={splashCollection[currentIndex].img} alt={splashCollection[currentIndex].label} />
        <h2>{splashCollection[currentIndex].label}</h2>
        <p>{splashCollection[currentIndex].description}</p>
      </div>
      <div className="splash-navigation">
        <button
          className={`splash-navigate ${currentIndex === 0 ? 'splash-navigation-disable' : ''}`}
          onClick={prevScreen}
          disabled={currentIndex === 0}
        >
          Prev
        </button>
        <div className="dots">
          {splashCollection.map((_, index) => (
            <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`}></span>
          ))}
        </div>
        <button
          className={`splash-navigate ${currentIndex === splashCollection.length - 1 ? 'start-btn' : ''}`}
          onClick={nextScreen}
        >
          {currentIndex === splashCollection.length - 1 ? 'Get Started' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default SplashScreen;
