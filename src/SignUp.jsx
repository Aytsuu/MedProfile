import React, { useState } from 'react';
import { FaEnvelope, FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const SignUp = () => {

  // Sign Up input fields style
  const SUfieldStyle = "mb-7 font-outfit relative";
  const SUfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
  const SUfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

  const [showPassword, setShowPassword] = useState(false);
  const [showReEnterPassword, setShowReEnterPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((showPassword) => !showPassword);
  };

  const toggleReEnterPasswordVisibility = () => {
    setShowReEnterPassword((showReEnterPassword) => !showReEnterPassword);
  };

  const typedEmail = (e) =>{
    setUsername(e.target.value)
  }


  const typedUsername = (e) =>{
    setEmail(e.target.value)
  }

  const typedPassword = (e) =>{
      setPassword(e.target.value)
  }

  const reEnterPassword = (e) =>{
    setConfPassword(e.target.value)
}

  const signup = (
    <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
      <h2 className="text-[35px] font-outfit mb-7 text-loginTextBlue">REGISTER ACCOUNT</h2>
      <form className="w-[clamp(250px,50%,400px)] text-center">

        <div className={SUfieldStyle}>
          <FaEnvelope className={SUfieldIcon} />
          <input
            type="email"
            placeholder="Email"
            required
            className= {SUfieldContentStyle}
            onChange={typedEmail}
            value={email}
          />
        </div>

        <div className={SUfieldStyle}>
          <FaUser className={SUfieldIcon} />
          <input
            type="text"
            placeholder="Username"
            required
            className={SUfieldContentStyle}
            onChange={typedUsername}
            value={username}
          />
        </div>

        <div className={SUfieldStyle}>
          <FaLock className={SUfieldIcon} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
            className={SUfieldContentStyle}
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

        <div className={SUfieldStyle}>
          <FaLock className={SUfieldIcon} />
          <input
            type={showReEnterPassword ? "text" : "password"}
            placeholder="Re-enter Password"
            required
            className={SUfieldContentStyle}
            onChange={reEnterPassword}
            value={confPassword}
          />
          <button
            type="button"
            onClick={toggleReEnterPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
          >
          {confPassword !== '' ? (showReEnterPassword ? <FaEye /> : <FaEyeSlash />) : ''}
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
          Already have an account? <Link to="/signin" className="underline text-loginTextBlue hover:hoverloginBlue cursor-pointer">Use it</Link>
        </div>

      </form>
    </div>
  );
  return signup;
};

export default SignUp;
