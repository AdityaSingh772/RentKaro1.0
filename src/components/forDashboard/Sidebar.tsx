import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  const {user, isLoading, error} = useUser();
  
  if(isLoading){
    return (
      <div>loading</div>
    );
  }
  console.log(user);
  const n = user?.name || ''
  const url = user ? user.picture || '' : '';
  return (
    <div className="w-64 bg-neutral-700 p-5 border-r border-gray-300 items-center text-center">
      {
        user &&
        <div className="profile text-center mb-8"> {/* Increased margin-bottom */}
        <img
         src={url} alt="Aditya" className="profile-img w-16 rounded-full mx-auto border-2 border-white hover:border-blue-500 drop-shadow-xl" 
         />
        <h2 className="text-lg font-bold mt-2 drop-shadow-lg text-white">{n}</h2> {/* Added margin-top */}
      </div>
      }
      
      <nav>
        <ul>
          <li className="py-3"> 
            
          </li>
          <li className="py-3"> 
          <Link href="/dashboard" className="block w-full px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full  shadow-md hover:shadow-lg">
          User
          </Link>
          </li>
          <li className="py-3"> 
          <Link href="/" className=" block w-full px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full  shadow-md hover:shadow-lg">
          View Products
          </Link>
          </li>
          <li className="py-3"> 
          <Link href="/api/auth/logout" className=" block w-full px-4 py-2 hover:bg-white text-white bg-black hover:text-[#FF0000] rounded-full shadow-md hover:shadow-lg">
          Logout
          </Link>
          </li>
        </ul>
      </nav>
      <div className=" text-center mt-8"> {/* Increased margin-top */}
        <p className='text-[0.75rem] mb-3 text-white'>wanna sell/rent?</p> {/* Increased margin-bottom */}
        <Link href="/sell" className="px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full  shadow-md hover:shadow-lg">Post your ad</Link>
      </div>
    </div>
  );
};

export default Sidebar;
