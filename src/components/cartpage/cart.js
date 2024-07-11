import React, { useState, useEffect } from 'react';
import blackcart from '../../assets/blackshippingcart.svg';
import cartStyle from './cartstyle.module.css';
import orderimg from '../../assets/orderimg.png';
import Select from 'react-select';
import Footer from '../home page/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Cartpage = () => {
  const [quantities, setQuantities] = useState([1, 1]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [items, setItems] = ([]);
  const [address, setAdress] = ('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [statusCode, setStatusCode] = ('pending');
  const [city, setCity] = ('');
  const [country, setCounrty] = ('');
  const [error, setError] = useState(null);


  const navigate = useNavigate();
  const { state } = useLocation()

  console.log(state);

  const handleCheckOutClick = async (event) => {
    event.preventDefault();

    const requestBody = {
      items,
      address,
      total_price: totalPrice,
      statuscode: statusCode,
      city,
      country
    };

    try {

      const response = await axios.post('http://localhost:3000/order', requestBody);
      console.log(response.data);
      navigate('/placeorder');


    } catch (error) {
      setError(error.message);
    }

  };

  const cityCountryMap = {
    'New York': 'USA',
    'London': 'UK',
    'Tokyo': 'Japan'
  };

  const cityOptions = Object.keys(cityCountryMap).map(city => ({
    value: city,
    label: city
  }));

  const handleAddressChange = (event) => {
    setAdress(event.target.value);
  }

  const handleCityChange = (selectedOption) => {
    if (selectedOption) {
      const city = selectedOption.value;
      setSelectedCity(selectedOption);
      setSelectedCountry(cityCountryMap[city] || '');
    } else {
      setSelectedCity(null);
      setSelectedCountry('');
    }
  };

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
    })
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
    }
    setQuantities(newQuantities);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    items.forEach((item, index) => {
      total += item.price * quantities[index];
    });
    setTotalPrice(total);
  };

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
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

          {/* {items.map((item, index) => (
            <div key={index} className={cartStyle['order-container']}>
              <img src={item.img} className={cartStyle['order-img']} alt="Order" />
              <div className={cartStyle['order-info']}>
                <p className={cartStyle['order-title']}>{item.title}</p>
                <p className={cartStyle['order-desc']}>{item.description}</p>
                <div className={cartStyle['size-qty-container']}>
                  <p>Size <b>{item.option}</b></p>
                  <p>
                    <button className={cartStyle['qty-btn']} onClick={() => handleDecrement(index)}>-</button>
                    <b>{quantities[index]}</b>
                    <button className={cartStyle['qty-btn']} onClick={() => handleIncrement(index)}>+</button>
                  </p>
                </div>
              </div>
            </div>
          ))} */}

          <div className={cartStyle['payment-details']}>
            <p>Order Total</p>
            <p style={{ fontWeight: 'bold' }}>{totalPrice}</p>
          </div>
          <hr className={cartStyle['divider-2']} />
          <p className={cartStyle['final-address-details']}>Address Details</p>
          <div className={cartStyle['final-address-info']}>
            <p className={cartStyle['final-address-titles']}>Address</p>
            <input className={cartStyle['final-address-input']} placeholder='Write your address here' value={address} />
            <p className={cartStyle['final-address-titles']}>City</p>
            <Select
              className={cartStyle['final-city-input']}
              value={selectedCity}
              onChange={handleCityChange}
              options={cityOptions}
              placeholder='Choose your city here'
              styles={customStyles}
            />
            <p className={cartStyle['final-address-titles']}>Country</p>
            <input
              className={cartStyle['final-country-input']}
              value={selectedCountry}
              placeholder='Choose your country here'
              readOnly
            />
          </div>
          <button className={cartStyle['continue-checkout']} onClick={handleCheckOutClick}>Checkout</button>
        </div>

      </div>
      <Footer path="cart" />
    </div>
  );
}

export default Cartpage;
