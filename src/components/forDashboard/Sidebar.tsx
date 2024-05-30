import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const Sidebar: React.FC = () => {
  const {user, isLoading, error} = useUser();
  console.log(user);
  const n = user?.name || ''
  const url = user ? user.picture || '' : '';
  return (
    <div className="sidebar w-64 bg-neutral-700 p-5 border-r border-gray-300">
      {
        user &&
        <div className="profile text-center mb-8"> {/* Increased margin-bottom */}
        <img src={url} alt="Aditya" className="profile-img w-16 rounded-full mx-auto border-2 border-white hover:border-black" />
        <h2 className="text-lg font-bold mt-2 text-white">{n}</h2> {/* Added margin-top */}
      </div>
      }
      
      <nav>
        <ul>
          <li className="py-3"> 
            <Link href="/dashboard" className="text-blue-600 font-bold text-[1.5rem] drop-shadow-lg" >Dashboard</Link>
          </li>
          <li className="py-3 font-bold"> 
            <Link href="">User</Link>
          </li>
          <li className="py-3 font-bold"> 
            <Link href="/">View Products</Link>
          </li>
          <li className="py-3 font-bold"> 
            <Link href="/api/auth/logout">Logout</Link>
          </li>
        </ul>
      </nav>
      <div className="upgrade text-center mt-8"> {/* Increased margin-top */}
        <p className='text-[0.75rem] mb-3'>wanna sell/rent?</p> {/* Increased margin-bottom */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer">Post your ad</button>
      </div>
    </div>
  );
};

export default Sidebar;
