import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../../assets/eye.svg';
<<<<<<< HEAD
import signupStyle from './signupstyle.module.css';
import { useState } from 'react';
=======
import eyeoff from '../../assets/eyeoff.svg';
import signupStyle from './signupstyle.module.css';
>>>>>>> refs/remotes/origin/master
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
<<<<<<< HEAD
      setError(error.message);
=======
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
>>>>>>> refs/remotes/origin/master
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
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
        <h1 className={signupStyle['signup-welcome-title']}>Create an account</h1>
<<<<<<< HEAD

        <div className={signupStyle['signup-data-input']}>
          <div>
            <input
              placeholder='Username'
=======
        <div className={signupStyle['signup-data-input']}>
          <div>
            <input
              placeholder="Username"
>>>>>>> refs/remotes/origin/master
              className={signupStyle['signup-user-input']}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
<<<<<<< HEAD
              placeholder='Email'
=======
              placeholder="Email"
>>>>>>> refs/remotes/origin/master
              className={signupStyle['signup-user-input']}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={signupStyle['signup-password-input-container']}>
            <input
<<<<<<< HEAD
              type="password"
              placeholder='Password'
=======
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
>>>>>>> refs/remotes/origin/master
              className={signupStyle['signup-password-input']}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
<<<<<<< HEAD
            {eyeicon}
          </div>
          <div className={signupStyle['signup-password-input-container']}>
            <input
              type="password"
              placeholder='Confirm password'
=======
            <img
              src={passwordVisible ? eyeoff : eye}
              className={passwordVisible ? signupStyle.eyeoff  : signupStyle.eyeicon  }
              alt="eye icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className={signupStyle['signup-password-input-container']}>
            <input
              type={confirmPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm password"
>>>>>>> refs/remotes/origin/master
              className={signupStyle['signup-password-input']}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
<<<<<<< HEAD
            {eyeicon}
=======
            <img
              src={confirmPasswordVisible ? eyeoff : eye}
              className={confirmPasswordVisible ? signupStyle.eyeoff  : signupStyle.eyeicon  }
              alt="eye icon"
              onClick={toggleConfirmPasswordVisibility}
            />
>>>>>>> refs/remotes/origin/master
          </div>
        </div>
        <div className={signupStyle['signup-more-options']}>
          <p className={signupStyle['signup-info']}>
<<<<<<< HEAD
            By clicking the <a style={{ color: '#F83758' }}>Register</a> button, you agree<br /> to the public offer
          </p>
          <p className={signupStyle['signup-create-acc']}>
            I Already Have an Account <a href='##' className={signupStyle['signin-link']} onClick={() => navigate('/signin')}>Login</a>
          </p>
        </div>
        <button className={signupStyle['signup-login-btn']} onClick={handleSignUpClick}>Create Account</button>
=======
            By clicking the <a style={{ color: '#F83758' }}>Register</a> button, you agree
            <br /> to the public offer
          </p>
          <p className={signupStyle['signup-create-acc']}>
            I Already Have an Account{' '}
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
          className={`${signupStyle['signup-login-btn']} ${loading ? signupStyle['loading'] : ''}`}
          onClick={handleSignUpClick}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Create Account'}
        </button>
        {error && <p className={signupStyle['error']}>{error}</p>}
>>>>>>> refs/remotes/origin/master
      </div>
    </div>
  );
};

export default Signupscreen;
