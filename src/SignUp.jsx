import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { GoLock } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { Link } from 'react-router-dom'
import Background1 from './background/background-1';

const SignUp = () => {

  // Sign Up input fields style
  const SUfieldStyle = "mb-7 font-outfit relative";
  const SUfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
  const SUfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

  // useStates for managing values or inputs
  const [showPassword, setShowPassword] = useState(false); 
  const [showReEnterPassword, setShowReEnterPassword] = useState(false); 
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const togglePasswordVisibility = () => setShowPassword((showPassword) => !showPassword); // function helps to hide/show the password
  const toggleReEnterPasswordVisibility = () => setShowReEnterPassword((showReEnterPassword) => !showReEnterPassword); // function helps to hide/show the re-enter password
  const typedEmail = (e) => setUsername(e.target.value) // Event handler for the email input
  const typedUsername = (e) => setEmail(e.target.value) // Event handler for the username input
  const typedPassword = (e) => setPassword(e.target.value) // Event handler for the password input
  const reEnterPassword = (e) => setConfPassword(e.target.value) // Event handler for the re-enter password input
  const onReturnSignIn = () => localStorage.setItem('Return', true) // Function to store key value pair to local storage


  const signup = 
      <>
        <div className="absolute flex justify-center items-center h-screen w-full flex-col bg-none">
          <div className='w-[100%] h-[90%]'></div>

          <div className='flex justify-center w-[100%] h-[110%]'>
            <form className="w-[clamp(250px,50%,400px)] text-center">
              <h2 className="text-[30px] font-outfit mb-7 text-loginTextBlue">REGISTER ACCOUNT</h2>
              <div className={SUfieldStyle}> {/*Input field for Email*/}
                <MdOutlineMail className={SUfieldIcon} /> {/*icon for the field*/}
                <input
                  type="email" 
                  placeholder="Email"
                  required
                  className= {SUfieldContentStyle}
                  onChange={typedEmail}
                  value={email}
                />
              </div>

              <div className={SUfieldStyle}> {/*Input field for username*/}
                <FaRegUser className={SUfieldIcon} /> {/*icon for the field*/}
                <input
                  type="text"
                  placeholder="Username"
                  required
                  className={SUfieldContentStyle}
                  onChange={typedUsername}
                  value={username}
                />
              </div>

              <div className={SUfieldStyle}> {/*Input field for password*/}
                <GoLock className={SUfieldIcon} /> {/*icon for the field*/}
                <input
                  type={showPassword ? "text" : "password"} // checks if the showReEnterPassword is true, if yes it will show text else shows dot dot dot HAHA
                  placeholder="Password"
                  required
                  className={SUfieldContentStyle}
                  onChange={typedPassword}
                  value={password}
                />
                <button // button to hide/show password
                  type="button"
                  onClick={togglePasswordVisibility} // calls the function to hide/show password
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
                >
                  {password !== '' ? (showPassword ? <FaRegEye /> : <FaRegEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
                </button>
              </div>

              <div className={SUfieldStyle}> {/*Input field for Re-enter password*/}
                <GoLock className={SUfieldIcon} /> {/*icon for the field*/}
                <input
                  type={showReEnterPassword ? "text" : "password"} // checks if the showReEnterPassword is true, if yes it will show text else shows dot dot dot haha
                  placeholder="Re-enter Password"
                  required
                  className={SUfieldContentStyle}
                  onChange={reEnterPassword}
                  value={confPassword}
                />
                <button // button to hide/show password
                  type="button"
                  onClick={toggleReEnterPasswordVisibility} // calls the function to hide/shows password
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
                >
                  {confPassword !== '' ? (showReEnterPassword ? <FaRegEye /> : <FaRegEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
                </button>
              </div>

              <div className="mb-10 font-outfit text-white"> {/*Button to create account*/}
                <button to='/verification'
                  type="submit"
                  className="text-[23px] w-full p-[clamp(0.5rem,0.6vw,1rem)] bg-loginBlue border-hoverloginBlue rounded hover:bg-hoverloginBlue"
                >
                  Sign Up
                </button>
              </div>
              
              <div className="font-outfit text-loginTextBlue"> {/*button link to Sign In*/}
                Already have an account? <Link to='/' onClick={onReturnSignIn} className="underline text-loginTextBlue  hover:text-blue-700 cursor-pointer">Use it</Link>
              </div>

            </form>
          </div>
        </div>
      </>

  const display = 
                <>
                  <Background1 height={60} imageTop={5.5} state={2}/>
                  {signup}
                </>
  return (display);
};

export default SignUp;
