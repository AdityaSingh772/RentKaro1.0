"use client"

import React from 'react';
import Sidebar from '@/components/forDashboard/Sidebar';
import Stats from '@/components/forDashboard/Stats';
import RemoveAd from '@/components/forDashboard/RemoveAd';

import '@/utils/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container flex">
      <Sidebar />
      <div className="main-content flex-1 overflow-hidden">
        <div className="welcome mb-4">
          <h1 className='font-bold'>Hi, Welcome Aditya 👋</h1>
        </div>
        <Stats />
        <div className="charts">
          <RemoveAd />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
