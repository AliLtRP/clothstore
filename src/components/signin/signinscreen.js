import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import signinStyle from "./signinstyle.module.css";
import eye from "../../assets/eye.svg";
import eyeoff from "../../assets/eyeoff.svg";
import client from "../../api/axios";
import ButtonComp from "../btnComp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signinscreen = () => {
  const [username_or_email, setUsername_or_password] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();



  const handleLoginClick = async (event) => {
    event.preventDefault();
    setLoading(true);

    const requestBody = {
      username_or_email: username_or_email,
      password: password,
    };

    try {
      const response = await client.post("login", requestBody);
      const { success, token } = response.data;

      if (!success) {
        setError("User is not active or other error occurred");
        setLoading(false);
        toast.error(error)
        return;
      }

      localStorage.setItem("token", token);
      navigate("/getstarted");
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          toast.error("User or Password is not correct"); 
        } else {
          toast.error("Request error");
        }
      } else {
        toast.error("Network Error");
      }
      setLoading(false);
    }
  };

  const handleSignUpClick = (event) => {
    event.preventDefault();
    navigate("/signup");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const checkAuth = async () => {
    await client.get('check')
      .then((res) => {
        console.log(res.data);
        navigate("/getstarted");
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div className="w-full h-auto min-h-screen montserrat flex flex-col items-center bg-[#FDFDFD] relative">
      <div className="max-w-sm p-4 flex flex-col gap-6">
        <h1 className={signinStyle.welcomtitle}>
          Welcome
          <br />
          Back!
        </h1>
        <div className={`${signinStyle.datainput}`}>
          <input
            placeholder="Username or email"
            className={signinStyle.userinput}
            value={username_or_email}
            onChange={(e) => setUsername_or_password(e.target.value)}
          />
          <div className={signinStyle.passwordinputcontainer}>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className={signinStyle.passwordinput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              src={passwordVisible ? eyeoff : eye}
              className={passwordVisible ? signinStyle.eyeoff : signinStyle.eyeicon}
              alt="eye icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <p className={signinStyle.forgetpass}>Forgot password?</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
  <div className="mb-10">
    <p className={signinStyle.createacc}>
      Create an account{" "}
      <a onClick={handleSignUpClick} className={"hover:cursor-pointer " + signinStyle.signuplink}>
        Sign Up
      </a>
    </p>
  </div>
  <div className="w-full max-w-sm px-4">
    <ButtonComp
      title="Login"
      disabled={false}
      loading={loading}
      width="100%"
      onClick={handleLoginClick}
    />
  </div>
</div>

    </div>
  );
};

export default Signinscreen;
