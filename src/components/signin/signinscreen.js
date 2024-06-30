import { useNavigate } from 'react-router-dom';
import React from 'react';
import signinStyle from './signinstyle.module.css'; 
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
          />
        </div>
        <div className={signinStyle.passwordinputcontainer}>
          <input
            type="password"
            placeholder='Password'
            className={signinStyle.passwordinput}
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
