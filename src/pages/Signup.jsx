
import React from 'react';

const Signup = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black font-sans">
      <div className="w-xl max-w-[460px] flex flex-col items-center justify-center p-10 border border-gray-200 rounded-md shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/public/Subtract.svg"
            className="w-10 mb-5"
            alt="ClickNews Logo"
          />

          <h2 className="text-xl font-semibold text-gray-900 m-0">
            Welcome to ClickNews
          </h2>

          <p className="text-sm text-gray-500 mt-1 mb-2">Create a account</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-sm">
          <label className="text-sm text-black text-left">Name </label>

          <input
            type="email"
            placeholder="Your name"
            className="p-3 border border-gray-300 rounded-md text-xs text-gray-600 focus:outline-none"
          />

          <label className="text-sm text-black text-left">Email </label>

          <input
            type="email"
            placeholder="Your email address"
            className="p-3 border border-gray-300 rounded-md text-xs text-gray-600 focus:outline-none"
          />

          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-800">
              Create a strong password
            </label>
          </div>

          <input
            type="password"
            placeholder="Your password"
            className="p-3 border border-gray-300 rounded-md text-xs text-gray-600 focus:outline-none"
          />

          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-800">
              Confirm your password
            </label>
          </div>

          <input
            type="password"
            placeholder="Your password"
            className="p-3 border border-gray-300 rounded-md text-xs text-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-2 py-2 border border-gray-300 bg-green-800 text-white font-medium rounded-md
             hover:bg-green-900 transition-300 cursor-pointer"
          >
            {' '}
            Sign Up{' '}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
