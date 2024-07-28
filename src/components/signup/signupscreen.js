import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.svg';
import eyeoff from '../../assets/eyeoff.svg';
import signupStyle from './signupstyle.module.css';
import ButtonComp from '../btnComp';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import client from '../../api/axios';


const Signupscreen = () => {
  const [register, setRegister] = useState({
    phone: "",
    email: "",
    active: "",
    username: "",
    password: "",
    active: true,
  });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = async (event) => {
    event.preventDefault();

    if (register.password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await client.post('register', register);
      console.log(response.data);
      navigate('/signin');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error('Creating account failed, check your input');
        } else {
          toast.error('Request error');
        }
      } else {
        toast.error('Network Error');
      }
    }
  };

  const handlePhone = (phone) => {
    setRegister((prev) => ({
      ...prev,
      phone
    }));
  }

  const handleEmail = (email) => {
    setRegister((prev) => ({
      ...prev,
      email
    }));
  }

  const handleEmailOrUserName = (data) => {
    if (data.includes('@')) {
      return handleEmail(data);
    }
    return handleUserName(data);
  }

  const handleUserName = (username) => {
    setRegister((prev) => ({
      ...prev,
      username
    }));
  }

  const handlePassword = (password) => {
    setRegister((prev) => ({
      ...prev,
      password
    }));
  }


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSigninClick = (event) => {
    event.preventDefault();
    navigate("/signin");
  };

  return (
    <div className="w-full h-full min-h-[100dvh] montserrat flex flex-col items-center bg-[#FDFDFD] relative">
      <div className="max-w-sm p-6 flex flex-col gap-6 w-full">
        <h1 className={signupStyle['signup-welcome-title']}>
          Create an account
        </h1>
        <div className={signupStyle['signup-data-input']}>
          <div className=''>
            <input
              placeholder="Username"
              className={signupStyle['signup-user-input']}
              value={register.username}
              onChange={(e) => handleUserName(e.target.value)}
            />
          </div>
          <div className=''>
            <input
              placeholder="Email"
              className={signupStyle['signup-user-input']}
              value={register.email}
              onChange={(e) => handleEmail(e.target.value)}
            />
          </div>
          <div className={signupStyle['signup-password-input-container']}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className={signupStyle['signup-password-input']}
              value={register.password}
              onChange={(e) => handlePassword(e.target.value)}
            />
            <img
              src={passwordVisible ? eyeoff : eye}
              className={passwordVisible ? signupStyle['eyeoff'] : signupStyle['eyeicon']}
              alt="eye icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className={signupStyle['signup-confirm-password-input-container']}>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm password"
              className={signupStyle['signup-password-input']}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <img
              src={confirmPasswordVisible ? eyeoff : eye}
              className={confirmPasswordVisible ? signupStyle['eyeoff'] : signupStyle['eyeicon']}
              alt="eye icon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center p-4">
          <div className="mb-10">
            <p className={signupStyle.createacc}>
              I already have an account{" "}
              <a
                onClick={handleSigninClick}
                className={"hover:cursor-pointer " + signupStyle["signin-link"]}
              >
                Login
              </a>
            </p>
          </div>
          <div className="w-full flex justify-center min-w-[24rem] max-w-sm px-4 mb-[-35px]">
            <ButtonComp
              title="Create Account"
              disabled={loading}
              loading={loading}
              width="100%"
              onClick={handleSignUpClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupscreen;
