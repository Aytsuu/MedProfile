import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const SignIn = () =>{

    //Sign In input fields style
    const SIfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
      };

    const typedUsername = (e) =>{
        setUsername(e.target.value)
    }

    const typedPassword = (e) =>{
        setPassword(e.target.value)
    }

    const signin = (
        <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
              <h2 className="text-[35px] font-outfit mb-6 text-loginTextBlue">SIGN IN</h2>
              <form className="w-[clamp(250px,50%,400px)] text-center">
      
                <div className="mb-7 font-outfit relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue" />
                  <input
                    type="text"
                    placeholder="Username/Email Address"
                    required
                    className={SIfieldContentStyle}
                    onChange={typedUsername}
                    value={username}
                  />
                </div>
      
                <div className="mb-2 font-outfit relative">
                  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    required
                    className={SIfieldContentStyle}
                    onChange={typedPassword}
                    value={password}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
                  >
                    {password !== '' ? (showPassword ? <FaEye /> : <FaEyeSlash />) : ''}
                  </button>
                </div>
      
                <div className="mb-7 text-right text-[16px] font-outfit text-loginBlue">
                    <a className="underline text-loginTextBlue  hover:text-blue-700 cursor-pointer">Forgot Password?</a>
                </div>
              
                <div className="font-outfit">
                  <button
                      type="submit"
                      className="mb-20 text-[23px] w-full p-[clamp(0.5rem,1vw,1rem)] bg-loginBlue text-white rounded hover:bg-hoverloginBlue">   
                      Log In
                  </button>
                </div>
      
                <div className="font-outfit text-loginTextBlue">
                  Don't have an account? <Link to="/signup" className="underline text-loginTextBlue hover:text-blue-700 cursor-pointer" >Create one</Link>
                </div>
      
              </form>
            </div>
    );

    return signin;
    
}

export default SignIn