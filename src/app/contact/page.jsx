"use client"
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:5000/api/contact-message', formData);
        console.log('Sending email', response.data);
        alert('Email sent successfully!');
        setFormData(
          {
            name:"",
            email:"",
            message:"",
          }
        )
    } catch (error) {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
    }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 max-w-md w-full border border-blue-500 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-white mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-blue-500"> Name </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-black rounded-md shadow-sm  hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-blue-500">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-black rounded-md shadow-sm hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-blue-500">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border border-black rounded-md shadow-sm  hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              rows="4"
              required
          ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className=" block w-full px-4 py-2 hover:bg-white border-2 border-blue-500 hover:border-white bg-black text-white hover:text-black rounded-full  shadow-md hover:shadow-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
