import React from 'react';
import { FiHeart } from 'react-icons/fi';

const DashboardSection = () => {
  const products = [
    {
      id: 1,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 3,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 4,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 5,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
  ];

  return (
    <div className="bg-white p-5 rounded-lg text-center flex-1 mx-5 drop-shadow-lg hover:-translate-y-1 duration-300">
      <h2 className="text-2xl font-bold mb-4"></h2>
      
      
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-2">Remove Your Advertisement</h3>
        <p className="text-gray-700 mb-4">Manage your advertisements and listings here.</p>
        <button className="bg-blue-600 text-white py-2 px-6 rounded shadow-md hover:bg-blue-700 transition-colors duration-300">Manage Ads</button>
      </div>
      
      {/* Section to display user's products */}
      <h3 className="text-lg font-bold mb-4">Your Products</h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative w-64 flex-none">
              <img src={product.imageUrl} alt="Product" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute top-4 right-4">
                <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none">
                  <FiHeart className="text-red-500" />
                </button>
              </div>
              <div className="mt-4 flex justify-between">
                <button className="bg-b1 text-white py-2 px-4 rounded-full shadow-md hover:bg-b3">Rent</button>
                <button className="bg-b2 text-white py-2 px-4 rounded-full shadow-md hover:bg-b4">Buy</button>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">{product.price}</h2>
                <p className="text-gray-700">{product.item}</p>
              </div>
              <div className="mt-2 flex justify-between text-gray-600">
                <span>Seller: {product.seller}</span>
                <span>Review: {product.reviews}</span>
                <span>Like: {product.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
