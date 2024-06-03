import React from 'react';
import Image from 'next/image';
import { Order } from './invoice';

interface OnthewayOrdersProps {
  orders: Order[];
}

const OnthewayOrders: React.FC<OnthewayOrdersProps> = ({ orders }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Demand</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Return Date</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Is Review</th>
              <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Delete</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr  className="hover:bg-gray-100">
                <td className="px-6 py-4 text-left text-sm font-medium text-gray-700">{order.productname}</td>
                <td className="px-6 py-4 text-left text-sm text-gray-700">{order.demand}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{order.description}</td>
                {/* <td className="px-6 py-4 text-right text-sm text-gray-700">{order.duration}</td> */}
                <td className="px-6 py-4 text-right text-sm text-gray-700">{order.returnDate.toString()}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{order.isreview}</td>
                <td className="px-6 py-4 text-right text-sm font-semibold flex justify-center items-center">
                  <Image src="/delete.png" height={25} width={25} alt="Delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OnthewayOrders;
