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

interface ProductListProps {
  Products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ Products }) => {

return (
  <div className="bg-black p-4 m-10 rounded-lg">
    {Products.length === 0 ? (
      <div className="text-center text-white">Sorry, no results found</div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 overflow-y-auto h-fit scroll-smooth">
        {Products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg shadow-md p-4 relative hover:bg-gray-700 transition duration-300">
            <img src={product.photo} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
            <div className="absolute top-4 right-4">
              <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg focus:outline-none">
                <FiHeart className="text-red-500" />
              </button>
            </div>
            <div className="mt-4 flex justify-between">
              
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300">Owner wants to {product.type}</button>
             
            </div>
            <div className="mt-4">
              <h2 className="text-xl font-bold text-blue-500">{product.price}</h2>
              <p className="text-white">{product.title}</p>
            </div>
            <div className="mt-2 flex justify-between text-gray-400">
              <span>Brand: {product.brand}</span>
              <span>Contact: {product.phone}</span>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);
};



export default ProductList;
