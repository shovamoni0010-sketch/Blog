
import React from 'react';

const Signup = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black font-sans">
      <div
        className="
        w-full  max-w-[95%]  sm:max-w-[400px]  md:max-w-[460px]  lg:max-w-[500px]  flex flex-col items-center justify-center p-6 sm:p-8 md:p-10  border border-gray-200 rounded-md shadow-xl "
      >
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <img
            src="/public/Subtract.svg"
            className="w-8 sm:w-10 mb-4 sm:mb-5"
            alt="ClickNews Logo"
          />

          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 m-0">
            Welcome to ClickNews
          </h2>

          <p className=" text-xs sm:text-sm text-gray-500 mt-1 mb-2">
            Create a account
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:gap-4 w-full"
        >
          <label className="text-xs sm:text-sm text-black text-left">
            Name{' '}
          </label>

          <input
            type="email"
            placeholder="Your name"
            className="p-2 sm:p-3 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 focus:outline-none"
          />

          <label className="text-xs sm:text-sm text-black text-left">
            {' '}
            Email{' '}
          </label>

          <input
            type="email"
            placeholder="Your email address"
            className="p-2 sm:p-3 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 focus:outline-none"
          />

          <div className="flex justify-between items-center">
            <label className="text-xs sm:text-sm text-gray-800 mt-2">
              Create a strong password
            </label>
          </div>

          <input
            type="password"
            placeholder="Your password"
            className="p-2 sm:p-3 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 focus:outline-none"
          />

          <div className="flex justify-between items-center">
            <label className="text-xs sm:text-sm text-gray-800 mt-2">
              Confirm your password
            </label>
          </div>

          <input
            type="password"
            placeholder="Your password"
            className="p-2 sm:p-3 border border-gray-300 rounded-md text-xs sm:text-sm text-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-3 sm:mt-4 py-2 sm:py-3 border border-gray-300 bg-green-800 text-white
              font-medium rounded-md hover:bg-green-900 transition duration-300 cursor-pointer"
          > Sign Up </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
