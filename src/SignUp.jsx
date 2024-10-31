import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const SignUp = () => {

  // Sign Up input fields style
  const SUfieldStyle = "mb-7 font-outfit relative";
  const SUfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
  const SUfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

  //password visibility and input default values
  const [showPassword, setShowPassword] = useState(false); // sets the default value to false
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);// sets the default value to false
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const togglePasswordVisibility = () => { // function helps to hide/show the password
    setShowPassword((showPassword) => !showPassword);
  };

  const toggleReEnterPasswordVisibility = () => { // function helps to hide/show the re-enter password
    setShowReEnterPassword((showReEnterPassword) => !showReEnterPassword);
  };

  const typedEmail = (e) =>{ // Event handler for the email input
    setUsername(e.target.value)
  }


  const typedUsername = (e) =>{ // Event handler for the username input
    setEmail(e.target.value)
  }

  const typedPassword = (e) =>{ // Event handler for the password input
      setPassword(e.target.value)
  }

  const reEnterPassword = (e) =>{ // Event handler for the re-enter password input
    setConfPassword(e.target.value)
}

  const signup = (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
      <h2 className="text-[35px] font-outfit mb-7 text-loginTextBlue">REGISTER ACCOUNT</h2>
      <form className="w-[clamp(250px,50%,400px)] text-center">

        <div className={SUfieldStyle}> {/*Input field for Email*/}
          <FaEnvelope className={SUfieldIcon} /> {/*icon for the field*/}
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
          <FaUser className={SUfieldIcon} /> {/*icon for the field*/}
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
          <FaLock className={SUfieldIcon} /> {/*icon for the field*/}
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
            {password !== '' ? (showPassword ? <FaEye /> : <FaEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
          </button>
        </div>

        <div className={SUfieldStyle}> {/*Input field for Re-enter password*/}
          <FaLock className={SUfieldIcon} /> {/*icon for the field*/}
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
            {confPassword !== '' ? (showReEnterPassword ? <FaEye /> : <FaEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
          </button>
        </div>

        <div className="mb-20 font-outfit text-white"> {/*Button to create account*/}
          <button
            type="submit"
            className="text-[23px] w-full p-[clamp(0.5rem,1vw,1rem)] bg-loginBlue border-hoverloginBlue rounded hover:bg-hoverloginBlue"
          >
            Sign Up
          </button>
        </div>
        
        <div className="font-outfit text-loginTextBlue"> {/*button link to Sign In*/}
          Already have an account? <Link to="/signin" className="underline text-loginTextBlue hover:hoverloginBlue cursor-pointer">Use it</Link>
        </div>

      </form>
    </div>
  );
  return signup;
};

export default SignUp;
