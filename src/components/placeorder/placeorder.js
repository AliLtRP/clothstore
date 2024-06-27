import React from 'react';
import placeorderStyle from './placeorderstyle.module.css';
import back from './../../assets/back.svg';
import location from '../../assets/location.svg';
import edit from '../../assets/edit.svg';
import orderimg from '../../assets/orderimg.png';
import rupee from '../../assets/currency_rupee.svg';
import { useNavigate } from 'react-router-dom';

const Placeorder = () => {

  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate('/shipping')
  }

  const currency = <img src={rupee} style={{width: '10px', marginTop: '-20%'}} alt="currency" />;

  return (
    <div>
      <div className={placeorderStyle['checkout-navbar']}>
        <img src={back} className={placeorderStyle['left-arrow']} alt="Back" />
        <p className={placeorderStyle['checkout-title']}>Checkout</p>
      </div>
      <hr style={{opacity: '30%', width: '100%', marginTop: '-5px'}} />
      <div className={placeorderStyle['checkout-body']}>
        <div className={placeorderStyle['delivery-address']}>
          <img src={location} className={placeorderStyle['location-icon']} alt="Location" />
          <p className={placeorderStyle['delivery-text']}>Delivery Address</p>
        </div>
        <div className={placeorderStyle['address-container']}>
          <div className={placeorderStyle['address-info']}>
            <p className={placeorderStyle['address-title']} style={{fontSize: '16px'}}>Address:</p>
            <p className={placeorderStyle['address']}>216 St Paul's Rd, London N1 2LL, UK</p>
            <p className={placeorderStyle['contact']}>Contact: +44-784232</p>
          </div>
          <img src={edit} className={placeorderStyle['edit-icon']} alt="Edit" />
        </div>
        <div className={placeorderStyle['odred-container']}>
          <img src={orderimg} className={placeorderStyle['order-img']} alt="Order" />
          <div className={placeorderStyle['order-info']}> 
            <p className={placeorderStyle['order-title']}>Women’s Casual Wear</p>
            <p className={placeorderStyle['order-info']}>Checked Single-Breasted<br/>Blazer</p>
            <div className={placeorderStyle['size-qty-container']}>
              <p>Size <b>42</b></p>
              <p>Qty <b>1</b></p>
            </div>
          </div>
        </div>
        <div className={placeorderStyle['odred-container']}>
          <img src={orderimg} className={placeorderStyle['order-img']} alt="Order" />
          <div className={placeorderStyle['order-info']}> 
            <p className={placeorderStyle['order-title']}>Women’s Casual Wear</p>
            <p className={placeorderStyle['order-info']}>Checked Single-Breasted<br/>Blazer</p>
            <div className={placeorderStyle['size-qty-container']}>
              <p>Size <b>42</b></p>
              <p>Qty <b>1</b></p>
            </div>
          </div>
        </div>
        <hr style={{opacity: '30%', width: '80%'}} />
        <div className={placeorderStyle['order-payment-details']}>
          <p>Order Payment Details</p>
          <div className={placeorderStyle['payment-details']}>
            <p>Order Amounts</p>
            <p style={{fontWeight: 'bold'}}>7,000.00</p>
          </div>
          <div className={placeorderStyle['payment-details']}>
            <p>Convenience</p>
            <a href="#">Know More</a>
            <a href="#">Apply Coupon</a>
          </div>
          <div className={placeorderStyle['payment-details']}>
            <p>Delivery Fee</p>
            <p style={{fontWeight: 'bold', color: '#F83758'}}>Free</p>
          </div>
        </div>
        <hr style={{opacity: '30%', width: '80%'}} />
        <div className={placeorderStyle['order-total']}>
          <div className={placeorderStyle['payment-details']}>
            <p>Order Total</p>
            <p style={{fontWeight: 'bold'}}>7,000.00</p>
          </div>
          <div className={placeorderStyle['payment-details']}>
            <p>EMI Available</p>
            <a href="#">Details</a>
          </div>
        </div>
        <div className={placeorderStyle['complete-payment']}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            {currency}
            <div>
              <p style={{fontWeight: 'bold'}}>7,000.00</p>
              <a href="#" style={{whiteSpace: 'nowrap', fontSize: '14px', color: '#F83758', textDecoration: 'none', fontWeight: 'bold', marginLeft: '-10%'}}>View Details</a>
            </div>
          </div>
          <button onClick={handleCheckOut}>Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
