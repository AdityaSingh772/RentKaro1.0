"use client"

import React from 'react';
import Sidebar from '@/components/forDashboard/Sidebar';
import Stats from '@/components/forDashboard/Stats';
import RemoveAd from '@/components/forDashboard/RemoveAd';
import { useUser } from '@auth0/nextjs-auth0/client';

import '@/utils/Dashboard.css';

const Dashboard: React.FC = () => {
   const {user,error,isLoading}=useUser();

   if (isLoading) return <div>Loading...</div>;
   if (error) return <div>{error.message}</div>;
  return (
    <div className="dashboard-container flex">
      <Sidebar />
      <div className="main-content flex-1 overflow-hidden">
        <div className="welcome mb-4">
          <h1 className='font-bold'>Hi, Welcome {user ? user.name : 'Guest'} 👋</h1>
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
