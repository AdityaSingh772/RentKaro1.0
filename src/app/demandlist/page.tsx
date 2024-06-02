"use client"
import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

// const demandData = [
//   {
//     id: 1,
//     productName: "Laptop",
//     demandType: "Buy",
//     returnDate: "2024-07-01",
//     description: "Looking for a high-end gaming laptop.",
//     duration: "N/A"
//   },
//   {
//     id: 2,
//     productName: "Bike",
//     demandType: "Rent",
//     returnDate: "2024-06-15",
//     description: "Need a bike for daily commute.",
//     duration: "3 months"
//   },
//   {
//     id: 3,
//     productName: "Camera",
//     demandType: "Rent",
//     returnDate: "2024-08-20",
//     description: "Need a DSLR camera for a project.",
//     duration: "2 weeks"
//   },
//   {
//     id: 4,
//     productName: "Textbook",
//     demandType: "Buy",
//     returnDate: "N/A",
//     description: "Looking for a second-hand biology textbook.",
//     duration: "N/A"
//   }
// ];


// Define the type for demand data
interface Demand {
  id: number;
  productName: string;
  demandType: string;
  returnDate: string;
  description: string;
  duration: string;
}

const DemandList: React.FC = () => {
  const [demandData, setDemandData] = useState<Demand[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get<Demand[]>('http://localhost:5000/api/demand')
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
    <div className="min-h-screen bg-gray-900 py-8 px-4 mt-8">
<h1 className="text-3xl font-bold text-center mt-7 mb-8 text-white relative">
  <span className="border-b-4 border-blue-500 mb-4">Demand List</span>
</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demandData.map(demand => (
            <div key={demand.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-2">{demand.productName}</h2>
              <p className="text-gray-700 mb-1"><strong>Demand Type:</strong> {demand.demandType}</p>
              <p className="text-gray-700 mb-1"><strong>Return Date:</strong> {demand.returnDate}</p>
              <p className="text-gray-700 mb-1"><strong>Duration:</strong> {demand.duration}</p>
              <p className="text-gray-700 mt-4">{demand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default DemandList;

