import { useNavigate } from 'react-router-dom';
import React from 'react';
import './signinstyle.css'; 
import eye from '../../assets/eye.svg'

const Signinscreen = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/getstarted'); 
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate('/signup'); 
  };
  const eyeicon = <img src={eye} className='eye-icon' alt="eye icon" />
  
  return (
    <div>
      <h1 className='welcomtitle'>Welcome<br />Back!</h1>
      <div className='data-input'>
        <div>
          <input
            placeholder='Username or email'
            className='userinput'
          />
        </div>
        <div className='passwordinput-container'>
          <input
            type="password"
            placeholder='Password'
            className='passwordinput'
          />
          {eyeicon}
        </div>
        <p className='forgetpass'>Forgot password?</p>
      </div>
      <div className='more-options'>
        <p className='create-acc'>Create an account <a onClick={handleSignUpClick} className='signup-link'>Sign Up</a></p>
      </div>
      <button className='Login-btn'onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Signinscreen;
