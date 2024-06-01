"use client";

import Link from 'next/link';
import { FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { useState } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import Preloader from './PreLoader';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoading, error } = useUser();

  if (isLoading) return <Preloader />;
  if (error) return <div>{error.message}</div>;

  const handleLink = () => {
    setIsVisible(!isVisible);
  };

  const refBuy = (user && isLoading) ? "/" : "/api/auth/login";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-black text-white p-4 flex items-center justify-between border-b-2 fixed w-full top-0 z-50">
        <div className="flex items-center space-x-8 mx-8">
          <div className="flex lg:hidden">
            <button onClick={toggleMobileMenu}>
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
          <div className="text-2xl font-bold">
            <Link href="/">
              <span className="bg-gradient-to-r font-bold from-blue-500 drop-shadow-lg to-[#EAECC6] inline-block text-transparent bg-clip-text">RentKaro</span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex space-x-4">
          <div className={`${!isVisible ? 'hidden' : 'flex space-x-4 border-2 border-neutral-400 shadow-md rounded-full'}`}>
            <Link href={refBuy} className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
              Buy
            </Link>
            <Link href="/sell" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
              Rent
            </Link>
            <Link href="/sell" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
              Sell
            </Link>
            <Link href="" className="px-4 py-2 hover:bg-white hover:text-black rounded-full animate-bounce" onClick={handleLink}>
              more
            </Link>
          </div>
          <div className={`${isVisible ? 'hidden' : 'flex space-x-4 border-2 border-neutral-400 shadow-md rounded-full'}`}>
            <Link href="/contact" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
              Contact Us
            </Link>
            <Link href="/about" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
              About
            </Link>
            <Link href="/team" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
              Our-Team
            </Link>
            <Link href="" className="px-4 py-2 hover:bg-white hover:text-black rounded-full animate-bounce" onClick={handleLink}>
              more
            </Link>
          </div>
        </div>
        <div className="flex font-bold text-white items-center space-x-4 mx-8">
          {user ? (
            <div>
              <button className="mx-[0.75rem] hover:text-blue-500">
                <FiHeart className="w-6 h-6" />
              </button>
              <button className="mx-[0.75rem] hover:text-blue-500">
                <Link href="/dashboard"><FiUser className="w-6 h-6" /></Link>
              </button>
              <button className="mx-[0.75rem] hover:text-blue-500">
                <Link href="/api/auth/logout">Logout</Link>
              </button>
            </div>
          ) : (
            <button className="mx-[0.75rem] hover:text-blue-500">
              <Link href="/api/auth/login">Login</Link>
            </button>
          )}
        </div>
      </nav>
      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:hidden bg-black text-white p-4 flex-col space-y-4 border-t-2 fixed w-full top-16 z-50`}>
        <button onClick={toggleMobileMenu} className="self-end">
          <FiX className="w-6 h-6" />
        </button>
        <Link href={refBuy} className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
          Buy
        </Link>
        <Link href="/sell" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
          Rent
        </Link>
        <Link href="/sell" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
          Sell
        </Link>
        <Link href="/contact" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
          Contact Us
        </Link>
        <Link href="/about" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
          About
        </Link>
        <Link href="/team" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
          Our-Team
        </Link>
      </div>
    </>
  );
};

export default Navbar;
