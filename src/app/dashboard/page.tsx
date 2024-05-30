"use client"
 
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react';
import Sidebar from '@/components/forDashboard/Sidebar';
import Stats from '@/components/forDashboard/Stats';
import RemoveAd from '@/components/forDashboard/RemoveAd';
import { useUser } from '@auth0/nextjs-auth0/client';
import Preloader from '@/components/PreLoader';

import '@/utils/Dashboard.css';

const Dashboard: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect( () => {
    if(!user){
      router.push("/");
    }
  }, [isLoading, user, router]);

  if (isLoading) return <div><Preloader/></div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    user ? (
      <div className="flex bg-black">
        <Sidebar />
        <div className="main-content flex-1 overflow-hidden">
          <div className="welcome mb-4">
            <h1 className='font-bold text-[1.5rem] text-white'>{user.name}</h1>
          </div>
          <Stats />
          <div className="charts">
            <RemoveAd />
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Dashboard;
