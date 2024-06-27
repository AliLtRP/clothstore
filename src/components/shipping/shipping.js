import React, { useState } from 'react';
import back from './../../assets/back.svg';
import shippingStyle from './shippingstyle.module.css';
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
    <div className={shippingStyle['shipping-screen-body']}>
      <div className={shippingStyle['shipping-container']}>
        <div className={shippingStyle['checkout-navbar']}>
          <img src={back} className={shippingStyle['left-arrow']} alt="Back" onClick={handleBackArrow} />
          <p className={shippingStyle['checkout-title']}>Checkout</p>
        </div>
        <hr className={shippingStyle['divider']} />
        <div className={shippingStyle['final-order-total']}>
          <div className={shippingStyle['final-payment-details']}>
            <p>Order</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currency}
              <p>7,000.00</p>
            </div>
          </div>
          <div className={shippingStyle['final-payment-details']}>
            <p>Shipping</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currency}
              <p>30</p>
            </div>
          </div>
          <div className={shippingStyle['final-total-details']}>
            <p>Total</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {currencyDarker}
              <p>7,030</p>
            </div>
          </div>
          <hr className={shippingStyle['divider-2']} />
          <p className={shippingStyle['final-address-details']}>Address Details</p>
          <div className={shippingStyle['final-address-info']}>
            <p className={shippingStyle['final-address-titles']}>Address</p>
            <input className={shippingStyle['final-address-input']} placeholder='216 St Paul’s Rd,' />
            <p className={shippingStyle['final-address-titles']}>City</p>
            <input className={shippingStyle['final-city-input']} placeholder='London' />
            <p className={shippingStyle['final-address-titles']}>Country</p>
            <input className={shippingStyle['final-country-input']} placeholder='United Kingdom' />
          </div>
          <button className={shippingStyle['continue-payment']} onClick={handleContinue}>Continue</button>
          <BottomNavBar />
        </div>
      </div>
      <Popup message="Payment done successfully." open={showPopup} onClose={closePopup} />
    </div>
  );
}

export default Shipping;
