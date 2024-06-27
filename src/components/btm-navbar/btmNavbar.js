import React from 'react';
import cart from '../../assets/cart.svg';
import heart from '../../assets/heart.svg';
import search from '../../assets/search.svg';
import setting from '../../assets/settings.svg';
import home from '../../assets/home.svg';
import './btmNavbarStyle.css';

const BottomNavBar = () => {


  return (
    <div className='btm-navbar-container'>
      <div className='icon-nav-btns' >
        <img src={home} alt="Home" />
        <a href='###' className='home'>Home</a>
      </div>
      <div className='icon-nav-btns' >
        <img src={heart} alt="Wishlist" />
        <a href='###' className='wishlist'>Wishlist</a>
      </div>
      <div className='cart-icon-nav-btn' >
        <div className='cart-icon-wrapper'>
          <img src={cart} alt="Cart" />
          <div className='red-circle'></div>
        </div>
      </div>
      <div className='icon-nav-btns'>
        <img src={search} alt="Search" />
        <a href='###' className='search'>Search</a>
      </div>
      <div className='icon-nav-btns'>
        <img src={setting} alt="Setting" />
        <a href='###' className='setting'>Setting</a>
      </div>
    </div>
  );
}

export default BottomNavBar;


