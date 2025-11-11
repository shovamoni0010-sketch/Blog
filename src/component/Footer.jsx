
import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-green-950 text-white py-5 px-6 flex items-center justify-center max-h-96">
      <div className="flex items-center justify-between space-x-8 max-w-[1200px] w-full">
        <div className="flex items-center space-x-2 ">
          <img src="/Logo01.svg" alt="ClickNews Logo" className="h-6 cursor-pointer" />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-300 text-sm cursor-pointer">Home</button>
          <button className="text-gray-300 text-sm cursor-pointer">
            Login
          </button>
          <button className="text-gray-300 text-sm cursor-pointer">
            Sign Up
          </button>
          <button className="text-gray-300 text-sm cursor-pointer">Blog</button>
          <button className="text-gray-300 text-sm cursor-pointer">404</button>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className=" text-white px-5 py-20 rounded-md font-medium text-sm cursor-pointer ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
