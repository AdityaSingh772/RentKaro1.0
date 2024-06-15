"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import RentPage from './RentPage';

interface Product {
  id: number;
  type: string;
  brand: string;
  title: string;
  description: string;
  price: number;
  photos: string[];
  college: string;
  phone: string;
  email: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [college, setCollege] = useState<string>('');
  const [result, setResult] = useState<Product[]>([]);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get<Product[]>(`${process.env.NEXT_PUBLIC_SERVER_API}/api/search`, {
        params: { q: query, college: college }
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <div className="bg-neutral-700 shadow-black p-4 mt-[4.5rem] flex items-center justify-start gap-6 sticky top-0 z-10">
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-neutral-700 px-4 py-2 border rounded-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:bg-white drop-shadow-2xl"
              />
              <button type="submit">
                <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl text-blue-300 hover:text-blue-500" />
              </button>
            </div>
          </form>
        </div>

        <div className="relative">
          <select
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="px-4 text-white py-2 border rounded-full focus:outline-none focus:ring-2 bg-neutral-700"
          >
            <option value="">--College--</option>
            <option value="nitr">NIT Rourkela</option>
          </select>
        </div>
      </div>
      <RentPage searchRes={result} college={college} />
    </div>
  );
};

export default Search;
