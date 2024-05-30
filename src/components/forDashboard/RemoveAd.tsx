import React from 'react';
import { FiHeart } from 'react-icons/fi';

interface Product {
  id: number;
  type:string,
  email:string;
  brand: string;
  title: string;
  description: string;
  price: string;
  photo: string;
  college: string;
  phone: string;
}

interface ManageProps {
  userData?: Product[];
  
}


const DashboardSection: React.FC<ManageProps>= ({userData}) => {
  // const products = [
  //   {
  //     id: 1,
  //     imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
  //     price: '5$',
  //     item: 'book',
  //     seller: 'Jeet',
  //     reviews: 2,
  //     likes: '80'
  //   },
  //   {
  //     id: 2,
  //     imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
  //     price: '5$',
  //     item: 'book',
  //     seller: 'Jeet',
  //     reviews: 2,
  //     likes: '80'
  //   },
  //   {
  //     id: 3,
  //     imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
  //     price: '5$',
  //     item: 'book',
  //     seller: 'Jeet',
  //     reviews: 2,
  //     likes: '80'
  //   },
  //   {
  //     id: 4,
  //     imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
  //     price: '5$',
  //     item: 'book',
  //     seller: 'Jeet',
  //     reviews: 2,
  //     likes: '80'
  //   },
  //   {
  //     id: 5,
  //     imageUrl: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg',
  //     price: '5$',
  //     item: 'book',
  //     seller: 'Jeet',
  //     reviews: 2,
  //     likes: '80'
  //   },
  // ];

  return (
    <div className="bg-black border-2 border-white p-5 rounded-lg text-center flex-1 mx-5 drop-shadow-lg hover:border-blue-500 duration-300">
      <h2 className="text-2xl font-bold mb-4"></h2>
      
      
      <div className="mb-8">
        <h3 className="text-lg text-white font-bold mb-2">Remove Your Advertisement</h3>
        <p className=" text-blue-500 mb-4">Manage your advertisements and listings here.</p>
        {/* <button className="bg-blue-600 text-white py-2 px-6 rounded shadow-md hover:bg-blue-700 transition-colors duration-300">Manage Ads</button> */}
      </div>
      
      
      <h3 className="text-lg font-bold mb-4">Your Products</h3>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {userData?.map(product => (
            <div key={product.id} className="bg-black border-2 border-white hover:border-blue-500  rounded-lg shadow-md p-4 relative w-64 flex-none">
              <img src={product.photo} alt="Product" className="w-full h-48 object-cover rounded-lg" />
              <div className="absolute top-4 right-4">
                
              </div>
              <div className="mt-4 flex justify-between">
                <div className="bg-black text-white py-2 px-4 rounded-full border-white border-2 hover:border-blue-500 shadow-md hover:">{product?.type}</div>
                
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold">{product.price}</h2>
                <p className="text-gray-700">{product.title}</p>
              </div>
              <div className="mt-2 block text-center">
               <button className='rounded-full bg-[#FF0000] hover:border-blue-500 hover:text-blue-500 text-white border-2 border-white p-2'>
                Delete
               </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
