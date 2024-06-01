"use client"


import React from 'react';
import Image from 'next/image';

interface SidebarProps {
  setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  return (
    <div className="w-64 bg-gradient-to-b from-gray-500 to-gray-800 text-white overflow-auto pt-4 pb-6 h-screen fixed md:flex md:flex-col shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <Image src="/seller1.jpg" height={150} width={150} alt='' />
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => setActiveComponent('InvoiceList')}
              className="flex items-center text-white hover:bg-blue-600 transition-colors duration-200 font-medium p-3 rounded-md w-full text-left"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h6v-2h-6v2zm4-10H3c-1.1 0-1.99.9-1.99 2L1 17c0 1.1.9 2 2 2h8l3 3 3-3h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h14v12z" />
              </svg>
              Invoice List
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('OrdersAdmin')}
              className="flex items-center text-white hover:bg-blue-600 transition-colors duration-200 font-medium p-3 rounded-md w-full text-left"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4a8 8 0 110 16 8 8 0 010-16zm0 14a6 6 0 100-12 6 6 0 000 12zm3-7h-2v-2h-2v2H9v2h2v2h2v-2h2v-2z" />
              </svg>
              Orders Admin
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('RegisteredClient')}
              className="flex items-center text-white hover:bg-blue-600 transition-colors duration-200 font-medium p-3 rounded-md w-full text-left"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 2a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3H5zm0 2h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm4 2v2H7V6h2zm6 0v2h-2V6h2zM7 10h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" />
              </svg>
              Registered Client
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveComponent('RegisteredCollege')}
              className="flex items-center text-white hover:bg-blue-600 transition-colors duration-200 font-medium p-3 rounded-md w-full text-left"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12a9.944 9.944 0 004.273 8.27 1.002 1.002 0 001.415-1.415A7.953 7.953 0 014 12a8 8 0 0116 0 7.953 7.953 0 01-3.688 6.855 1.002 1.002 0 001.415 1.415A9.944 9.944 0 0022 12c0-5.523-4.477-10-10-10z"/>
                <path d="M11 11h2v6h-2v-6zm1-5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
              </svg>
              Registered College
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
