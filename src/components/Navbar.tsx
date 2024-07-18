"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { TbNotebook } from 'react-icons/tb';
import { IoIosLogOut } from 'react-icons/io';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useUser } from '@auth0/nextjs-auth0/client';
import Preloader from './PreLoader';
import Tooltip from './Tooltip';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [wishlistCount, setWishlistCount] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoading, error } = useUser();

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setWishlistCount(storedCartItems.length);
  }, []);

  const handleLink = () => {
    setIsVisible(!isVisible);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isLoading) return <Preloader />;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black text-white p-4 grid grid-cols-3 items-center border-b-2 overflow-x-hidden z-20">
        <div className="flex items-center space-x-8">
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
        <div className="flex justify-center">
          <div className="hidden lg:flex space-x-4">
            <div className={`${!isVisible ? 'hidden' : 'flex space-x-4 border-2 border-neutral-400 shadow-md rounded-full'}`}>
              <Link href="/" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
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
                Our Team
              </Link>
              <Link href="" className="px-4 py-2 hover:bg-white hover:text-black rounded-full animate-bounce" onClick={handleLink}>
                more
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end space-x-2">
          {user ? (
            <div className="flex items-center space-x-4">
              <button className="hover:text-blue-500">
                <Tooltip tooltipContent="cart">
                  <Link href="/cart"><HiOutlineShoppingCart className="w-6 h-6" /></Link>
                </Tooltip>
              </button>
              <Link href="/demandlist" className="hover:text-blue-500">
                <TbNotebook className="w-6 h-6" />
              </Link>
              <button className="hover:text-blue-500">
                <Link href="/dashboard"><FiUser className="w-6 h-6" /></Link>
              </button>
              <button className="hover:text-blue-500">
                <Link href="/api/auth/logout"><IoIosLogOut className="w-6 h-6" /></Link>
              </button>
            </div>
          ) : (
            <button className="hover:text-blue-500">
              <Link href="/api/auth/login">Login</Link>
            </button>
          )}
        </div>
      </nav>

      <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:hidden bg-black text-white p-4 flex-col space-y-4 border-t-2 fixed w-full top-16 z-20`}>
        <button onClick={toggleMobileMenu} className="self-end">
          <FiX className="w-6 h-6" />
        </button>
        <Link href="/" className="px-4 py-2 hover:bg-white hover:text-black rounded-full">
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
    </>
  );
};

export default Navbar;
