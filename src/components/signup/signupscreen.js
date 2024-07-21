import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.svg';
import eyeoff from '../../assets/eyeoff.svg';
import signupStyle from './signupstyle.module.css';
import client from '../../api/axios';

const Signupscreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [active, setActive] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      setTimeout(() => setError(null), 3000);
      return;
    }

    const requestBody = {
      username,
      email,
      password,
      active,
    };

    try {
      const response = await client.post('register', requestBody);
      console.log(response.data);
      navigate('/signin');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setError('Creating account failed,check your input');
        } else {
          setError('Request error');
        }
      } else {
        setError('Network Error');
      }
      setLoading(false);
      setTimeout(() => setError(null), 3000);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="max-w-sm p-4 flex flex-col gap-6">
        <h1 className={signupStyle['signup-welcome-title']}>Create an<span className='block'>account</span></h1>
        <div className={signupStyle['signup-data-input']}>
          <div className='mb-8'>
            <input
              placeholder="Username or Email"
              className={signupStyle['signup-user-input']}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={signupStyle['signup-password-input-container']}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className={signupStyle['signup-password-input']}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={passwordVisible ? eyeoff : eye}
              className={passwordVisible ? signupStyle.eyeoff : signupStyle.eyeicon}
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
              className={confirmPasswordVisible ? signupStyle.eyeoff : signupStyle.eyeicon}
              alt="eye icon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
        </div>
        <div className="w-full mt-[-30px] px-1">
          <p className='w-[80%] text-sm font-normal text-[#676767]'>
            By clicking the <span className='text-[#F83758]'>Register</span> button, you agree to the public offer
          </p>
          <p className={signupStyle['signup-create-acc']}>
            I Already Have an Account <a></a>
            <a
              href="##"
              className={signupStyle['signin-link']}
              onClick={() => navigate('/signin')}
            >
              Login
            </a>
          </p>
        </div>
        <button
          className={`${signupStyle['signup-login-btn']} h-[55px] text-center mb-2.5 ${loading ? signupStyle['loading'] : ''}`}
          onClick={handleSignUpClick}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Create Account'}
        </button>
        {error && <p className={signupStyle['error']}>{error}</p>}
      </div>
    </div>
  );
};

export default Signupscreen;
