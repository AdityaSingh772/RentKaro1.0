"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CartItem {
  id: number;
  name: string;
  price: number | null;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistCount, setWishlistCount] = useState<number>(0);

  useEffect(() => {
    const storedCartItems: CartItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
    setWishlistCount(storedCartItems.length);
  }, []);

  useEffect(() => {
    setWishlistCount(cartItems.length);
  }, [cartItems]);

  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  return (
    <div className="min-h-screen bg-black text-blue-500 p-8 mt-7">
      <h1 className="text-3xl font-bold mb-8 mt-8">Shopping Cart</h1>
      <div className="bg-gray-900 shadow-lg rounded-lg p-6 border border-blue-500">
        {cartItems.length === 0 ? (
          <p className="text-center text-blue-500">Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b border-light-blue-500 py-4">
                <div className="flex items-center">
                  <Link href={`/single-product/${item.id}`}>
                    <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-lg" />
                  </Link>
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-blue-300">{item.price !== null ? `$${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 'Price not available'}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
        {wishlistCount}
      </div>
    </div>
  );
};

export default CartPage;

