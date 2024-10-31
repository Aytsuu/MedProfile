import React from 'react';
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Forgotpass({type}) {
  const handleResendClick = () => {
    // ari ang function para sa resend nga text
    
  };

  const FPgetCode = <div className="flex justify-center items-center h-screen w-full flex-col bg-none">
                        <div className="bg-none p-8 flex flex-col justify-center items-center">
                            {/* This div represents the white bottom half with a rounded top */}
                            <h2 className="text-[30px] mb-6 font-outfit text-center text-[#013D43]">{type}</h2>
                            <form className="w-full flex flex-col items-center">
                                <div className="flex flex-col w-[400px] mb-4">
                                    <label className="block text-[17px] font-outfit font-light text-[#013D43] mb-5">
                                    We’ve sent a verification code to your email address. Failed to receive the code?    
                                    <span 
                                        onClick={handleResendClick} 
                                        className="text-[#D68000] cursor-pointer hover:underline ml-1"
                                    >
                                        Resend
                                    </span>
                                    </label>
                                    <div className="flex justify-between mb-4">
                                    {/* Input Fields */}
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <input
                                        key={index}
                                        type="text" // change this to only dawat int and make this nga only 1 value ra iyang dawaton each field
                                        id={`input${index + 1}`}
                                        className="w-[60px] h-[60px] border border-hoverloginBlue rounded text-center text-[20px] outline-none" // Set dimensions to create square fields
                                        required
                                        />
                                    ))}
                                    </div>
                                </div>

                               {/* back button and verify button */}
                                <div className="flex mb-4 justify-center font-outfit">
                                    <Link to="/forgotpass-1">
                                        <button
                                            type="button"
                                            className="bg-[#C7C7C7] text-white flex items-center justify-center w-[90px] h-[55px] rounded-md mr-4"
                                        >
                                            <GrLinkPrevious className='text-darkGrayColor h-6 w-6 my-auto'/>
                                        </button>  
                                    </Link>
                                    <Link to={type === 'ACCOUNT RECOVERY' ? '/forgotpass-2' : ''}>
                                        <button
                                            type="button"
                                            className="text-[23px] bg-[#049CAA] text-white rounded-md hover:bg-hoverloginBlue w-[304px] h-[55px] flex items-center justify-center"
                                        >
                                            Enter
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>

    return (
        FPgetCode
    );
}

export default Forgotpass;