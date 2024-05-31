"use client"

import axios from 'axios';
import React from 'react'
import { useState } from 'react'
//onSubmit={handleSubmit}

// interface DemandState {
//     productname: string,
//     demand: string,
//     description: string,
//     duration: Number,
//     returnDate: string
//   }
const Demandpage:React.FC= () => {
    const [DemandState, setDemandState] = useState({
    productname:'',
    demand: '',
    description: '',
    duration:0,
    returnDate:'',
    price:''
    });
     

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
        const { name, value } = e.target;
        setDemandState({
          ...DemandState,
          [name]: value
        });
      };


    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
            const demand=await axios.post('http://localhost:5000/api/demand',DemandState)
            //   console.log('Response:', demand.data);
              alert("The demand is sent for review from the admin");
        
        } catch (error) {
            console.log('Error uploading the form:', error);
        }
    }
 
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <form  onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Product Name</label>
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
              <label className="block text-gray-700 font-bold mb-2">Demand</label>
              <input
                type="text"
                name="demand"
                value={DemandState.demand}
                placeholder='Buy/Rent'
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Description</label>
              <textarea
                name="description"
                value={DemandState.description}
                
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Duration</label>
              <input
                type="number"
                name="price"
                placeholder='For how much period you want to buy or rent'
                value={DemandState.duration.toString()}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          
           <div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2">Return Date</label>
  <input
    type="date" // Change the type to "date"
    name="returnDate" // Optionally provide a name for the input
    value={DemandState.returnDate} // If you are using state to manage the input value
    onChange={handleChange} // If you have an onChange handler
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

export default Demandpage