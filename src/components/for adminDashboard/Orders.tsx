"use client";
import React from 'react';
import Image from 'next/image';
import { Product } from './invoice';

interface OrdersAdminProps {
  products: Product[];
}

const OrdersAdmin: React.FC<OrdersAdminProps> = ({ products }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Item-Image</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Seller</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">College</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
        </table>
        <div className="overflow-y-auto max-h-96">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 text-left text-sm font-medium text-gray-700">{product.id}</td>
                  <td className="px-6 py-4 text-left text-sm text-gray-700">
                    <img src="image-url" alt='image' />
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-gray-700">{product.brand}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-700">{product.title}</td>
                  <td className="px-6 py-4 text-right text-sm text-gray-700">{product.college}</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold">{product.phone}</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold flex justify-center items-center">
                    <Image src="/delete.png" height={25} width={25} alt="Delete" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersAdmin;
