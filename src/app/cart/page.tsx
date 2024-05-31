// "use client"
// import React from 'react';
// import { useCart } from '../../Context/CartContext';
// import Image from 'next/image';

// const CartPage: React.FC = () => {
//   const { cartItems, removeFromCart } = useCart();

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
//       <div className="bg-white shadow-lg rounded-lg p-6">
//         {cartItems.length === 0 ? (
//           <p className="text-center text-gray-500">Your cart is empty</p>
//         ) : (
//           <ul>
//             {cartItems.map(item => (
//               <li key={item.id} className="flex items-center justify-between border-b py-4">
//                 <div className="flex items-center">
//                   <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-lg" />
//                   <div className="ml-4">
//                     <h2 className="text-xl font-bold">{item.name}</h2>
//                     <p className="text-gray-600">${item.price}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;





"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
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

  const updateWishlistCount = () => {
    setWishlistCount(cartItems.length);
  };

  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    updateWishlistCount();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-lg" />
                  <div className="ml-4">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-gray-600">${item.price}</p>
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


