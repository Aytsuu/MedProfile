import React from 'react';
import MailIcon from './assets/MailIcon.png';
import ArrowIcon from './assets/Arrow.png';
import EyeIcon from './assets/EyeIcon.png';

function Forgotpass() {
  
  const handleResendClick = () => {
    // function for resend click
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center h-[50vh] bg-[#039BA9]">
      </div>
      <div className="bg-white p-8 h-[50vh] flex flex-col justify-center items-center rounded-t-[30px] shadow-md mt-[-50px]">
        <h2 className="text-3xl font-bold mb-6 text-center text-[#013D43]">Account Recovery</h2>
        <form className="w-full flex flex-col items-center">
          <div className="flex flex-col w-[400px] mb-10">
            <div className="relative mb-4">
              <input
                type="password"
                id="newPassword"
                placeholder="New Password"
                className="w-full h-[50px] border border-gray-300 rounded text-left pl-2 pr-10"
                required
              />
              <img src={EyeIcon} alt="Eye Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6" />
            </div>
            <div className="relative">
              <input
                type="password"
                id="reEnterPassword"
                placeholder="Re-enter Password"
                className="w-full h-[50px] border border-gray-300 rounded text-left pl-2 pr-10"
                required
              />
              <img src={EyeIcon} alt="Eye Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6" />
            </div>
          </div>
          <div className="flex mb-4 justify-center">
            <button
              type="button"
              className="bg-[#C7C7C7] text-white flex items-center justify-center w-[90px] h-[55px] rounded-md mr-4"
            >
              <img src={ArrowIcon} alt="Arrow Icon" className="h-5 w-5 my-auto" />
            </button>
            <button
              type="button"
              className="bg-[#049CAA] text-white rounded-md hover:bg-blue-700 w-[304px] h-[55px] flex items-center justify-center"
            >
              Change
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgotpass;
