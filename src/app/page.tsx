import React from 'react';



const Homepage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 sm:p-8">
      <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Branding */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <span className="font-bold text-4xl sm:text-5xl text-white">
                <span className="text-yellow-300">I</span>skill
              </span>
              <p className="mt-4 text-white text-lg sm:text-xl">Empowering your skills, unlocking your potential.</p>
            </div>
            <div className="mt-auto pt-8">
              <p className="text-white text-sm">&copy; 2024 Iskill. All rights reserved.</p>
            </div>
          </div>
          
          {/* Right side - Login options */}
          <div className="w-full lg:w-1/2 p-8 space-y-6 bg-white bg-opacity-20 backdrop-filter backdrop-blur-md">
            <h2 className="text-3xl font-semibold text-white mb-6">Welcome Back</h2>
            <button  className="bg-blue-600 w-full px-6 py-4 ${color} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color.split('-')[1]}-500"> 
              <a href="/admin">Admin Login</a>
            </button>
            <button  className="bg-green-600 w-full px-6 py-4 ${color} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color.split('-')[1]}-500">
              <a href="/user">User Login</a>
            </button>
            <button  className="bg-purple-600 w-full px-6 py-4 ${color} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color.split('-')[1]}-500">
               <a href="/company">Company Login</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Homepage;