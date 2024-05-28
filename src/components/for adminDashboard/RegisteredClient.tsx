// src/components/for adminDashboard/RegisteredClient.tsx
import React from 'react';
import { User } from './invoice';

interface RegisteredClientProps {
  user: User[];
}

const RegisteredClient: React.FC<RegisteredClientProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Sex</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Hostel</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Phone-No.</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {user.map((client) => (
            <tr key={client.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 text-left text-sm font-medium text-gray-700">{client.id}</td>
              <td className="px-6 py-4 text-left text-sm text-gray-700">{client.name}</td>
              <td className="px-6 py-4 text-right text-sm text-gray-700">{client.email}</td>
              <td className="px-6 py-4 text-right text-sm text-gray-700">{client.gender}</td>
              <td className="px-6 py-4 text-right text-sm text-gray-700">{client.college}</td>
              <td className="px-6 py-4 text-right text-sm text-gray-700">{client.hostel}</td>
              <td className="px-6 py-4 text-right text-sm text-gray-700">{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegisteredClient;
