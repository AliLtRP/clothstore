import React from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.svg';
import './signupstyle.css'; 

const Signupscreen = () => {
  const navigate = useNavigate();

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate('/signin'); 
  };

  const eyeicon = <img src={eye} className='signup-eye-icon' alt="eye icon" />;

  return (
    <div>
      <h1 className='signup-welcome-title'>Create an account</h1>
      <div className='signup-data-input'>
        <div>
          <input
            placeholder='Username or email'
            className='signup-user-input'
          />
        </div>
        <div className='signup-password-input-container'>
          <input
            type="password"
            placeholder='Password'
            className='signup-password-input'
          />
          {eyeicon}
        </div>
        <div className='signup-password-input-container'>
          <input
            type="password"
            placeholder='Confirm password'
            className='signup-password-input'
          />
          {eyeicon}
        </div>
      </div>
      <div className='signup-more-options'>
        <p className='signup-info'>By clicking the <a style={{color: '#F83758'}}>Register</a> button, you agree<br/> to the public offer</p>
        <p className='signup-create-acc'>I Already Have an Account <a href='##'className='signin-link' onClick={handleSignUpClick}>Login</a></p>
      </div>
      <button className='signup-login-btn' onClick={handleSignUpClick}>Create Account</button>
    </div>
  );
};

export default Signupscreen;
