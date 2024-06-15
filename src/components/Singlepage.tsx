

import { Prosto_One } from 'next/font/google';
import React from 'react';

interface ProductData {
  id: number;
  type: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  photos: string[];
  college: string;
  phone: string;
  email: string;
}


interface SinglepageProps {
  Product: ProductData;
  Id: string;
}

const Singlepage: React.FC<SinglepageProps> = ({ Product, Id }) => {
  const handleAddToWishlist = () => {
    const cartItem = {
      id: Product.id,
      name: Product.title,
      price: Product.price,
      image: Product.photos[0],
    };

    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const wishlistCount = storedCartItems.length;
    localStorage.setItem('wishlistCount', wishlistCount.toString());
  };

  return (
    <div className="w-1/2 bg-black flex flex-col items-center justify-center p-8 shadow-lg my-[4.5rem]">
      <div key={Product.id} className="px-[3.5rem] w-full  border-l-2 border-blue-500  max-w-2xl flex flex-col gap-8 bg-black p-6 ">
        <div className="text-center">
          <h1 className="font-extrabold text-white text-4xl mt-8">{Product.title}</h1>
          <span className="block mt-2 text-xl text-green-600">Price: ${Product.price}</span>
        </div>
        <p className="mt-4 text-neutral-300 text-lg leading-relaxed">{Product.description}</p>
        <div className="flex items-center justify-between gap-4 mt-4 ">
          <div className='flex gap-4'>

            <button
              type="button"
              className="block w-full px-4 py-2 hover:bg-white bg-black text-white border-2 border-blue-500 hover:text-black rounded-full shadow-md hover:shadow-lg"
              onClick={handleAddToWishlist}
            >
              Add to Wishlist
            </button>
          </div>
          {
            (Product.type === 'rent')?(
              <div className='flex gap-2'>
            <button className="block w-full px-4 py-2 bg-white text-black rounded-full shadow-md hover:shadow-lg">
              Owner wants to rent
            </button>
            
          </div>
            ):(
              <div className='flex gap-2'>
            <button className="block w-full px-4 py-2 hover:bg-white bg-black text-white border-2 border-blue-500 hover:text-black rounded-full shadow-md hover:shadow-lg">
              Buy
            </button>
            
          </div>
            )
          }
          
        </div>

        <div className="mt-2 bg-white p-6 rounded-lg shadow-inner">
          <p className="font-extrabold text-2xl mb-4">Owner Details</p>
          <h2 className="text-xl font-semibold text-neutral-800">{Product.brand}</h2>
          <div className="mt-2 text-neutral-700">
            <div className="flex items-center">
              <label className="font-semibold">College: </label>
              <p className="ml-2">{Product.college}</p>
            </div>
            <div className="flex items-center mt-2">
              <label className="font-semibold">Email ID: </label>
              <p className="ml-2">{Product.email}</p>
            </div>
            <div className="flex items-center mt-2">
              <label className="font-semibold">Contact No: </label>
              <p className="ml-2">{Product.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlepage;

