// 'use client'
// import React from 'react';
// import { useCart } from '../Context/CartContext';

// interface ProductData {
//   id: number;
//   brand: string;
//   title: string;
//   description: string;
//   price: string;
//   photo: string;
//   college: string;
//   phone: string;
// }

// interface MyCProps {
//   Product: ProductData;
//   Id: string;
// }

// const Singlepage: React.FC<MyCProps> = ({ Product, Id }) => {
//   const { addToCart } = useCart();

//   const handleAddToWishlist = () => {
//     const cartItem = {
//       id: Product.id,
//       name: Product.title,
//       price: parseFloat(Product.price),
//       image: Product.photo,
//     };
//     addToCart(cartItem);
//   };

//   return (
//     <div className="w-1/2 bg-fuchsia-100 flex flex-col items-center justify-center p-8 shadow-lg">
//       <div key={Product.id} className="w-full max-w-2xl flex flex-col gap-8 bg-white p-6 rounded-lg transition duration-300 transform hover:scale-105">
//         <div className="text-center">
//           <h1 className="font-extrabold text-4xl ">{Product.title}</h1>
//           <span className="block mt-2 text-xl text-green-600">Price: ${Product.price}</span>
//         </div>
//         <p className="mt-4 text-gray-700 text-lg leading-relaxed">{Product.description}</p>
//         <div className="flex items-center justify-between gap-4 mt-4 ">
//           <div className='flex gap-4'>
//             <img src="/cart.png" alt="Cart Icon" height={15} width={30} />
//             <button
//               type="button"
//               className="py-2 px-6 text-sm border-b-4 font-bold from-[#2BC0E4] to-[#EAECC6] drop-shadow-lg inline-block text-transparent bg-clip-text bg-gradient-to-r rounded-lg shadow-md  hover:bg-gradient-to-l hover:scale-105 transition duration-300 ease-in-out "
//               onClick={handleAddToWishlist}
//             >
//               Add to WishList
//             </button>
//           </div>
//           <div className='flex gap-2'>
//             <button className="py-3 px-6 bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] text-xl text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-l">
//               Buy
//             </button>
//             <button className="py-3 px-6 bg-gradient-to-r from-[#76B852] to-[#8DC26F] text-xl text-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:bg-gradient-to-l">
//               Rent
//             </button>
//           </div>
//         </div>

//         <div className="mt-2 bg-gray-50 p-6 rounded-lg shadow-inner">
//           <p className="font-extrabold text-2xl  mb-4">Owner Details</p>
//           <h2 className="text-xl font-semibold text-gray-800">{Product.brand}</h2>
//           <div className="mt-2 text-gray-600">
//             <div className="flex items-center">
//               <label className="font-semibold">Hostel: </label>
//               <p className="ml-2">{Product.college}</p>
//             </div>
//             <div className="flex items-center mt-2">
//               <label className="font-semibold">Email ID: </label>
//               <p className="ml-2">{Product.phone}</p>
//             </div>
//             <div className="flex items-center mt-2">
//               <label className="font-semibold">Contact No: </label>
//               <p className="ml-2">{Product.phone}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Singlepage;










import React from 'react';

interface ProductData {
  id: number;
  brand: string;
  title: string;
  description: string;
  price: string;
  photo: string;
  college: string;
  phone: string;
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
      price: parseFloat(Product.price),
      image: Product.photo,
    };

    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    existingCart.push(cartItem);
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    // Update the wishlist count in localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const wishlistCount = storedCartItems.length;
    localStorage.setItem('wishlistCount', wishlistCount.toString());
  };

  return (
    <div className="w-1/2 bg-fuchsia-100 flex flex-col items-center justify-center p-8 shadow-lg">
      <div key={Product.id} className="w-full max-w-2xl flex flex-col gap-8 bg-white p-6 rounded-lg transition duration-300 transform hover:scale-105">
        <div className="text-center">
          <h1 className="font-extrabold text-4xl ">{Product.title}</h1>
          <span className="block mt-2 text-xl text-green-600">Price: ${Product.price}</span>
        </div>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">{Product.description}</p>
        <div className="flex items-center justify-between gap-4 mt-4 ">
          <div className='flex gap-4'>
            <img src="/cart.png" alt="Cart Icon" height={15} width={30} />
            <button
              type="button"
              className="py-2 px-6 text-sm border-b-4 font-bold from-[#2BC0E4] to-[#EAECC6] drop-shadow-lg inline-block text-transparent bg-clip-text bg-gradient-to-r rounded-lg shadow-md hover:bg-gradient-to-l hover:scale-105 transition duration-300 ease-in-out"
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
          <p className="font-extrabold text-2xl mb-4">Owner Details</p>
          <h2 className="text-xl font-semibold text-gray-800">{Product.brand}</h2>
          <div className="mt-2 text-gray-600">
            <div className="flex items-center">
              <label className="font-semibold">Hostel: </label>
              <p className="ml-2">{Product.college}</p>
            </div>
            <div className="flex items-center mt-2">
              <label className="font-semibold">Email ID: </label>
              <p className="ml-2">{Product.phone}</p>
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

