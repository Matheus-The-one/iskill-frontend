import React from 'react';

const Homepage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Branding */}
          <div className="w-full lg:w-1/2 p-12 flex flex-col justify-between bg-black text-white">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold">I</span>
                </div>
                <span className="font-bold text-4xl sm:text-5xl tracking-tight">skill</span>
              </div>
              <p className="mt-6 text-gray-300 text-xl sm:text-2xl font-light leading-relaxed">
                Elevate your potential in the digital era.
              </p>
            </div>
            <div className="mt-auto pt-10">
              <p className="text-gray-400 text-sm">&copy; 2024 Iskill. Innovate. Learn. Grow.</p>
            </div>
          </div>
          
          {/* Right side - Login options */}
          <div className="w-full lg:w-1/2 p-12 space-y-6 bg-white">
            <h2 className="text-3xl font-bold text-black mb-8">Access Portal</h2>
            <button className="w-full px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
              <a href="/admin">Admin Dashboard</a>
            </button>
            <button className="w-full px-6 py-4 bg-black text-white font-semibold rounded-xl transition-all duration-300 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 shadow-lg hover:shadow-xl">
              <a href="/user">User Portal</a>
            </button>
            <button className="w-full px-6 py-4 border-2 border-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50 shadow-lg hover:shadow-xl">
              <a href="/company">Company Login</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;