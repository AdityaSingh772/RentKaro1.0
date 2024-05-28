// src/components/for adminDashboard/Orders.tsx
import React from 'react';
import Image from 'next/image';



const OrdersAdmin: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item-Image</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Seller</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>

          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 text-left text-sm font-medium text-gray-700">1</td>
      <td className="px-6 py-4 text-left text-sm text-gray-700">
        <img src="" alt="Dinesh's Cycle" />
      </td>
      <td className="px-6 py-4 text-right text-sm text-gray-700">Cycle</td>
      <td className="px-6 py-4 text-right text-sm text-gray-700">29-05-2024</td>
      <td className="px-6 py-4 text-right text-sm text-gray-700">NIT-Rourkela</td>
      <td className="px-6 py-4 text-right text-sm font-semibold ">
        88902-*****
      </td>
      <td className="px-6 py-4 text-right text-sm font-semibold flex justify-center items-center">
        <Image src="/delete.png" height={25} width={25} alt='' />
      </td>
    </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersAdmin;
