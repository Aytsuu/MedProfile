import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { GrLinkPrevious } from "react-icons/gr";
import { GoLock } from "react-icons/go";

function Forgotpass() {

    //password visibility and input default values
    const [showNewPassword, setShowNewPassword] = useState(false); // sets the default value to false
    const [showReEnterPassword, setShowReEnterPassword] = useState(false);// sets the default value to false
    const [newPassword, setNewPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const toggleNewPasswordVisibility = () => { // function helps to hide/show the password
        setShowNewPassword((showNewPassword) => !showNewPassword);
      };
    
    const toggleReEnterPasswordVisibility = () => { // function helps to hide/show the re-enter password
        setShowReEnterPassword((showReEnterPassword) => !showReEnterPassword);
    };

    const typedNewPass = (e) => {
        setNewPassword(e.target.value)
    }

    const reEnterPass = (e) => {
        setConfPassword(e.target.value)
    }

    //Forgot Password input field styles
    const FPfieldStyle = "mb-7 font-outfit relative";
    const FPfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
    const FPfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

    const FPnewPass = <div className='flex justify-center items-center h-screen w-full flex-col bg-none'>
                        <div className="bg-none p-8 flex flex-col justify-center items-center">
                        <h2 className="text-[30px] mb-6 font-outfit text-center text-[#013D43]">ACCOUNT RECOVERY</h2>
                        <form className="w-full flex flex-col items-center">
                            <div className="flex flex-col w-[400px] mb-4">
                                {/* sa new password field */}
                                <div className={FPfieldStyle}>
                                    <GoLock className={FPfieldIcon}/>
                                    <input
                                    type={showNewPassword ? "text" : "password"}
                                    id="newPassword"
                                    placeholder="New Password"
                                    className={FPfieldContentStyle}
                                    onChange={typedNewPass}
                                    value={newPassword}
                                    required
                                    />
                                    <button // button to hide/show password
                                        type="button"
                                        onClick={toggleNewPasswordVisibility} // calls the function to hide/shows password
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
                                    >
                                        {newPassword !== '' ? (showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
                                    </button>
                                </div>
                                {/* sa re enter password field */}
                                <div className={FPfieldStyle}>
                                    <GoLock className={FPfieldIcon}/>
                                    <input
                                    type= {showReEnterPassword ? "text" : "password"}
                                    id="reEnterPassword"
                                    placeholder="Re-enter Password"
                                    className={FPfieldContentStyle}
                                    onChange={reEnterPass}
                                    value={confPassword}
                                    required
                                    />
                                    <button // button to hide/show password
                                        type="button"
                                        onClick={toggleReEnterPasswordVisibility} // calls the function to hide/shows password
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue"
                                    >
                                        {confPassword !== '' ? (showReEnterPassword ? <FaRegEye /> : <FaRegEyeSlash />) : ''} {/*changes the icon if there's a text in textfield*/}
                                    </button>
                                </div>
                            </div>
                            <div className="flex mb-4 justify-center font-outfit">
                                <Link to="/accountrecover">
                                    <button
                                        type="button"
                                        className="bg-[#C7C7C7] text-white flex items-center justify-center w-[90px] h-[55px] rounded-md mr-4"
                                    >
                                        <GrLinkPrevious className='text-darkGrayColor h-6 w-6 my-auto'/>
                                    </button>  
                                </Link>
                                <Link>
                                    <button
                                        type="button"
                                        className="text-[23px] bg-[#049CAA] text-white rounded-md hover:bg-hoverloginBlue w-[304px] h-[55px] flex items-center justify-center"
                                    >
                                        Change
                                    </button>
                                </Link>
                            </div>
                        </form>
                        </div>
                    </div>
    return (
        FPnewPass
    );
}

export default Forgotpass;