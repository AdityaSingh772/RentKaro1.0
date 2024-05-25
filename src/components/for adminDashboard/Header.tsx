import React from 'react';

const Header = () => {
  return (
    <div className="bg-white shadow-md py-4 px-6 mb-6 flex justify-between items-center rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-6">
        <span className="text-gray-600">Hi, Dineshh</span>
        <a href="#" className="text-blue-600 hover:underline">Settings</a>
        <a href="#" className="text-blue-600 hover:underline">Help & Contact</a>
        <img 
          className="h-10 w-10 rounded-full object-cover" 
          src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo.png" 
          alt="User profile"
        />
      </div>
    </div>
  );
};

export default Header;
