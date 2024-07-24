import React, { useState } from 'react';
import back from './../../assets/back.svg';
import shippingStyle from './shippingstyle.module.css';
import { useNavigate } from 'react-router-dom';
import rupee from '../../assets/currency_rupee.svg';
import Popup from '../popupsuccess/popup';
import Footer from '../home page/Footer';
import useCartStore from '../../provider/zustand';
import { jwtDecode } from 'jwt-decode';
import client from './../../api/axios'
import ButtonComp from '../btnComp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shipping = () => {
  const navigate = useNavigate();
  const orderDetails = useCartStore((state) => state.orderDetails);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleBackArrow = () => {
    navigate('/placeorder');
  };

  const token = localStorage.getItem('token');
  console.log("Token:", token);

  let userId;
  if (token) {
    const decodedToken = jwtDecode(token);
    userId = decodedToken.id;
    console.log("Decoded User ID:", userId);
  }

  const handleContinue = async () => {
    setLoading(true);

    const requestBody = {

      items: orderDetails.cart,
      address: orderDetails.address,
      phone: 1234,
      total_price: orderDetails.totalPrice,
      city: orderDetails.selectedCity,
      country: orderDetails.selectedCountry,
      statuscode: [{ 'status': 'pending' }],
      user_id: userId,
      voucher_id: orderDetails.voucherId,
    }

    console.log("req body", requestBody);

    try {
      const response = await client.post('order', requestBody, {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });

      console.log(response.data);

      if (response.status === 201) {
        console.log('Order placed successfully:', response.data);
        setShowPopup(true);
        clearCart();
        localStorage.removeItem("cartstorage")
        setTimeout(() => {
          navigate('/home');
        }, 3000);

      } else {
        console.error('Error placing order:', error);
        toast.error('Failed to place order. .');

      }
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Network Error.');
    }
    setLoading(false);
  };



  const closePopup = () => {
    setShowPopup(false);
  };

  const currency = <img src={rupee} style={{ width: '10px', opacity: '40%', marginRight: '5px' }} alt="Rupee" />;
  const currencyDarker = <img src={rupee} style={{ width: '10px', marginRight: '5px' }} alt="Rupee" />;

  return (
    <div className="w-full h-full montserrat flex flex-col justify-center items-center bg-[#FDFDFD]">
      <div className="max-w-sm p-4 flex flex-col items-center justify-center gap-6">
        <div className={shippingStyle["shipping-screen-body"]}>
          <div className={shippingStyle["shipping-container"]}>
            <div className={shippingStyle["checkout-navbar"]}>
              <img
                src={back}
                className={shippingStyle["left-arrow"]}
                alt="Back"
                onClick={handleBackArrow}
              />
              <p className={shippingStyle["checkout-title"]}>Checkout</p>
            </div>
            <hr className={shippingStyle["divider"]} />
            <div className={shippingStyle[""]}>
              <div className={shippingStyle["final-payment-details"]}>
                <p>Order</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {currency}
                  <p>{orderDetails.totalPrice}</p>
                </div>
              </div>
              <div className={shippingStyle["final-payment-details"]}>
                <p>Shipping</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {currency}
                  <p>0</p>
                </div>
              </div>
              <div className={shippingStyle["final-total-details"]}>
                <p>Total</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {currencyDarker}
                  <p>{orderDetails.totalPrice}</p>
                </div>
              </div>
              <hr className={shippingStyle["divider-2"]} />
              <p className={shippingStyle["final-address-details"]}>
                Address Details
              </p>
              <div className={shippingStyle["final-address-info"]}>
                <p className={shippingStyle["final-address-titles"]}>Address</p>
                <input
                  className={shippingStyle["final-address-input"]}
                  placeholder={orderDetails.address}
                  value={orderDetails.address}
                  readOnly
                />
                <p className={shippingStyle["final-address-titles"]}>City</p>
                <input
                  className={shippingStyle["final-city-input"]}
                  placeholder={orderDetails.selectedCity}
                  value={orderDetails.selectedCity}
                  readOnly
                />
                <p className={shippingStyle["final-address-titles"]}>Country</p>
                <input
                  className={shippingStyle["final-country-input"]}
                  placeholder={orderDetails.selectedCountry}
                  value={orderDetails.selectedCountry}
                  readOnly
                />
              </div>
              <div className='flex w-full h-full justify-center items-center px-5 pt-8'>
                <ButtonComp title="Continue" width="100%" onClick={handleContinue} loading={loading} />
              </div>
              <Footer path={"cart"}></Footer>
            </div>
          </div>
          <Popup
            message="Payment done successfully."
            open={showPopup}
            onClose={closePopup}
          />
        </div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

export default Shipping;
