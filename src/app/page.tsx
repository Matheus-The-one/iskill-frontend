import React from 'react';

const Homepage = () => {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="space-y-8 w-full max-w-sm">
        <a href="/admin">
          <button className="w-full px-6 py-4 bg-black text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
            Admin Dashboard
          </button>
        </a>
        <a href="/user">
          <button className="w-full px-6 py-4 bg-black text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
            User Dashboard
          </button>
        </a>
        <a href="/company">
          <button className="w-full px-6 py-4 bg-black text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800">
            Company Dashboard
          </button>
        </a>
      </div>
    </main>
  );
};

export default Homepage;

