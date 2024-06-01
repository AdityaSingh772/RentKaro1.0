"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/forDashboard/Sidebar';
import Stats from '@/components/forDashboard/Stats';
import RemoveAd from '@/components/forDashboard/RemoveAd';
import { useUser } from '@auth0/nextjs-auth0/client';
import Preloader from '@/components/PreLoader';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  // Redirect to the homepage if user is not logged in
  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/");
    }
  }, [isLoading, user, router]);

  // State for storing user data
  const [userData, setUserData] = useState<Product[]>([]);

  // Fetch user data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user) {
          const response = await axios.get(`http://localhost:5000/api/dashboard`, {
            params: {
              email: user.email || ''
            }
          });
          setUserData(response.data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, [user]);

  // Loading indicator while fetching user data
  if (isLoading) return <Preloader />;

  // Display error message if there's an error
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex bg-black">
      <Sidebar />
      <div className="main-content flex-1 overflow-hidden">
        <div className="welcome mb-4">
          <h1 className='font-bold text-[1.5rem] text-white'>{user?.name}</h1>
        </div>
        <Stats userData={userData} />
        <div className="charts">
          <RemoveAd userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
