import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const SignIn = () =>{

    //Sign In input fields style
    const SIfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
    const SIfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

    // state for handling password visibility and input values
    const [showPassword, setShowPassword] = useState(false); // sets the default value to false
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const togglePasswordVisibility = () => { // function helps to hide/show the password
        setShowPassword((showPassword) => !showPassword);
      };

    const typedUsername = (e) =>{ // Event handler for the username input
        setUsername(e.target.value)
    }

    const typedPassword = (e) =>{ // Event handler for the password input
        setPassword(e.target.value)
    }

    const signin = (
        <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
              <h2 className="text-[35px] font-outfit mb-6 text-loginTextBlue">SIGN IN</h2>
              <form className="w-[clamp(250px,50%,400px)] text-center">
      
                <div className="mb-7 font-outfit relative"> {/*input field for Username/Email*/}
                  <FaEnvelope className={SIfieldIcon} /> {/*icon for the field*/}
                  <input
                    type="text"
                    placeholder="Username/Email Address"
                    required
                    className={SIfieldContentStyle}
                    onChange={typedUsername}
                    value={username}
                  />
                </div>
      
                <div className="mb-2 font-outfit relative"> {/*Input field for password*/}
                  <FaLock className={SIfieldIcon} /> {/*icon for the field*/}
                  <input
                    type={showPassword ? "text" : "password"} // checks if the showpassword is true, if yes it will show text else shows dot dot dot haha
                    placeholder="Password"
                    required
                    className={SIfieldContentStyle}
                    onChange={typedPassword}
                    value={password}
                  />
                  <button // button to show/hide password
                    type="button"
                    onClick={togglePasswordVisibility} // calls the function for hiding/showing password
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
                  >
                    {password !== '' ? (showPassword ? <FaEye /> : <FaEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
                  </button>
                </div>
      
                <div className="mb-7 text-right text-[16px] font-outfit text-loginBlue"> {/*button link to "forgot password tab"*/}
                    <a className="underline text-loginTextBlue  hover:text-blue-700 cursor-pointer">Forgot Password?</a>
                </div>
              
                <div className="font-outfit"> {/*button to login*/}
                  <button
                      type="submit"
                      className="mb-20 text-[23px] w-full p-[clamp(0.5rem,1vw,1rem)] bg-loginBlue text-white rounded hover:bg-hoverloginBlue">   
                      Log In
                  </button>
                </div>
      
                <div className="font-outfit text-loginTextBlue"> {/*link button to create account*/}
                  Don't have an account? <Link to="/signup" className="underline text-loginTextBlue hover:text-blue-700 cursor-pointer" >Create one</Link>
                </div>
      
              </form>
            </div>
    );

    return signin;
    
}

export default SignIn