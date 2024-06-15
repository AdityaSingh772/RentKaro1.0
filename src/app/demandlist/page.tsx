"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

interface Demand {
  id: number;
  productname: string;
  demand: string;
  returnDate: string;
  description: string;
  duration: string;
}

const DemandList: React.FC = () => {
  const [demandData, setDemandData] = useState<Demand[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<Demand[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/api/demand`)
     .then(response => {
        console.log('Response:', response);
        setDemandData(response.data);
        setLoading(false);
      })
     .catch(error => {
        console.error('Error fetching demand data:', error);
        setError('Failed to fetch demand data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen bg-black py-8 px-4 mt-[4.5rem]">
<h1 className="text-blue-500 text-4xl text-center font-bold mt-[1.5rem] mb-[2.5rem]">Incoming Demands</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demandData.map(demand => (
            <div key={demand.id} className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl text-blue-500 font-semibold mb-2">{demand.productname}</h2>
              <p className="text-white mb-1"><strong>Demand Type:</strong> {demand.demand}</p>
              <p className="text-white mb-1"><strong>Return Date:</strong> {demand.returnDate}</p>
              <p className="text-white mb-1"><strong>Duration:</strong> {demand.duration}</p>
              <p className="text-white mt-4">{demand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default DemandList;

