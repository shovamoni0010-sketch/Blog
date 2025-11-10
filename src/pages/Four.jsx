
import React from 'react';

const Four = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <div className="w-full max-w-[460px] flex flex-col items-center justify-center bg-white shadow-xl rounded-md border border-gray-200 p-20 b">
        <img src="/Page Error.svg" className="w-10 mb-3" alt="ClickNews Logo" />
        <h2 className="text-xl font-semibold mb-6">Page Not Found</h2>

        <form
          onSubmit={e => e.preventDefault()}
          className="w-full flex justify-center"
        >
          <button
            type="submit"
            className="px-5 py-2 border border-gray-400 rounded-sm bg-green-500 text-black text-base cursor-pointer hover:bg-green-600 transition"
          >
            Go Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Four;
