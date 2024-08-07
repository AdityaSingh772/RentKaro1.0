import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import Image from 'next/image';

interface Product {
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

interface ProductListProps {
  Products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ Products }) => {
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const wishlistIds = storedWishlist.map((item: { id: number }) => item.id);
    setWishlist(wishlistIds);
  }, []);

  const handleWishlistToggle = (product: Product) => {
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
        price: product.price,
        image: product.photos[0],
      };
      const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
      existingCart.push(cartItem);
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
    }
    setWishlist(updatedWishlist);

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const wishlistCount = storedCartItems.length;
    localStorage.setItem('wishlistCount', wishlistCount.toString());
  };

  return (
    <div className="bg-black p-4 m-10 rounded-lg">
      {Products.length === 0 ? (
        <div className="text-center text-white">Sorry, no results found</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Products.map((product) => (
            <Link key={product.id} href={`/single-product/${product.id}`}>
              <div className="bg-gray-800 rounded-lg shadow-md p-4 relative hover:bg-gray-700 transition duration-300 h-full flex flex-col">
                <div className="flex-shrink-0">
                  <img 
                    src={product.photos[0] ? product.photos[0] : 'http://dummyimage.com/132x100.png/ff4444/ffffff'} 
                    alt={product.title} 
                    className="w-full h-48 object-cover rounded-lg" 
                  />
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
                      {wishlist.includes(product.id) ? <FiCheckCircle /> : <HiOutlineShoppingCart />}
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-blue-500">{product.price}</h2>
                    <p className="text-white">{product.title}</p>
                    <div className="mt-2 text-gray-400">
                      <span>Brand: {product.brand}</span>
                      <span className="block">Contact: {product.phone}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300">
                      Owner wants to {product.type}
                    </button>
                  </div>
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
