import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
<nav className="w-full bg-green-950 text-white py-5 px-6 flex items-center justify-center">
  <div className="flex items-center justify-between space-x-8 max-w-[1200px] w-full">
    <div className="flex items-center space-x-2 ">
      <img src="/Logo01.svg" alt="ClickNews Logo" className="h-6" />
    </div>

    <div className="hidden md:flex items-center space-x-6">
      <button className="text-gray-300 text-sm cursor-pointer">Home</button>
      <button className="text-gray-300 text-sm cursor-pointer">Login</button>
      <button className="text-gray-300 text-sm cursor-pointer">Sign Up</button>
      <button className="text-gray-300 text-sm cursor-pointer">Blog</button>
      <button className="text-gray-300 text-sm cursor-pointer">404</button>
    </div>

    <div className="hidden md:flex items-center mx-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-60 bg-white px-3 py-2 rounded-md text-black text-sm focus:outline-none"
      />
    </div>

    <div className="hidden md:flex items-center space-x-4">
      <button className="bg-green-800 text-white px-5 py-2 rounded-md font-medium text-sm hover:bg-green-900">
        Contact Us
      </button>
    </div>
  </div>
</nav>
  );
}

