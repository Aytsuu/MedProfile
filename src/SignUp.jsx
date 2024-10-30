import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

const AccManagement = () => {

  // Input fields style
  const fieldStyle = "mb-7 font-outfit relative";
  const fieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
  const fieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const toggleReEnterPasswordVisibility = () => {
    setShowReEnterPassword((showReEnterPassword) => !showReEnterPassword);
  };

  const signup = (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
      <h2 className="text-[35px] font-outfit mb-7 text-loginTextBlue">REGISTER ACCOUNT</h2>
      <form className="w-[clamp(250px,50%,400px)] text-center">

        <div className={fieldStyle}>
          <FaEnvelope className={fieldIcon} />
          <input
            type="email"
            placeholder="Email"
            required
            className= {fieldContentStyle}
          />
        </div>

        <div className={fieldStyle}>
          <FaUser className={fieldIcon} />
          <input
            type="text"
            placeholder="Username"
            required
            className={fieldContentStyle}
          />
        </div>

        <div className={fieldStyle}>
          <FaLock className={fieldIcon} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className={fieldContentStyle}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
          >
            {showPassword ? < FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <div className={fieldStyle}>
          <FaLock className={fieldIcon} />
          <input
            type={showReEnterPassword ? "text" : "password"}
            placeholder="Re-enter Password"
            required
            className={fieldContentStyle}
          />
          <button
            type="button"
            onClick={toggleReEnterPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
          >
            {showReEnterPassword ? < FaEye /> : <FaEyeSlash />}
          </button>
        </div>

        <div className="mb-20 font-outfit text-white">
          <button
            type="submit"
            className="text-[23px] w-full p-[clamp(0.5rem,1vw,1rem)] bg-loginBlue border-hoverloginBlue rounded hover:bg-hoverloginBlue"
          >
            Sign Up
          </button>
        </div>

        <div className="font-outfit text-loginTextBlue">
          Already have an account? <a className="underline text-loginTextBlue hover:hoverloginBlue">Use it</a>
        </div>

      </form>
    </div>
  );

  const signin = (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
          <h2 className="text-[35px] font-outfit mb-6 text-hoverloginBlue">SIGN IN</h2>
          <form className="w-[clamp(250px,50%,400px)] text-center">
  
            <div className="mb-4 font-outfit relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue" />
              <input
                type="text"
                placeholder="Username/Email Address"
                required
                className="w-full p-[clamp(0.5rem,1vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none"
              />
            </div>
  
            <div className="mb-2 font-outfit relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="w-full p-[clamp(0.5rem,1vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
  
            <div className="mb-7 text-right text-[12px] font-outfit text-loginBlue">
                <a className="underline text-black-500  hover:text-blue-700">Forgot Password?</a>
            </div>
          
            <div className="font-outfit">
              <button
                  type="submit"
                  className="mb-20 w-full p-[clamp(0.5rem,1vw,1rem)] bg-loginBlue text-white rounded hover:bg-hoverloginBlue">   
                  Log In
              </button>
            </div>
  
            <div className="font-outfit text-loginBlue">
              Don't have an account? <a className="underline text-black-500 hover:text-blue-700">Create one</a>
            </div>
  
          </form>
        </div>
      );

  return signup;
};

export default AccManagement;
