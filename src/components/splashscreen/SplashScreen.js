import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import splashimg1 from '../../assets/splash1.svg';
import splashimg2 from '../../assets/splash2.svg';
import splashimg3 from '../../assets/splash3.svg';
import splashStyle from './splashscreenstyle.module.css';

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
    <div className="w-full max-w-sm h-[100dvh] bg-[aqua montserrat flex flex-col items-center mx-auto bg-[#FDFDFD">
      <div className="w-full h-full p- flex flex-col justify-start gap-6">
          <div className="w-full h-[75%] flex flex-col justify-end items-center">
            <img src={splashCollection[currentIndex].img} alt={splashCollection[currentIndex].label} className={`${currentIndex == 2 ? "mb-[-12px]": ""} ${currentIndex == 0 ? "mb-[-9px]": ""} object-cover w-[300px] h-[300px] px-2`}/>
            <h2 className=' font-bold text-2xl text-center leading-8 mt-1'>{splashCollection[currentIndex].label}</h2>
            <p className=' w-[340px] font-semibold text-sm text-center text-[#A8A8A9] pt-1.5 leading-6 tracking-[2%]'>{splashCollection[currentIndex].description}</p>
          </div>

          <div className={splashStyle['splash-navigation'] + " max-w-sm w-full"}>
            <button
              className={`${splashStyle['splash-navigate']} ${currentIndex === 0 ? splashStyle['splash-navigation-disable'] + " invisible" : ''}`}
              onClick={prevScreen}
              disabled={currentIndex === 0}
            >
              Prev
            </button>
            <div className={splashStyle['dots']}>
              {splashCollection.map((_, index) => (
                <span key={index} className={`${splashStyle['dot']} ${index === currentIndex ? splashStyle['active'] : ''}`}></span>
              ))}
            </div>
            <button
              className={`${splashStyle['splash-navigate']} ${currentIndex === splashCollection.length - 1 ? splashStyle['start-btn'] : ''}`}
              onClick={nextScreen}
            >
              {currentIndex === splashCollection.length - 1 ? 'Get Started' : 'Next'}
            </button>
          </div>
        </div>
      </div>
  );
};

export default SplashScreen;
