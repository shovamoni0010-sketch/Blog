import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="text-center mb-10 max-w-[600px] w-full">
            <h2 className="text-[42px] font-medium text-black mb-10">
              Connect with Your Trusted Accounting Advisors
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 w-full">
            <div className="w-full md:w-[360px] flex flex-col justify-between">
              <h4 className="text-[20px] font-normal text-gray-800 w-[260px] mb-5">
                Reach us anytime via Call, Email, or a Visit
              </h4>

              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between bg-white p-4 border border-gray-200 rounded-md">
                  <div className=" p-3 rounded-full border border-gray-300 flex items-center justify-center">
                    <img
                      src="/public/phone.svg"
                      alt="phone"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <h5 className="text-[16px] font-medium text-black m-0">
                      Give us call
                    </h5>
                    <p className="text-[14px] text-gray-600 m-0 mt-1">
                      (880) 18845612312
                    </p>
                  </div>
                  <div className="bg-green-800 p-2 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                    <img
                      src="/public/icon.svg"
                      alt="arrow"
                      className="w-4 h-4 object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white rounded-md p-4 border border-gray-200">
                  <div className=" p-3 rounded-full border border-gray-400 flex items-center justify-center">
                    <img
                      src="/public/mail.svg"
                      alt="mail"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <h5 className="text-[16px] font-medium text-black m-0">
                      Send us Email
                    </h5>
                    <p className="text-[14px] text-gray-600 m-0 mt-1">
                      Ahmed.Borsha@hotmail.com
                    </p>
                  </div>
                  <div className="bg-green-800 p-2 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer ">
                    <img
                      src="/public/icon.svg"
                      alt="arrow"
                      className="w-4 h-4 object-cover"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between bg-white p-4 border border-gray-200 rounded-md">
                  <div className="p-3 rounded-full border border-gray-400 flex items-center justify-center">
                    <img
                      src="/public/loc.svg"
                      alt="location"
                      className="w-4 h-4"
                    />
                  </div>
                  <div className="flex-1 ml-4">
                    <h5 className="text-[16px] font-medium text-black m-0">
                      Our Location
                    </h5>
                    <p className="text-[14px] text-gray-600 m-0 mt-1">
                      6500 Naogaon Sadar, Naogaon
                    </p>
                  </div>
                  <div className="bg-green-800 p-2 rounded-full border border-gray-400 flex items-center justify-center cursor-pointer">
                    <img
                      src="/public/icon.svg"
                      alt="arrow"
                      className="w-4 h-4 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 min-w-[340px]">
              <form className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-1/2 p-3 border border-gray-200 text-sm text-gray-800 outline-none placeholder-gray-500 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-1/2 p-3 border border-gray-200  rounded-md text-sm text-gray-800 outline-none placeholder-gray-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="p-3 border border-gray-200 rounded-md text-sm text-gray-800 outline-none placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="p-3 border border-gray-200 rounded-md text-sm text-gray-800 outline-none placeholder-gray-500"
                />
                <input
                  type="text"
                  placeholder="Enter the subject to discuss"
                  className="p-3 border border-gray-200 rounded-md text-sm text-gray-800 outline-none placeholder-gray-500"
                />
                <textarea
                  placeholder="Write your message"
                  className="p-3 border border-gray-200 rounded-md text-sm text-gray-800 outline-none placeholder-gray-500 min-h-[70px]"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-800 border border-gray-400 p-3 text-[16px] font-medium text-white hover:bg-green-900 transition rounded-md cursor-pointer"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
