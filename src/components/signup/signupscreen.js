import React from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.svg';
import signupStyle from './signupstyle.module.css'; 

const Signupscreen = () => {
  const navigate = useNavigate();

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate('/signin'); 
  };

  const eyeicon = <img src={eye} className={signupStyle['signup-eye-icon']} alt="eye icon" />;

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
      <h1 className={signupStyle['signup-welcome-title']}>Create an account</h1>
      <div className={signupStyle['signup-data-input']}>
        <div>
          <input
            placeholder='Username or email'
            className={signupStyle['signup-user-input']}
          />
        </div>
        <div className={signupStyle['signup-password-input-container']}>
          <input
            type="password"
            placeholder='Password'
            className={signupStyle['signup-password-input']}
          />
          {eyeicon}
        </div>
        <div className={signupStyle['signup-password-input-container']}>
          <input
            type="password"
            placeholder='Confirm password'
            className={signupStyle['signup-password-input']}
          />
          {eyeicon}
        </div>
      </div>
      <div className={signupStyle['signup-more-options']}>
        <p className={signupStyle['signup-info']}>
          By clicking the <a style={{color: '#F83758'}}>Register</a> button, you agree<br/> to the public offer
        </p>
        <p className={signupStyle['signup-create-acc']}>
          I Already Have an Account <a href='##' className={signupStyle['signin-link']} onClick={handleSignUpClick}>Login</a>
        </p>
      </div>
      <button className={signupStyle['signup-login-btn']} onClick={handleSignUpClick}>Create Account</button>
    </div>
    </div>
   
  );
};

export default Signupscreen;
