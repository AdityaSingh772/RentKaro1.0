import React from 'react';
import InvoiceItem from './InvoiceItem';

const invoices = [
  { id: 1, client: 'John Doe', amount: 100.00, date: '2024-04-01', status: 'Paid', dueDate: '2024-04-10' },
  { id: 2, client: 'Jane Smith', amount: 150.50, date: '2024-04-15', status: 'Unpaid', dueDate: '2024-04-25' },
  { id: 3, client: 'Acme Inc.', amount: 225.75, date: '2024-04-20', status: 'Overdue', dueDate: '2024-04-30' },
];

const InvoiceList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto p-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Due Date</th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {invoices.map((invoice) => (
            <InvoiceItem key={invoice.id} invoice={invoice} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceList;
