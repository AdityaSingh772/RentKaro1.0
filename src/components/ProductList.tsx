import Image from 'next/image';
import { FiHeart } from 'react-icons/fi';


const ProductList = () => {
  const Products = [
    {
      id: 1,
      imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
      price: '5$',
      address: 'jija , saali or Sex',
      seller: 'Jeet',
      reviews: 2,
      likes: '80'
    },
    {
        id: 2,
        imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        price: '5$',
        address: 'jija , saali or Sex',
        seller: 'Jeet',
        reviews: 2,
        likes: '80'
      },
      {
        id: 3,
        imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        price: '5$',
        address: 'jija , saali or Sex',
        seller: 'Jeet',
        reviews: 2,
        likes: '80'
      },
      {
        id: 4,
        imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        price: '5$',
        address: 'jija , saali or Sex',
        seller: 'Jeet',
        reviews: 2,
        likes: '80'
      },
      {
        id: 5,
        imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        price: '5$',
        address: 'jija , saali or Sex',
        seller: 'Jeet',
        reviews: 2,
        likes: '80'
      },
      {
        id: 6,
        imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        price: '5$',
        address: 'jija , saali or Sex',
        seller: 'Jeet',
        reviews: 2,
        likes: '80'
      },
      {
        id: 7,
        imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
        price: '5$',
        address: 'jija , saali or Sex',
        seller: 'Jeet',
        reviews: 2,
        likes: '80'
      },
      
    // Add more properties as needed
  ];

  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto h-screen">
        {Products.map((Products) => (
          <div key={Products.id} className="bg-white rounded-lg shadow-md p-4 relative">
            <img src={Products.imageUrl} alt="Products" className="w-full h-48 object-cover rounded-lg"  />
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
              <h2 className="text-xl font-bold">{Products.price}</h2>
              <p className="text-gray-700">{Products.address}</p>
            </div>
            <div className="mt-2 flex justify-between text-gray-600">
              <span>Seller : {Products.seller}</span>
              <span>Review:  {Products.reviews} </span>
              <span>Like: {Products.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
