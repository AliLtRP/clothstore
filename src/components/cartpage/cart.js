import React, { useState } from "react";
import blackcart from "../../assets/blackshippingcart.svg";
import cartStyle from "./cartstyle.module.css";
import Select from "react-select";
import useCartStore from "../../provider/zustand";
import { useNavigate } from "react-router-dom";
import Header from "../headerComp";
import { BsCartX } from "react-icons/bs";
import ButtonComp from "../btnComp";
import { toast } from 'react-toastify';
import Plus from '../shop page/icons/Plus';
import Minus from '../shop page/icons/Minus';

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
    addToCart,
    removeFromCart
  } = useCartStore();

  const navigate = useNavigate();
  const [addressError, setAddressError] = useState(false);
  const [cartError, setCartError] = useState(false);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    setAddressError(false);
  };

  const handleCityChange = (selectedOption) => {
    if (selectedOption) {
      const city = selectedOption.value;
      setCityAndCountry(city, cityCountryMap[city] || "");
    } else {
      setCityAndCountry(null, "");
    }
    setAddressError(false);
  };

  const handleIncrement = (index) => {
    incrementQuantity(index);
  };

  const handleDecrement = (index) => {
    if (cart[index].quantity > 1) {
      decrementQuantity(index);
    }
  };

  const cityCountryMap = {
    "New York": "USA",
    London: "UK",
    Tokyo: "Japan",
  };

  const cityOptions = Object.keys(cityCountryMap).map((city) => ({
    value: city,
    label: city,
  }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "none",
      boxShadow: "none",
      minHeight: "20px",
      height: "25px",
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
      height: "48px",
      margin: "0 auto",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "0 0px",
      height: "30px",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      marginTop: "-10px"

    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "20px",
      position: "absolute",
      left: "90%",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#808080"
        : state.isFocused
          ? ""
          : "#FFF",
      color: state.isSelected ? "black" : "#000",
      padding: "8px 12px",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#808080" : "black",
      lineHeight: "0px",

    }),
  };

  const handleCheckOutClick = () => {
    if (!address || !selectedCity || !selectedCountry) {
      setAddressError(true);
      toast.error("Please fill in all address details.");
      setTimeout(() => {
        setAddressError(false);
      }, 3000);
      return;
    }

    const checkoutData = {
      cart,
      quantities,
      totalPrice: calculateTotalPrice(),
      address,
      selectedCity,
      selectedCountry,
    };
    setOrderDetails(checkoutData);
    navigate("/placeorder");
  };

  console.log(cart);

  return (
    <div className="w-full h-auto mb-10 montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="w-full max-w-sm flex flex-col gap-6">
        <div className=" flex flex-col gap-2">
          <Header title={"Cart"} />
          <div className={cartStyle["cart-items"]}>
            <img
              src={blackcart}
              className={cartStyle["blackcart-icon"]}
              alt="blackcart"
            />
            <p className={cartStyle["cart-text"]}>Cart Items</p>
          </div>

          {cart.length === 0 ? (
            <p className={cartStyle["emptycart"]}>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={item.id} className={cartStyle["order-container"]}>
                <img
                  src={item.img[0].src}
                  className="w-32 rounded-xl mr-0.5 object-cover h-full p-2"
                  alt="Order"
                />
                <div className={cartStyle["order-info"]}>
                  <p className={cartStyle["order-title"]}>{item.name}</p>
                  <p className="ml-1 mt-1">{item.description}</p>
                  <div className={cartStyle["size-qty-container"]}>
                    <div className="w-full flex items-center justify-between">
                      <div className="w-[40%] flex justify-around items-center bg-[#EAEAEA] rounded-[5px] h-8 mt-2">
                        <button
                          className="text-2xl"
                          onClick={() => handleDecrement(index)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus/>
                        </button>
                        <p className=" text-sm w-6 flex justify-center items-center h-[25px] bg-white rounded-sm font-medium">
                          {item.quantity}
                        </p>
                        <button
                          className="text-2xl"
                          onClick={() => handleIncrement(index)}
                        >
                          <Plus/>
                        </button>
                      </div>

                      <BsCartX size={20} className="mt-3 hover:cursor-pointer" onClick={() => removeFromCart(item.id)} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}

          <div className={cartStyle["payment-details"]}>
            <p className="ml-[-5px]">Order Total</p>
            <p style={{ fontWeight: "bold" }}>{calculateTotalPrice()}</p>
          </div>
          <hr className={cartStyle["divider"]} />
          <p className={cartStyle["final-address-details"]}>Address Details</p>
          <div className={cartStyle["final-address-info"] + " my-4"}>
            <p className={cartStyle["final-address-titles"] + " my-2"}>
              Address
            </p>
            <input
              className={cartStyle["final-address-input"] + " mb-4"}
              placeholder="Write your address here"
              value={address}
              onChange={handleAddressChange}
            />
            <p className={cartStyle["final-address-titles"] + " my-2"}>City</p>
            <Select
              className={cartStyle["final-city-input"] + " mb-[100px]"}
              value={
                cityOptions.find((option) => option.value === selectedCity) ||
                null
              }
              onChange={handleCityChange}
              options={cityOptions}
              placeholder="Choose your city here"
              styles={{
                ...customStyles,
                singleValue: (provided) => ({
                  ...provided,
                  color: selectedCity ? "#000" : provided.color,
                }),
                placeholder: (provided) => ({
                  ...provided,
                  color: selectedCity ? "transparent" : '#9BA3AF',
                }),
              }}
            />

            <div className="w-full my-4 flex flex-col justify-center items-center">
              <p className={cartStyle["final-address-titles"] + " my-2"}>
                Country
              </p>
              <input
                className={cartStyle["final-country-input"]}
                value={selectedCountry}
                placeholder="Choose your country here"
                readOnly
              />
            </div>
          </div>

          <div className="w-full px-4 h-24 flex flex-col justify-center">
          <ButtonComp title="Checkout" disabled={cart.length === 0 || addressError == true} onClick={handleCheckOutClick} />
        </div>
        </div>
      </div>

    </div>
  );
};

export default Cartpage;
