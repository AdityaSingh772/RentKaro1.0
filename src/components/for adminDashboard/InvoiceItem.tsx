import React from 'react';

const InvoiceItem = ({ invoice }) => {
  const statusStyles = {
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
