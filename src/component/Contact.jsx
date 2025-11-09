import React from 'react';

export default function ContactSection() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-green-200">
            Get in Touch
          </h1>
          <p className="text-gray-400 mb-12 max-w-md">
            Enim massa velit id volutpat fermentum sed praesent. Orci a faucibus
            velit nisi felis placerat quam diam diam.
          </p>

          <div className="space-y-6">
            {/* Card 1 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Investigative Team</p>
                <p className="text-lg font-semibold">
                  investigative@clicknews.com
                </p>
              </div>
              <a href="#" className="text-green-300 text-xl">
                →
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Broadcast Operations</p>
                <p className="text-lg font-semibold">
                  investigative@clicknews.com
                </p>
              </div>
              <a href="#" className="text-green-300 text-xl">
                →
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex items-center justify-between">
              <div>
                <p className="text-gray-300 text-sm">Advertising Sales</p>
                <p className="text-lg font-semibold">
                  investigative@clicknews.com
                </p>
              </div>
              <a href="#" className="text-green-300 text-xl">
                →
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="bg-green-950 rounded-2xl p-10 border border-green-900">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm">First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full mt-2 p-3 rounded-lg bg-green-900 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-sm">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last name"
                  className="w-full mt-2 p-3 rounded-lg bg-green-900 text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter a valid Email Address"
                className="w-full mt-2 p-3 rounded-lg bg-green-900 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Budget</label>
              <input
                type="text"
                placeholder="$1499 - $1999"
                className="w-full mt-2 p-3 rounded-lg bg-green-900 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm">Tell me about the project?</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full mt-2 p-3 rounded-lg bg-green-900 text-white placeholder-gray-400 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-3 rounded-lg"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
