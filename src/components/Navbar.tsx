"use client"

import Link from 'next/link';
import { FiHeart, FiUser } from 'react-icons/fi';
import Image from 'next/image';
import { useState } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";


const Navbar = () => {

  const [isvisible, SetIsvisible] = useState(false);
  const { user } = useUser();

  const handleLink = () => {
      SetIsvisible(!isvisible);
  }

  return (
    <> {user && 
    <nav className="bg-white shadow-md p-4 flex items-center justify-between border-y-b2-2 text-black ">
      <div className="flex items-center space-x-8 mx-8">
          <div className="flex ">
          <button onClick={handleLink}>
          <Image src="/menu.png" height={30} width={30} alt="Menu" />
          </button>
        </div>
        {/* Home link */}
        <div className="text-2xl font-bold ">
          <Link href="/">
            Home
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
          <div className={`${!isvisible ? 'hidden' : 'flex space-x-4 border-r-2 shadow-md rounded-full '}`} >
        <Link href="/buy" className="px-4 py-2 hover:bg-slate-200  rounded-full ">
          Buy
        </Link>
        <Link href="/rent" className="px-4 py-2  hover:bg-slate-200  rounded-full">
          Rent
        </Link>
        <Link href="/sell" className="px-4 py-2  hover:bg-slate-200  rounded-full">
          Sell
        </Link>
        <Link href="" className="px-4 py-2  hover:bg-slate-200  rounded-full animate-bounce" onClick={handleLink} >
            more
        </Link>
          </div>

          {/* // this is important property can be use in future too */}
          <div className={`${isvisible ? 'hidden' : 'flex space-x-8 rounded-full  border-r-2 shadow-md '}`} >
          <Link href="/Contact" className="px-4 py-2 hover:bg-slate-200  rounded-full ">
          Contact Us
        </Link>
        <Link href="/About" className="px-4 py-2  hover:bg-slate-200  rounded-full">
          About
        </Link>
        <Link href="/Our-Team" className="px-4 py-2  hover:bg-slate-200 rounded-full">
          Our-Team
        </Link>
        <Link href="" className="px-4 py-2  hover:bg-slate-200 rounded-full animate-bounce" onClick={handleLink}>
          more
        </Link>
          </div>
      </div>



      <div className="flex items-center space-x-4 mx-8">
        <button className="text-gray-500 hover:text-gray-700">
          <FiHeart className="w-6 h-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          
          <Link href="/dashboard"><FiUser className="w-6 h-6" /></Link>
        </button>
      </div>
    </nav>
}
    </>
  );
};

export default Navbar;
