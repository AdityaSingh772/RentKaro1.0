import React from 'react';
import { FiHeart } from 'react-icons/fi';

interface Product {
  id: number;
  type: string;
  email: string;
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
    <div className="bg-gray-100 p-4 m-10 rounded-lg overflow-y-auto hifit">
      {Products.length === 0 ? (
        <div className="text-center text-gray-700">Sorry, no results found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4 relative">
              <img src={product.photo} alt={product.title} className="w-full h-48 object-cover rounded-lg" />
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
                <p className="text-gray-700">{product.title}</p>
              </div>
              <div className="mt-2 flex justify-between text-gray-600">
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
