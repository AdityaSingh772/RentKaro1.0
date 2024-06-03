// src/components/for adminDashboard/InvoiceItem.tsx
import React from 'react';
import { Invoice } from './invoice';

interface InvoiceItemProps {
  invoice: Invoice;
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({ invoice }) => {
  const statusStyles: { [key in Invoice['status']]: string } = {
    Paid: 'text-green-500',
    Unpaid: 'text-yellow-500',
    Overdue: 'text-red-500',
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className="px-6 py-4 text-left text-sm font-medium text-gray-700">{invoice.id}</td>
      <td className="px-6 py-4 text-left text-sm text-gray-700">{invoice.client}</td>
      <td className="px-6 py-4 text-right text-sm text-gray-700">${invoice.amount.toFixed(2)}</td>
      <td className="px-6 py-4 text-right text-sm text-gray-700">{invoice.date}</td>
      <td className="px-6 py-4 text-right text-sm text-gray-700">{invoice.dueDate}</td>
      <td className={`px-6 py-4 text-right text-sm font-semibold ${statusStyles[invoice.status]}`}>
        {invoice.status}
      </td>
    </tr>
  );
};

export default InvoiceItem;
