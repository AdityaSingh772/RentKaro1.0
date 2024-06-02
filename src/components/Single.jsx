"use client"
import React from 'react'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Single = () => {
    
        const router = useRouter();
        const [product, setProduct] = useState<any>(null);
      
        useEffect(() => {
          if (router.isReady && router.query) {
            setProduct(router.query);
          }
        }, [router.isReady, router.query]);
      
        const handleAddToWishlist = () => {
          // Implement your logic for adding to wishlist here
          console.log('Added to wishlist:', product);
        };
      
        if (!product) {
          return <div>Loading...</div>;
        }
      
  return (
    <div className="w-1/2 bg-fuchsia-100 flex flex-col items-center justify-center p-8 shadow-lg">
    <div key={product.id} className="w-full max-w-2xl flex flex-col gap-8 bg-white p-6 rounded-lg transition duration-300 transform hover:scale-105">
      <div className="text-center">
        <h1 className="font-extrabold text-4xl ">{product.product_name}</h1>
        <span className="block mt-2 text-xl text-green-600">Price: ${product.price}</span>
      </div>
      <p className="mt-4 text-gray-700 text-lg leading-relaxed">{product.desc}</p>
      <div className="flex items-center justify-between gap-4 mt-4 ">
        <div className='flex gap-4'>
          <Image src="/cart.png" alt="Cart Icon" height={15} width={30} />
          <button
            type="button"
            className="py-2 px-6 text-sm border-b-4 font-bold from-[#2BC0E4] to-[#EAECC6] drop-shadow-lg inline-block text-transparent bg-clip-text bg-gradient-to-r rounded-lg shadow-md  hover:bg-gradient-to-l hover:scale-105 transition duration-300 ease-in-out "
            onClick={handleAddToWishlist}
          >
            Add to WishList
          </button>
        </div>
        <div className='flex gap-2'>
          <button className="py-3 px-6 bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] text-xl text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-l">
            Buy
          </button>
          <button className="py-3 px-6 bg-gradient-to-r from-[#76B852] to-[#8DC26F] text-xl text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-l">
            Rent
          </button>
        </div>
      </div>

      <div className="mt-2 bg-gray-50 p-6 rounded-lg shadow-inner">
        <p className="font-extrabold text-2xl  mb-4">Owner Details</p>
        <h2 className="text-xl font-semibold text-gray-800">{product.first_name}</h2>
        <div className="mt-2 text-gray-600">
          <div className="flex items-center">
            <label className="font-semibold">Hostel: </label>
            <p className="ml-2">{product.Hostel_name}</p>
          </div>
          <div className="flex items-center mt-2">
            <label className="font-semibold">Email ID: </label>
            <p className="ml-2">{product.email}</p>
          </div>
          <div className="flex items-center mt-2">
            <label className="font-semibold">Contact No: </label>
            <p className="ml-2">{product.contact_no}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Single
