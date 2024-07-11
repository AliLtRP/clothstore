import React from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.svg';
import signupStyle from './signupstyle.module.css'; 
import { useState } from 'react';
import axios from 'axios';

const Signupscreen = () => {

  const [email,setEmail]=useState('');
  const [username,setUsername] = useState('');
  const [active, setActive] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUpClick = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const requestBody = {
      username,
      email,
      password,
      active
    };

    try {

      const response = await axios.post('http://localhost:3000/register',requestBody);
      console.log(response.data);
      navigate('/signin'); 

    }catch (error) {
      setError(error.message);
    }
  };


  const eyeicon = <img src={eye} className={signupStyle['signup-eye-icon']} alt="eye icon" />;

  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
      <h1 className={signupStyle['signup-welcome-title']}>Create an account</h1>
      
      <div className={signupStyle['signup-data-input']}>
        <div>
          <input
            placeholder='Username'
            className={signupStyle['signup-user-input']}
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder='Email'
            className={signupStyle['signup-user-input']}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className={signupStyle['signup-password-input-container']}>
          <input
            type="password"
            placeholder='Password'
            className={signupStyle['signup-password-input']}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {eyeicon}
        </div>
        <div className={signupStyle['signup-password-input-container']}>
          <input
            type="password"
            placeholder='Confirm password'
            className={signupStyle['signup-password-input']}
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          {eyeicon}
        </div>
      </div>
      <div className={signupStyle['signup-more-options']}>
        <p className={signupStyle['signup-info']}>
          By clicking the <a style={{color: '#F83758'}}>Register</a> button, you agree<br/> to the public offer
        </p>
        <p className={signupStyle['signup-create-acc']}>
          I Already Have an Account <a href='##' className={signupStyle['signin-link']} onClick={() => navigate('/signin')}>Login</a>
        </p>
      </div>
      <button className={signupStyle['signup-login-btn']} onClick={handleSignUpClick}>Create Account</button>
    </div>
    </div>
   
  );
};

export default Signupscreen;
