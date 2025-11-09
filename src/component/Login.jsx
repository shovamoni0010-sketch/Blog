


import React from 'react';

const Login = () => {
  const handleSubmit = e => e.preventDefault();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black font-sans">
      <div className="w-full max-w-xs flex flex-col items-center justify-center p-10 border border-gray-200 rounded-md shadow-xl">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/public/Subtract.svg"
            className="w-10 mb-5"
            alt="ClickNews Logo"
          />
          <h2 className="text-xl font-semibold text-gray-900 m-0">
            Welcome to ClickNews
          </h2>
          <p className="text-sm text-gray-500 mt-1 mb-2">Log in to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <label className="text-sm text-black text-left">Email </label>
          <input
            type="email"
            placeholder="Your email address"
            className="p-3 border border-gray-300 rounded-md text-xs text-gray-600 focus:outline-none"
          />

          <div className="flex justify-between items-center">
            <label className="text-sm text-gray-800">Password </label>
            <a href="#" className="text-xs text-gray-700 hover:underline">
              Forgot your password?
            </a>
          </div>

          <input
            type="password"
            placeholder="Your password"
            className="p-3 border border-gray-300 rounded-md text-xs text-gray-600 focus:outline-none"
          />

          <button
            type="submit"
            className="mt-2 py-2 border border-gray-300 bg-green-500 text-gray-900 font-medium rounded-md hover:bg-green-600 transition-300 cursor-pointer"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
