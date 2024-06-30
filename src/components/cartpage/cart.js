import React, { useState } from 'react';
import blackcart from '../../assets/blackshippingcart.svg';
import cartStyle from '../../components/cartpage/cartstyle.module.css';
import orderimg from '../../assets/orderimg.png';
import Select from 'react-select';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Cartpage = () => {
  const [quantities, setQuantities] = useState([1, 1]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const cityCountryMap = {
    'New York': 'USA',
    'London': 'UK',
    'Tokyo': 'Japan'
  };

  const cityOptions = Object.keys(cityCountryMap).map(city => ({
    value: city,
    label: city
  }));

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
      minHeight: '25px',  
      height: '25px',   
     
    }),
    container: (provided) => ({
      ...provided,
      width: '90%',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0 8px',
      height: '25px',    
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '25px',
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

  
  return (
    <div className={cartStyle['checkout-screen-body']}>
      <div className={cartStyle['cart-navbar']}>
        <p className={cartStyle['cart-title']}>Cart</p>
      </div>
      <hr className={cartStyle['divider']} />
      <div className={cartStyle['cart-items']}>
        <img src={blackcart} className={cartStyle['blackcart-icon']} alt="blackcart" />
        <p className={cartStyle['cart-text']}>Cart Items</p>
      </div>

      {[0, 1].map((index) => (
        <div key={index} className={cartStyle['odred-container']}>
          <img src={orderimg} className={cartStyle['order-img']} alt="Order" />
          <div className={cartStyle['order-info']}>
            <p className={cartStyle['order-title']}>Women’s Casual Wear</p>
            <p className={cartStyle['order-info']}>Checked Single-Breasted<br />Blazer</p>
            <div className={cartStyle['size-qty-container']}>
              <p>Size <b>42</b></p>
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
        <p style={{ fontWeight: 'bold' }}>7,000.00</p>
      </div>
      <hr className={cartStyle['divider-2']} />
      <p className={cartStyle['final-address-details']}>Address Details</p>
      <div className={cartStyle['final-address-info']}>
        <p className={cartStyle['final-address-titles']}>Address</p>
        <input className={cartStyle['final-address-input']} placeholder='Write your address here' />
        {/* <p className={cartStyle['final-address-titles']}>City</p>
        <input className={cartStyle['final-city-input']} placeholder='Choose your city here' />
        <p className={cartStyle['final-address-titles']}>Country</p>
        <input className={cartStyle['final-country-input']} placeholder='Choose your country here' /> */}
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
      <button className={cartStyle['continue-checkout']}>Checkout</button>
    </div>
  );
}

export default Cartpage;
