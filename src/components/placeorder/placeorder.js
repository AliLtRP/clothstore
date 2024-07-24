import React from 'react';
import placeorderStyle from './placeorderstyle.module.css';
import back from './../../assets/back.svg';
import location from '../../assets/location.svg';
import edit from '../../assets/edit.svg';
import rupee from '../../assets/currency_rupee.svg';
import useCartStore from '../../provider/zustand';
import { useNavigate } from 'react-router-dom';
import Header from '../headerComp';
import ButtonComp from '../btnComp';

const Placeorder = () => {
  const navigate = useNavigate();
  const orderDetails = useCartStore((state) => state.orderDetails);

  const handleCheckOut = () => {
    navigate('/shipping');
  };

  const handleBackArrow = () => {
    navigate('/cart');
  };

  const currency = <img src={rupee} style={{ width: '10px', marginTop: '-20%' }} alt="currency" />;

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="max-w-sm flex flex-col gap-6">
        <Header title={"Checkout"} />
        <div className='px-4'>
          <div className={placeorderStyle['checkout-body']}>
            <div className={placeorderStyle['delivery-address']}>
              <img src={location} className={placeorderStyle['location-icon']} alt="Location" />
              <p className={placeorderStyle['delivery-text']}>Delivery Address</p>
            </div>
            <div className={placeorderStyle['address-container']}>
              <div className={placeorderStyle['address-info']}>
                <p className={placeorderStyle['address-title']} style={{ fontSize: '16px' }}>Address:</p>
                <p className={placeorderStyle['address']}>
                  {orderDetails.address}, {orderDetails.selectedCity}, {orderDetails.selectedCountry}
                </p>
                <p className={placeorderStyle['contact']}>Contact: </p>
              </div>
              <img src={edit} className={placeorderStyle['edit-icon']} alt="Edit" />
            </div>
            {orderDetails.cart.map((item, index) => (
              <div key={item.id} className={placeorderStyle['order-container']}>
                <img src={item.img[0].src} className={placeorderStyle['order-img']} alt="Order" />
                <div className={placeorderStyle['order-info']}>
                  <p className={placeorderStyle['order-title']}>{item.name}</p>
                  <p className={placeorderStyle['order-description']}>{item.description}</p>
                  <div className={placeorderStyle['size-qty-container']}>
                    <p>Qty <b>{orderDetails.quantities[index]}</b></p>
                  </div>
                </div>
              </div>
            ))}
            <hr style={{ opacity: '30%', width: '80%' }} />
            <div className={placeorderStyle['order-payment-details']}>
              <p>Order Payment Details</p>
              <div className={placeorderStyle['payment-details']}>
                <p>Order Amounts</p>
                <p style={{ fontWeight: 'bold' }}>{orderDetails.totalPrice}</p>
              </div>
              <div className={placeorderStyle['payment-details']}>
                <p>Convenience</p>
                <a href="#">Know More</a>
                <a href="#">Apply Coupon</a>
              </div>
              <div className={placeorderStyle['payment-details']}>
                <p>Delivery Fee</p>
                <a>Free</a>
              </div>
            </div>
            <hr style={{ opacity: '30%', width: '80%' }} />
            <div className={placeorderStyle['order-total']}>
              <div className={placeorderStyle['payment-details']}>
                <p>Order Total</p>
                <p style={{ fontWeight: 'bold' }}>{orderDetails.totalPrice}</p>
              </div>
              <div className={placeorderStyle['payment-details']}>
                <p>EMI Available</p>
                <a href="#">Details</a>
              </div>
            </div>
            <div className={placeorderStyle['complete-payment']}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {currency}
                <div>
                  <p style={{ fontWeight: 'bold' }}>{orderDetails.totalPrice}</p>
                  <a href="#" style={{ whiteSpace: 'nowrap', fontSize: '14px', color: '#F83758', textDecoration: 'none', fontWeight: 'bold', marginLeft: '-10%' }}>View Details</a>
                </div>
              </div>
              <ButtonComp
                title={"Proceed to Payment"}
                small={true}
                onClick={handleCheckOut}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
