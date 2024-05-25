import React from 'react';
import Sidebar from '@/components/for adminDashboard/Sidebar';
import InvoiceList from '@/components/for adminDashboard/InvoiceList';
import Header from '@/components/for adminDashboard/Header';

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
    <Sidebar />
    <div className="flex-1 flex flex-col ml-64">
      <Header />
      <main className="flex-1 p-6">
        <InvoiceList />
      </main>
    </div>
  </div>
  );
};

export default MainLayout;
