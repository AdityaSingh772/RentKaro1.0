
// import React from 'react';
// import Link from 'next/link';
// import { FiHeart } from 'react-icons/fi';





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

// interface ProductListProps {
//   Products: ProductData[];
// }

// const ProductList: React.FC<ProductListProps> = ({ Products }) => {
//   return (
//     <div className="bg-gray-100 p-4 m-10 rounded-lg">
//       {Products.length === 0 ? (
//         <div className="text-center text-gray-700">Sorry, no results found</div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-fit scroll-smooth">
         
//           {Products.map((product) => (
//              <Link
//              key={product.id}
//              href={{
//                pathname: `/single-product/${product.id}`
//               }}
//            >
//             <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative">
//               <img src={product.photo} alt={product.title} className="w-full h-48 object-cover rounded-lg" />

//               <div className="absolute top-4 right-4">
//                 <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none">
//                   <FiHeart className="text-red-500" />
//                 </button>
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <button className="bg-b1 text-white py-2 px-4 rounded-full shadow-md hover:bg-b3">Rent</button>
//                 <button className="bg-b2 text-white py-2 px-4 rounded-full shadow-md hover:bg-b4">Buy</button>
//               </div>
//               <div className="mt-4">
//                 <h2 className="text-xl font-bold">{product.price}</h2>
//                 <p className="text-gray-700">{product.title}</p>
//               </div>
//               <div className="mt-2 flex justify-between text-gray-600">
//                 <span>Brand: {product.brand}</span>
//                 <span>Contact: {product.phone}</span>
//               </div>
//             </div>

//           </Link>
//         ))}
//       </div>

//           )}
//         </div>
//         )}

    


// export default ProductList;









import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiHeart, FiCheckCircle } from 'react-icons/fi';

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

interface ProductListProps {
  Products: ProductData[];
}

const ProductList: React.FC<ProductListProps> = ({ Products }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  // Load wishlist from local storage on component mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const wishlistIds = storedWishlist.map((item: { id: number }) => item.id);
    setWishlist(wishlistIds);
  }, []);

  // Function to add/remove items from the wishlist
  const handleWishlistToggle = (product: ProductData) => {
    let updatedWishlist;
    if (wishlist.includes(product.id)) {
      updatedWishlist = wishlist.filter(id => id !== product.id);
      const updatedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]').filter((item: { id: number }) => item.id !== product.id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      updatedWishlist = [...wishlist, product.id];
      const cartItem = {
        id: product.id,
        name: product.title,
        price: parseFloat(product.price),
        image: product.photo,
      };
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      existingCart.push(cartItem);
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
    }
    setWishlist(updatedWishlist);

    // Update the wishlist count in localStorage
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const wishlistCount = storedCartItems.length;
    localStorage.setItem('wishlistCount', wishlistCount.toString());
  };

  return (
    <div className="bg-gray-100 p-4 m-10 rounded-lg">
      {Products.length === 0 ? (
        <div className="text-center text-gray-700">Sorry, no results found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-fit scroll-smooth">
          {Products.map((product) => (
            <Link key={product.id} href={`/single-product/${product.id}`}>
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative">
                <img src={product.photo} alt={product.title} className="w-full h-48 object-cover rounded-lg" />

                <div className="absolute top-4 right-4">
                  <button
                    className={`bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none ${
                      wishlist.includes(product.id) ? 'text-red-500' : 'text-gray-500'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleWishlistToggle(product);
                    }}
                  >
                    {wishlist.includes(product.id) ? <FiCheckCircle /> : <FiHeart />}
                  </button>
                </div>

                <div className="mt-4 flex justify-between">
                  <button className="bg-b1 text-white py-2 px-4 rounded-full shadow-md hover:bg-b3">Rent</button>
                  <button className="bg-b2 text-white py-2 px-4 rounded-full shadow-md hover:bg-b4">Buy</button>
                </div>

                <div className="mt-4">
                  <h2 className="text-xl font-bold">{product.price}</h2>
                  <p className="text-gray-700">{product.title}</p>
                </div>

                <div className="mt-2 flex justify-between text-gray-600">
                  <span>Brand: {product.brand}</span>
                  <span>Contact: {product.phone}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;


