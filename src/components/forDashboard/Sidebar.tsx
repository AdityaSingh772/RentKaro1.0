import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const Sidebar: React.FC = () => {
  const { user, isLoading, error } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const userName = user?.name || 'Guest';
  const userPicture = user?.picture || 'https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg';

  return (
    <div className="w-64 bg-neutral-700 p-5 border-r border-gray-300 items-center text-center">
      {user && (
        <div className="profile text-center mb-8">
          <img
            src={userPicture}
            alt="User Profile"
            className="profile-img w-16 rounded-full mx-auto border-2 border-white hover:border-blue-500 drop-shadow-xl"
          />
          <h2 className="text-lg font-bold mt-2 drop-shadow-lg text-white">{userName}</h2>
        </div>
      )}

      <nav>
        <ul>
          <li className="py-3">
            <Link href="/dashboard" className="block w-full px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full shadow-md hover:shadow-lg">
              Dashboard
            </Link>
          </li>
          <li className="py-3">
            <Link href="/" className="block w-full px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full shadow-md hover:shadow-lg">
              View Products
            </Link>
          </li>
          <li className="py-3">
            <Link href="/api/auth/logout" className="block w-full px-4 py-2 hover:bg-white text-white bg-black hover:text-[#FF0000] rounded-full shadow-md hover:shadow-lg">
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      <div className="upgrade text-center mt-8">
        <p className='text-[0.75rem] mb-3 text-white'>Wanna sell/rent?</p>
        <Link href="/sell" className="block w-full px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full shadow-md hover:shadow-lg mb-3">
          Post your ad
        </Link>
        <Link href="/demand" className="block w-full px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full shadow-md hover:shadow-lg">
          Demand
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
