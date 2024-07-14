import React, { useEffect } from 'react';
import blackcart from '../../assets/blackshippingcart.svg';
import cartStyle from './cartstyle.module.css';
import Select from 'react-select';
import Footer from '../home page/Footer';
import useCartStore from '../../provider/zustand';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
  const {
    cart,
    quantities,
    selectedCity,
    selectedCountry,
    address,
    setAddress,
    setCityAndCountry,
    incrementQuantity,
    decrementQuantity,
    calculateTotalPrice,
    setOrderDetails,
  } = useCartStore();

  const navigate = useNavigate();

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (selectedOption) => {
    if (selectedOption) {
      const city = selectedOption.value;
      setCityAndCountry(city, cityCountryMap[city] || '');
    } else {
      setCityAndCountry(null, '');
    }
  };

  const handleIncrement = (index) => {
    incrementQuantity(index);
  };

  const handleDecrement = (index) => {
    decrementQuantity(index);
  };

  const cityCountryMap = {
    'New York': 'USA',
    'London': 'UK',
    'Tokyo': 'Japan',
  };

  const cityOptions = Object.keys(cityCountryMap).map((city) => ({
    value: city,
    label: city,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      minHeight: '20px',
      height: '20px',
    }),
    container: (provided) => ({
      ...provided,
      width: '90%',
      margin: '0 auto',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 8px',
      height: '25px',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '20px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#000',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#F83758' : state.isFocused ? '#E0E0E0' : '#FFF',
      color: state.isSelected ? '#FFF' : '#000',
      padding: '8px 12px',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#000',
    }),
  };

  const handleCheckOutClick = () => {
    const checkoutData = {
      cart,
      quantities,
      totalPrice: calculateTotalPrice(),
      address,
      selectedCity,
      selectedCountry,
    };
    setOrderDetails(checkoutData);
    navigate('/placeorder');
  };


  return (
    <div className="max-w-md h-auto mb-10 montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
        <div className={cartStyle['checkout-screen-body']}>
          <div className={cartStyle['cart-navbar']}>
            <p className={cartStyle['cart-title']}>Cart</p>
          </div>
          <hr className={cartStyle['divider']} />
          <div className={cartStyle['cart-items']}>
            <img src={blackcart} className={cartStyle['blackcart-icon']} alt="blackcart" />
            <p className={cartStyle['cart-text']}>Cart Items</p>
          </div>

          {cart.map((item, index) =>  (
            <div key={item.id} className={cartStyle['order-container']}>
              <img src={item.img[0].src} className={cartStyle['order-img']} alt="Order" />
              <div className={cartStyle['order-info']}>
                <p className={cartStyle['order-title']}>{item.name}</p>
                <p className={cartStyle['order-desc']}>{item.description}</p>
                <div className={cartStyle['size-qty-container']}>
                  <p>
                    Size <b>{item.size}</b>
                  </p>
                  <p>
                    <button className={cartStyle['qty-btn']} onClick={() => handleDecrement(index)}>-</button>
                    <b>{quantities[index]}</b>
                    <button className={cartStyle['qty-btn']} onClick={() => handleIncrement(index)}>+</button>
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className={cartStyle['payment-details']}>
            <p>Order Total</p>
            <p style={{ fontWeight: 'bold' }}>{calculateTotalPrice()}</p>
          </div>
          <hr className={cartStyle['divider-2']} />
          <p className={cartStyle['final-address-details']}>Address Details</p>
          <div className={cartStyle['final-address-info']}>
            <p className={cartStyle['final-address-titles']}>Address</p>
            <input
              className={cartStyle['final-address-input']}
              placeholder="Write your address here"
              value={address}
              onChange={handleAddressChange}
            />
            <p className={cartStyle['final-address-titles']}>City</p>
            <Select
              className={cartStyle['final-city-input']}
              value={selectedCity}
              onChange={handleCityChange}
              options={cityOptions}
              placeholder="Choose your city here"
              styles={customStyles}
            />
            <p className={cartStyle['final-address-titles']}>Country</p>
            <input
              className={cartStyle['final-country-input']}
              value={selectedCountry}
              placeholder="Choose your country here"
              readOnly
            />
          </div>
          <button className={cartStyle['continue-checkout']} onClick={handleCheckOutClick}>
            Checkout
          </button>
        </div>
      </div>
      <Footer path="cart" />
    </div>
  );
};

export default Cartpage;
