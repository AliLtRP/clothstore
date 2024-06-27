import React, { useState } from 'react';
import back from './../../assets/back.svg';
import './shippingstyle.css';
import { useNavigate } from 'react-router-dom';
import rupee from '../../assets/currency_rupee.svg';
import BottomNavBar from '../btm-navbar/btmNavbar';
import Popup from '../popupsuccess/popup';
const Shipping = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleBackArrow = () => {
    navigate('/placeorder');
  };

  const handleContinue = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const currency = <img src={rupee} style={{ width: '10px', opacity: '40%', marginRight: '5px' }} alt="Rupee" />;
  const currencyDarker = <img src={rupee} style={{ width: '10px', marginRight: '5px' }} alt="Rupee" />;

  return (
    <div className='shipping-screen-body'>
      <div className='shipping-container'>
        <div className='checkout-navbar'>
          <img src={back} className='left-arrow' alt="Back" onClick={handleBackArrow} />
          <p className='checkout-title'>Checkout</p>
        </div>
        <hr className='divider' />
        <div className='final-order-total'>
          <div className='final-payment-details'>
            <p>Order</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currency}
              <p>7,000.00</p>
            </div>
          </div>
          <div className='final-payment-details'>
            <p>Shipping</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currency}
              <p>30</p>
            </div>
          </div>
          <div className='final-total-details'>
            <p>Total</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currencyDarker}
              <p>7,030</p>
            </div>
          </div>
          <hr className='divider-2' />
          <p className='final-address-details'>Address Details</p>
          <div className='final-address-info'>
            <p className='final-address-titles'>Address</p>
            <input className='final-address-input' placeholder='216 St Paul’s Rd,' />
            <p className='final-address-titles'>City</p>
            <input className='final-city-input' placeholder='London' />
            <p className='final-address-titles'>Country</p>
            <input className='final-country-input' placeholder='United Kingdom' />
          </div>
          <button className='continue-payment' onClick={handleContinue}>Continue</button>
          <BottomNavBar />
        </div>
      </div>
      <Popup message="Payment done successfully." open={showPopup} onClose={closePopup} />
    </div>
  );
}

export default Shipping;
