
import React from 'react';

const Four = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-4">
      <div className=" w-full max-w-[95%]  sm:max-w-[400px]  md:max-w-[460px]
        lg:max-w-[500px]   flex flex-col items-center justify-center
        bg-white shadow-xl rounded-md border border-gray-200
        p-10 sm:p-14 md:p-20  
      ">
        <img
          src="/Page Error.svg"
          className="w-12 sm:w-16 mb-3"
          alt="ClickNews Logo"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center">
          Page Not Found
        </h2>

        <form
          onSubmit={e => e.preventDefault()}
          className="w-full flex justify-center"
        >
          <button
            type="submit"
            className="
              px-5 py-2 sm:px-6 sm:py-3 border border-gray-400 rounded-sm
              bg-green-800 text-white text-base sm:text-lg cursor-pointer
              hover:bg-green-900 transition
            "
          >
            Go Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Four;
