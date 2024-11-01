import React from 'react';
import { MdOutlineMail } from 'react-icons/md'
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom'
import Background1 from './background/background-1';

function ForgotPass_1() {

    const onReturnSignIn = () => localStorage.setItem('Return', true) // Function to store key value pair to local storage

    //Forgot Password input field styles
    const FPfieldStyle = "mb-7 font-outfit relative";
    const FPfieldContentStyle = "w-full p-[clamp(0.5rem,0.7vw,1rem)] pl-10 border border-hoverloginBlue rounded outline-none";
    const FPfieldIcon = "absolute left-3 top-1/2 transform -translate-y-1/2 text-hoverloginBlue";

    const FPgetEmail = <div className='absolute flex justify-center items-center h-screen w-full flex-col bg-none'>
                            <div className='w-[100%] h-[100%]'></div>
                            <div className='flex justify-center w-[100%] h-[100%]'>
                                {/* This div represents the white bottom half with a rounded top */}
                            <form className="w-full flex flex-col items-center">
                                <h2 className="text-[30px] mb-6 font-outfit text-center text-[#013D43]">ACCOUNT RECOVERY</h2>
                                <div className="flex flex-col w-[400px] mb-4">
                                    <label className="block text-[17px] font-outfit font-light text-[#013D43] mb-5">
                                        Please enter a valid email address.
                                    </label>
                                    <div className={FPfieldStyle}>
                                        <MdOutlineMail className={FPfieldIcon}/>
                                        <input
                                        type="email"
                                        id="email"
                                        className={FPfieldContentStyle}
                                        placeholder="Email Address"
                                        required
                                        />
                                    </div>
                                </div>
                                {/* back button and verify button */}
                                <div className="flex mb-4 justify-center font-outfit">
                                    <Link to="/" onClick={onReturnSignIn}>
                                        <button
                                            type="button"
                                            className="bg-[#C7C7C7] text-white flex items-center justify-center w-[90px] h-[55px] rounded-md mr-4"
                                        >
                                            <GrLinkPrevious className='text-darkGrayColor h-6 w-6 my-auto'/>
                                        </button>  
                                    </Link>
                                    <Link to='/accountrecover'>
                                        <button
                                            type="button"
                                            className="text-[23px] bg-[#049CAA] text-white rounded-md hover:bg-hoverloginBlue w-[304px] h-[55px] flex items-center justify-center"
                                        >
                                            Verify
                                        </button>
                                    </Link>
                                </div>
                            </form>
                            </div>
                        </div>

    const display = <>
                    <Background1 height={55} imageTop={10.5} state={2}/>
                    {FPgetEmail}
                    </>

    return (display);
}

export default ForgotPass_1;