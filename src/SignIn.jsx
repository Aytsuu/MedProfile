import React, { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { GoLock } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom'
import Background1 from './background/background-1';

const SignIn = () =>{
  
    //Sign In input fields style
    const SIfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
    const SIfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

    // state for handling password visibility and input values
    const [showPassword, setShowPassword] = useState(false); // sets the default value to false
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showFields, setShowFields] = useState(false);
    const isReturn = localStorage.getItem('Return') ? true : false; // Check if item Return exists and assign boolean value to isReturn

    const togglePasswordVisibility = () => setShowPassword((showPassword) => !showPassword); // function helps to hide/show the password
    const typedUsername = (e) => setUsername(e.target.value) // Event handler for the username input
    const typedPassword = (e) => setPassword(e.target.value)// Event handler for the password input
    const handleTransitionEnd = () => setShowFields(true); // To display the field after loading screen 

    const signin = 
            <div className={`absolute flex justify-center items-center h-screen w-full flex-col bg-none transition-opacity duration-500`}>
              <div className='w-[100%] h-[100%]'></div>
              <div className='flex justify-center w-[100%] h-[100%]'>
                <form className="w-[clamp(250px,50%,400px)] text-center">
                <h2 className="text-[30px] font-outfit mb-7 text-loginTextBlue">SIGN IN</h2>
                  <div className="mb-7 font-outfit relative"> {/*input field for Username/Email*/}
                    <MdOutlineMail className={SIfieldIcon} /> {/*icon for the field*/}
                    <input
                      type="text"
                      placeholder="Username/Email Address"
                      required
                      className={SIfieldContentStyle}
                      onChange={typedUsername}
                      value={username}
                    />
                  </div>
        
                  <div className="mb-2 font-outfit relative bg-none"> {/*Input field for password*/}
                    <GoLock className={SIfieldIcon} /> {/*icon for the field*/}
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
                      {password !== '' ? (showPassword ? <FaRegEye /> : <FaRegEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
                    </button>
                  </div>
        
                  <div className="mb-7 text-right text-[16px] font-outfit text-loginBlue"> {/*button link to "forgot password tab"*/}
                      <Link to="/forgotpass-1" className="underline text-loginTextBlue  hover:text-blue-700 cursor-pointer">Forgot Password?</Link>
                  </div>
                
                  <div className="mb-[7.5rem] font-outfit"> {/*button to login*/}
                    <Link to='/home'>
                      <button
                          type="submit"
                          className="text-[23px] w-full p-[clamp(0.5rem,0.6vw,1rem)] bg-loginBlue text-white rounded hover:bg-hoverloginBlue">   
                          Log In
                      </button>
                    </Link>
                  </div>
        
                  <div className="font-outfit text-loginTextBlue"> {/*link button to create account*/}
                    Don't have an account? <Link to='/signup' className="underline text-loginTextBlue hover:text-blue-700 cursor-pointer" >Create one</Link>
                  </div>
                </form>
              </div>
            </div> 
      
    const display = 
                <>
                  {/* Condition whether to show loading screen (false) or not (true) */}
                  {isReturn ? 
                  <><Background1 height={55} imageTop={10.5} state={2}/>
                  {signin}</> :
                  <><Background1 onTransitionEnd={handleTransitionEnd} height={55} imageTop={10.5} state={1}/>
                  {showFields && signin}</> 
                  }
                </>
    return (display);
    
}

export default SignIn