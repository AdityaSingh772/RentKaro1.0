import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
<<<<<<< HEAD
const Sidebar: React.FC = () => {
  const {user,error,isLoading}=useUser();
  return (
    <div className="sidebar w-64 bg-white p-5 border-r border-gray-300">
      <div className="profile text-center mb-8"> {/* Increased margin-bottom */}
        <img src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="Aditya" className="profile-img w-16 rounded-full mx-auto" />
        <h2 className="text-lg font-bold mt-2">{user?user.name: 'Guest'}</h2> {/* Added margin-top */}
=======

const Sidebar: React.FC = () => {
  const {user, isLoading, error} = useUser();
  console.log(user);
  const n = user?.name || ''
  const url = user ? user.picture || '' : '';
  return (
    <div className="w-64 bg-neutral-700 p-5 border-r border-gray-300 items-center text-center">
      {
        user &&
        <div className="profile text-center mb-8"> {/* Increased margin-bottom */}
        <img
         src={url} alt="Aditya" className="profile-img w-16 rounded-full mx-auto border-2 border-white hover:border-black drop-shadow-xl" />
        <h2 className="text-lg font-bold mt-2 drop-shadow-lg text-white">{n}</h2> {/* Added margin-top */}
>>>>>>> 6075d0f8a8b6ea45c7680ec2efd4a7f8ebf8ad61
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
<<<<<<< HEAD
      <div className="upgrade text-center mt-8"> {/* Increased margin-top */}
        <p className='text-[0.75rem] mb-3'>wanna sell/rent?</p> {/* Increased margin-bottom */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer ">Post your ad</button>
        <Link href="/demand">
        <button className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer mt-6">Demand</button>
        </Link>
        
=======
      <div className=" text-center mt-8"> {/* Increased margin-top */}
        <p className='text-[0.75rem] mb-3 text-white'>wanna sell/rent?</p> {/* Increased margin-bottom */}
        <Link href="/sell" className="px-4 py-2 hover:bg-white bg-black text-white hover:text-black rounded-full  shadow-md hover:shadow-lg">Post your ad</Link>
>>>>>>> 6075d0f8a8b6ea45c7680ec2efd4a7f8ebf8ad61
      </div>
    </div>
  );
};

export default Sidebar;
