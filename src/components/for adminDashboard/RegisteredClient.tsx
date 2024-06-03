import React from 'react';
import { User } from './invoice';

interface RegisteredClientProps {
  user: User[];
}

const RegisteredClient: React.FC<RegisteredClientProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
      <div className="table-wrapper" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">ID</th>
              <th className="sticky top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Name</th>
              <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Email</th>
              <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Sex</th>
              <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">College</th>
              <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Hostel</th>
              <th className="sticky top-0 px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50">Phone-No.</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {user.map((clients) => (
              <tr key={clients.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 text-left text-sm font-medium text-gray-700">{clients.id}</td>
                <td className="px-6 py-4 text-left text-sm text-gray-700">{clients.name}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{clients.email}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{clients.gender}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{clients.college}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{clients.hostel}</td>
                <td className="px-6 py-4 text-right text-sm text-gray-700">{clients.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredClient;
