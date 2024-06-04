"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react';
import Sidebar from '@/components/forDashboard/Sidebar';
import Stats from '@/components/forDashboard/Stats';
import RemoveAd from '@/components/forDashboard/RemoveAd';
import { useUser } from '@auth0/nextjs-auth0/client';
import Preloader from '@/components/PreLoader';
import axios from 'axios';

import '@/utils/Dashboard.css';

interface Product {
  id: number;
  type:string,
  email:string;
  brand: string;
  title: string;
  description: string;
  price: string;
  photo: string;
  college: string;
  phone: string;
}

const Dashboard: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();


  useEffect( () => {
    if(!user && !isLoading){
      router.push("/defaultPage");
    }
  }, [isLoading, user, router]);
  
  const email = user ? user.email || '' : '';

  const [result, setResult] = useState<Product[]>([]);


  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_API}/api/dashboard`, {
        params: {
          email: email
        }
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  fetchData()
}, [user]);

  if (isLoading) return <div><Preloader/></div>;
  if (error) return <div>Error: {error.message}</div>;

  

  return (
    user ? (
      <div className="flex bg-black mt-[4.75rem]">
        <Sidebar />
        <div className="main-content flex-1 overflow-hidden">
          <div className="welcome mb-4">
            <h1 className='font-bold text-[1.5rem] text-white'>{user.name}</h1>
          </div>
          <Stats userData = {result} />
          <div className="charts">
            <RemoveAd userData = {result}/>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Dashboard;