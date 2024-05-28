"use client"

import React, { useState } from 'react';
import Sidebar from '@/components/for adminDashboard/Sidebar';
import InvoiceList from '@/components/for adminDashboard/InvoiceList';
import Header from '@/components/for adminDashboard/Header';
import OrdersAdmin from '@/components/for adminDashboard/Orders';
import RegisteredClient from '@/components/for adminDashboard/RegisteredClient';
import RegisteredCollege from '@/components/for adminDashboard/RegisteredCollege';

const MainLayout: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('InvoiceList');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'InvoiceList':
        return <InvoiceList />;
      case 'OrdersAdmin':
        return <OrdersAdmin />;
      case 'RegisteredClient':
        return <RegisteredClient />;
      case 'RegisteredCollege':
        return <RegisteredCollege />;
      default:
        return <InvoiceList />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 flex flex-col ml-64">
        <Header />
        <main className="flex-1 p-6">
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
