import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Categories = () => {
  const Catagory = [
    {
      id: 1,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 2,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 3,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 4,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 5,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 6,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
      id: 7,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      item: 'Book',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    }
  ];

  const ListOfitems = [
    {
      id: 1,
      title: 'Books Section'
    },
    {
      id: 2,
      title: 'Cycles'
    }
  ];

  return (
    <div className="bg-gray-100 p-4 mx-10 my-1 rounded-lg h-fit">
      {ListOfitems.map((listItem) => (
        <div key={listItem.id}>
          <h1 className="text-2xl font-sans font-normal my-2 border-y-2 bg-red-200">{listItem.title}</h1>
          <div className="overflow-x-scroll flex space-x-4 py-4">
            {Catagory.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative w-72 flex-none">
                <img src={product.imageUrl} alt={product.item} className="w-full h-48 object-cover rounded-lg" />
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
                  <span>Reviews: {product.reviews}</span>
                  <span>Likes: {product.likes}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
