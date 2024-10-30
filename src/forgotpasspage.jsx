import React from 'react';
import MailIcon from './assets/MailIcon.png';
import ArrowIcon from './assets/Arrow.png';

function Forgotpass() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center h-[50vh] bg-[#039BA9]">
        {/* This div represents the blue top half */}
      </div>
      <div className="bg-white p-8 h-[50vh] flex flex-col justify-center items-center rounded-t-[30px] shadow-md mt-[-50px]">
        {/* This div represents the white bottom half with a rounded top */}
        <h2 className="text-2xl mb-6 text-center text-[#013D43]">Account Recovery</h2>
        <form className="w-full flex flex-col items-center">
          <div className="flex flex-col w-[400px] mb-4">
            <label className="block text-sm text-[#013D43] mb-2">
              Please enter a valid email address.
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <img src={MailIcon} alt="Mail Icon" className="h-[1.125rem] w-[1.125rem]" />
              </span>
              <input
                type="email"
                id="email"
                className="w-full h-[50px] p-2 pl-10 border border-gray-300 rounded"
                placeholder="Email Address"
                required
              />
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
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgotpass;
