import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import signinStyle from './signinstyle.module.css'; 
import eye from '../../assets/eye.svg'
import axios from 'axios';

const Signinscreen = () => {
  const [username_or_email , setUsername_or_password] = useState('');
  const [password , setPassword] = useState('');
  const [active , setActive] = useState('');
  const [error , setError] = useState(null);


  const navigate = useNavigate();

  const handleLoginClick = async (event) => {
    event.preventDefault();

    const requestBody = {
      username_or_email: username_or_email,
      password: password
    };

    try{
      const response = await axios.post('http://localhost:3000/login',requestBody);
      const { success, token } = response.data;

      if (!success) {
        setError('User is not active or other error occurred');
        return;
      }

      localStorage.setItem('token', token);
      navigate('/getstarted'); 

    }catch(error){
      setError(error.response ? error.response.data : error.message);

    }

  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate('/signup'); 
  };
  const eyeicon = <img src={eye} className={signinStyle.eyeicon} alt="eye icon" />
  
  return (
    <div className="w-full h-auto montserrat flex flex-col items-center mx-auto bg-[#FDFDFD]">
      <div className="min-w-[384px] max-w-[480px] p-4 flex flex-col gap-6">
      <h1 className={signinStyle.welcomtitle}>Welcome<br />Back!</h1>
      <div className={signinStyle.datainput}>
        <div>
          <input
            placeholder='Username or email'
            className={signinStyle.userinput}
            value={username_or_email}
            onChange={(e)=>setUsername_or_password(e.target.value)}
          />
        </div>
        <div className={signinStyle.passwordinputcontainer}>
          <input
            type="password"
            placeholder='Password'
            className={signinStyle.passwordinput}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {eyeicon}
        </div>
        <p className={signinStyle.forgetpass}>Forgot password?</p>
      </div>
      <div>
        <p className={signinStyle.createacc}>Create an account <a onClick={handleSignUpClick} className={signinStyle.signuplink}>Sign Up</a></p>
      </div>
      <button className={signinStyle.Loginbtn}onClick={handleLoginClick}>Login</button>
    </div>
    </div>
   
  );
};

export default Signinscreen;
