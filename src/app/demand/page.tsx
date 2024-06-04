"use client"

import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Demandpage: React.FC = () => {
  const [DemandState, setDemandState] = useState({
    productname: '',
    demand: '',
    description: '',
    duration: 0,
    returnDate: '',
    price: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDemandState({
      ...DemandState,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const demand = await axios.post(`${process.env.SERVER_API}/api/demand`, DemandState);
      alert("The demand is sent for review from the admin");
      setTimeout(() => {
        window.location.href = '/';
      }, 2000);



    } catch (error) {
      console.log('Error uploading the form:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black mt-9">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black border-2 py-[1.5rem] mt-[7rem] mb-[3rem] border-blue-500 p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Product Name</label>
          <input
            type="text"
            name="productname"
            value={DemandState.productname}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Demand</label>
          <input
            type="text"
            name="demand"
            value={DemandState.demand}
            placeholder="Buy/Rent"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={DemandState.description}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Duration</label>
          <input
            type="number"
            name="duration"
            placeholder="In Months"
            value={DemandState.duration.toString()}
            onChange={handleChange}
            min="1"
            max="9"
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Return Date</label>
          <input
            type="date"
            name="returnDate"
            value={DemandState.returnDate}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-500 font-bold mb-2">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={DemandState.price}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Post Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Demandpage;
