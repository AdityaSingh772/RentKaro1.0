"use client";
import React from 'react';


const Footer = () => {
  

  return (
    <div className='bg-neutral-700'>
      <footer className="bg-black rounded-lg shadow-lg shadow-black my-4 p-4">
        <div className="w-full max-w-screen-xl mx-auto md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="bg-gradient-to-r font-bold from-blue-500 drop-shadow-lg to-[#EAECC6] text-2xl inline-block text-transparent bg-clip-text">RentKaro</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-neutral-400 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/about" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="/team" className="hover:underline me-4 md:me-6">Our Team</a>
              </li>
              <li>
                <a href="/license" className="hover:underline me-4 md:me-6">Licensing</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-neutral-400 sm:text-center dark:text-gray-400">
            © 2024 <a href="/" className="hover:underline">RentKaro™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
