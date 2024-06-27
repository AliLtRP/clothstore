import React from 'react';
import './placeorderstyle.css';
import back from './../../assets/back.svg';
import location from '../../assets/location.svg';
import edit from '../../assets/edit.svg';
import orderimg from '../../assets/orderimg.png';
import rupee from '../../assets/currency_rupee.svg';
import {useNavigate } from 'react-router-dom';

const Placeorder = () => {

  const navigate = useNavigate();
  const handleCheckOut = () => {
    navigate('/shipping')
  }

  const currency = <img src={rupee} style={{Width:'10px',marginTop:'-20%'}}></img>
  return (
    <div>
      <div className='checkout-navbar'>
        <img src={back} className='left-arrow' alt="Back"/>
        <p className='checkout-title'>Checkout</p>
      </div>
      <hr style={{opacity:'30%',width:'100%' , marginTop:'-15px'}} />
      <div className='checkout-body'>
        <div className='delivery-address'>
          <img src={location} className='location-icon' alt="Location"/>
          <p className='delivery-text'>Delivery Address</p>
        </div>
        <div className='address-container'>
          <div className='address-info'>
            <p className='address-title' style={{fontSize:'16px'}}>Address:</p>
            <p className='address'>216 St Paul's Rd, London N1 2LL, UK</p>
            <p className='contact'>Contact :  +44-784232</p>
          </div>
          <img src={edit} className='edit-icon' alt="Edit"/>
        </div>
        <div className='odred-container'>
          <img src={orderimg} className='order-img' alt="Order"/>
          <div className='order-info'> 
            <p className='order-title'>Women’s Casual Wear</p>
            <p className='order-info'>Checked Single-Breasted<br/>Blazer</p>
            <div className='size-qty-container'>
              <p>Size <b>42</b></p>
              <p>Qty <b>1</b></p>
            </div>
          </div>
        </div>
        <div className='odred-container'>
          <img src={orderimg} className='order-img' alt="Order"/>
          <div className='order-info'> 
            <p className='order-title'>Women’s Casual Wear</p>
            <p className='order-info'>Checked Single-Breasted<br/>Blazer</p>
            <div className='size-qty-container'>
              <p>Size <b>42</b></p>
              <p>Qty <b>1</b></p>
            </div>
          </div>
        </div>
        <hr style={{opacity:'30%',width:'80%'}} />
        <div className='order-payment-details'>
          <p>Order Payment Details</p>
          <div className='payment-details'>
            <p>Order Amounts</p>
            <p style={{fontWeight:'bold'}}>7,000.00</p>
          </div>
          <div className='payment-details'>
            <p>Convenience</p>
            <a href="#">Know More</a>
            <a href="#">Apply Coupon</a>
          </div>
          <div className='payment-details'>
            <p>Delivery Fee</p>
            <p style={{fontWeight:'bold',color:'#F83758'}}>Free</p>
          </div>
        </div>
        <hr style={{opacity:'30%',width:'80%'}} />
        <div className='order-total'>
          <div className='payment-details'>
            <p>Order Total</p>
            <p style={{fontWeight:'bold'}}>7,000.00</p>
          </div>
          <div className='payment-details'>
            <p>EMI Available</p>
            <a href="#">Details</a>
          </div>
        </div>
        <div className='complete-payment'>
          <div style={{display: 'flex', alignItems: 'center'}}>
            {currency}
            <div>
            <p style={{fontWeight:'bold'}}>7,000.00</p>
            <a href="#" style={{textWrap:'nowrap' , fontSize:'14px',color:'#F83758',textDecoration:'none',fontWeight:'bold',marginLeft:'-10%'}}>View Details</a>
            </div>
          </div>
          <button onClick={handleCheckOut}>Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Placeorder;
